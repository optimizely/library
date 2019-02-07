var decisionString = window.optimizely.get('state').getDecisionString({
  campaignId: campaignId,
  shouldCleanString: true
});
var redirectInfo = window.optimizely.get('state').getRedirectInfo();

var gaIntegrator = {

  fieldsObject: { nonInteraction: true },

  gaDispatch: function(ga) {
    // Override referrer if Optimizely is redirecting.
    if (!!redirectInfo) ga('set', 'referrer', redirectInfo.referrer);
    var prefix = extension.customTrackerName ? extension.customTrackerName + '.' : '';
    ga(prefix+'send', 'event', 'optimizely-custom', "Assigned to Campaign", this.fieldsObject);
  }
};

// Scopes `gaIntegrator` object to Optimizely namespace.
if (!window.optimizely.get("custom/gaIntegrator")) {
  window.optimizely.push({
    type: "registerModule",
    moduleName: "gaIntegrator",
    module: gaIntegrator
  });
}

// Failing Audiences returns `null`, failing Traffic Allocation returns `undefined` for decisionString.
if (!!decisionString) {
  window.optimizely.get("custom/gaIntegrator").fieldsObject['dimension' + extension.customDimensionSlot] = decisionString;
}

// If the `ga` object is already defined, then dispatch custom event immediately.
if (!!window.ga) {
	gaIntegrator.gaDispatch(window.ga);
}
