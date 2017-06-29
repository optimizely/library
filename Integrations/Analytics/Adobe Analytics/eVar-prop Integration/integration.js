var decisionString = window.optimizely.get('state').getDecisionString({campaignId: campaignId, shouldCleanString: true});
var eVar = extension.eVar;
var prop = extension.prop;
var campaignObject = {};
if (!!eVar) campaignObject[eVar] = decisionString;
if (!!prop) campaignObject[prop] = decisionString;

// Public Methods
var adobeIntegrator = {
	// Array of active campaigns/experiments
	campaignArray: [],
	// Accepts "s" variable as a param and assigns eVars to object.
	assignCampaigns: function(sVariable) {
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
			Object.assign(sVariable, this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
	},
	// Accepts "s" variable as a param and assigns eVars to object, then dispatches custom link tracking.
	trackDelayedCampaigns: function(sVariable) {
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
      sVariable.linkTrackVars += "," + Object.keys(this.campaignArray[i])[0];
			Object.assign(sVariable, this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
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
if (!!decisionString) window.optimizely.get("custom/adobeIntegrator").campaignArray.push(campaignObject);