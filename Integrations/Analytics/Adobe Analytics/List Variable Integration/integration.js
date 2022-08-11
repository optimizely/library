var decisionString = window.optimizely.get('state').getDecisionString({
  campaignId: campaignId,
  shouldCleanString: true
});
var redirectInfo = window.optimizely.get('state').getRedirectInfo();

var csvToArray = function(csv) {
  return csv.length ? (csv || '').split(/,\s*/) : [];
}

// Public Methods
var adobeIntegrator = {
  campaignDecisions: [],
  appendToProperty: function(sVariable, listVar, decision) {
    if (typeof sVariable[listVar] === 'undefined') sVariable[listVar] = ''; //default to string format
    
    if (sVariable[listVar].constructor === Array) { // this listVarVar was previously defined as a string
      sVariable[listVar] = sVariable[listVar].concat(decision);
    } 
    else { // this listVarVar was previously defined as a string
      sVariable[listVar] = csvToArray(sVariable[listVar]);
      sVariable[listVar].push(decision);
      sVariable[listVar] = sVariable[listVar].join(',');
    }
  },
  populateTrackerClearDecisions: function(sVariable) {
    var _this = this;
    this.campaignDecisions.forEach(function(i) {
      _this.appendToProperty(sVariable, i.listVar, i.decision);
    });
    this.campaignDecisions = [];
  },
  // Accepts "s" variable as a param and assigns eVars to object.  
  assignCampaigns: function(sVariable) {
    if (!!redirectInfo) sVariable.referrer = redirectInfo.referrer;
    this.populateTrackerClearDecisions(sVariable);
  },
  // Accepts "s" variable as a param and assigns eVars to object, then dispatches custom link tracking.
  trackDelayedCampaigns: function(sVariable) {
    var _this = this;
    this.campaignDecisions.forEach(function(i) {
      _this.appendToProperty(sVariable, 'linkTrackVars', i.listVar);
    });    
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
if (!!decisionString) window.optimizely.get("custom/adobeIntegrator").campaignDecisions.push({
  'listVar': extension.list,
  'decision': decisionString
});