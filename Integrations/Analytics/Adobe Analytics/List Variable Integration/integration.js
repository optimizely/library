// This extension integrates Optimizely w/ Adobe via a pre-defined list variable. Set the list variable on line 3 below.
var decisionString = window.optimizely.get('state').getDecisionString({campaignId: campaignId, shouldCleanString: true});
var list = "list1";

// Public Methods
var adobeIntegrator = {
	// Array of objects for active campaigns/experiments
	campaignArray: [],
	// Accepts "s" variable as a param and assigns campaigns/experiments to list.
	assignCampaigns: function(sVariable) {
    	sVariable[list] = sVariable[list] || [];
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
    		sVariable[list].push(this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
	},
	// Accepts "s" variable as a param and assigns eVars to object, then dispatches custom link tracking.
	trackDelayedCampaigns: function(sVariable) {
	    sVariable[list] = sVariable[list] || [];
	    sVariable.linkTrackVars += ",list1";
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
			sVariable[list].push(this.campaignArray[i]);
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
if (!!decisionString) window.optimizely.get("custom/adobeIntegrator").campaignArray.push(decisionString);