var decisionString = window.optimizely.get('state').getDecisionString({
  campaignId: campaignId,
  shouldCleanString: true
});
var redirectInfo = window.optimizely.get('state').getRedirectInfo();
var eVar = extension.eVar;
var prop = extension.prop;

// Public Methods
var adobeIntegrator = {
  campaignDecisions: {},
  // Accepts "s" variable as a param and assigns eVars to object.
  populateTrackerClearDecisions: function(sVariable) {
    for (var allocation in this.campaignDecisions) {
      sVariable[allocation] = this.campaignDecisions[allocation];
    }
    this.campaignDecisions = {};
  },
  assignCampaigns: function(sVariable) {
    if (!!redirectInfo) sVariable.referrer = redirectInfo.referrer;
    this.populateTrackerClearDecisions(sVariable);
  },
  // Accepts "s" variable as a param and assigns eVars to object, then dispatches custom link tracking.
  trackDelayedCampaigns: function(sVariable) {
    sVariable.linkTrackVars = (sVariable.linkTrackVars ? sVariable.linkTrackVars += ',' : '') + Object.keys(this.campaignDecisions);
    this.populateTrackerClearDecisions(sVariable);
    sVariable.tl(true, "o", "OptimizelyLayerDecision");
  }
};

// Scopes `campaignArray` to Optimizely object.
if (!window.optimizely.get("custom/adobeIntegrator")) {
  window.optimizely.push({
    type: "registerModule",
    moduleName: "adobeIntegrator",
    module: adobeIntegrator
  });
}

// Failing Audiences returns `null`, failing Traffic Allocation returns `undefined` for decisionString.
if (!!decisionString) {
  if (eVar) window.optimizely.get("custom/adobeIntegrator").campaignDecisions[eVar] = decisionString;
  if (prop) window.optimizely.get("custom/adobeIntegrator").campaignDecisions[prop] = decisionString;
}