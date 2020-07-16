window.optlyHelper = (function () {
  return {
    v: "1.26",
    logEnabled: false,
    helperLog: function (msg) {
      if (this.logEnabled) {
        console.log("OPTLY HELPER (v" + this.v + ") ---- " + msg);
      }
    },
    getCookieValue: function (a) {
      var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
    },
    setCookieValue: function (cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.{YOUR_DOMAIN}.com;path=/";
    },
    activeExperiments: {}
  };
})();
// Module to save all Experiment Information, also from redirect cookie
window.optlyHelper.getExperimentInfo = (function () {
  var activeExperiments,
    redirectCookie,
    redirectVariables;
  function _getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }
  function _getQueryVariable(cookieValue) {
    var query = {};
    var pairs = (cookieValue[0] === '?' ? cookieValue.substr(1) : cookieValue).split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  }
  function _writeRedirectInfo(r) {
    optlyHelper.redirectInfo = r;
  }
  function init() {
    optlyHelper.helperLog("ADDING EXPERIMENT INFORMATION TO STATE OBJECT");
    activeExperiments = window.optimizelyEdge.get('state').getActiveExperiments();
    redirectCookie = _getCookieValue("optimizelyRedirectData");
    // Init redirect object
    // optlyHelper.redirectInfo = {};
    if (redirectCookie.length > 0) {
      optlyHelper.helperLog("GOT REDIRECT COOKIE VALUE");
      redirectVariables = _getQueryVariable(redirectCookie);
      if (redirectVariables.hasOwnProperty('r')) {
        _writeRedirectInfo(redirectVariables);
      }
      // Override Referrer of Page
      if (redirectVariables.hasOwnProperty('r') && redirectVariables.r.length > 0) {
        Object.defineProperty(document, "referrer", { get: function () { return redirectVariables.r; } });
      }
      activeExperiments[redirectVariables.x] = {
        'id': redirectVariables.x,
        'variation': {
          'id': redirectVariables.v
        }
      };
      optlyHelper.helperLog("Added redirect cookie information to active experiments");
    }
    optlyHelper.activeExperiments = activeExperiments;
  }
  return {
    init: init
  };
})();
// GA INTEGRATION MODULE
window.optlyHelper.gaIntegration = (function () {
  var timeoutInterval = 100,
    maxWait = 10000,
    waited = 0,
    allActiveExperiments;
  function _sendGaEvent(decisionString) {
    if (!!decisionString) {
      var prefix = 'tealium_0' + '.'; // Assign to ‘’ if no custom tracker
      optlyHelper.helperLog("Sending decision event to GA");
      window.ga(prefix + 'send', 'event', 'Optimizely', 'Assigned to Experiment', decisionString, { nonInteraction: true });
    }
  }
  // Needs to be customized for specific websites. Defines how we identify if GA is available
  function waitForGaEventApi(method) {
    if (window.ga && window.ga.getByName) {
      optlyHelper.helperLog("Found GA on the site");
      method();
    } else {
      if (waited < maxWait) {
        setTimeout(function () {
          waited = waited + timeoutInterval;
          waitForGaEventApi(method);
        }, timeoutInterval);
      } else {
        optlyHelper.helperLog("failed_to_find_ga");
      }
    }
  }
  function _getDecisionString(experimentInfo) {
    return "(" + experimentInfo.id + ":" + experimentInfo.variation.id + ")";
  }
  function init() {
    optlyHelper.helperLog("GA INTEGRATION START");
    waitForGaEventApi(function () {
      allActiveExperiments = optlyHelper.activeExperiments;

      for (var exp in allActiveExperiments) {
        if (allActiveExperiments.hasOwnProperty(exp)) {
          var experimentInfo = allActiveExperiments[exp];

          // Manage sending GA event                                
          var decisionString = _getDecisionString(experimentInfo);
          optlyHelper.helperLog("Got decision string");
          _sendGaEvent(decisionString);
        }
      }
    });
  }
  return {
    init: init,
    waitForGaEventApi: waitForGaEventApi
  };
})();
window.optlyHelper.getExperimentInfo.init();
window.optlyHelper.gaIntegration.init();
