/*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */

var decisionString = optimizely.get('state').getDecisionString({
  campaignId: campaignId,
  shouldCleanString: true,
  maxLength: 255
});

if(!!decisionString) {
    optimizely.get('utils').waitUntil(function() {
      return window.gtag !== undefined
    }).then(function() {
        var payload = {};
        payload[extension['dimension_name']] = decisionString;
        payload['event_category'] = decisionString;
        gtag('event', 'Optimizely Experiment', payload);
    }); 
}
