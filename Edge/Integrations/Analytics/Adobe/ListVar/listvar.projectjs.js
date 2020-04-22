/**
 * Adobe Analytics Integration
 * [Installed in Project JS]
 */
var adobeIntegrator = {
  LISTVAR: "YOUR-LISTVAR-HERE, ie: 'list3'",
  campaignArray: [],
  assignCampaigns: function(sVariable) {
    sVariable[this.LISTVAR] = sVariable[this.LISTVAR] || [];
    for (var i = this.campaignArray.length - 1; i >= 0; i--) {
      sVariable[this.LISTVAR].push(this.campaignArray[i]);
      this.campaignArray.splice(i, 1);
    }
  },
  trackDelayedCampaigns: function(sVariable) {
    sVariable[this.LISTVAR] = sVariable[this.LISTVAR] || [];
    sVariable.linkTrackVars += ("," + this.LISTVAR);
    for (var i = this.campaignArray.length-1; i >= 0; i--) {
      sVariable[this.LISTVAR].push(this.campaignArray[i]);
      this.campaignArray.splice(i, 1);
    }
    sVariable.tl(true, "o", "OptimizelyLayerDecision");
  },
  formatActiveExperiments: function() {
    var expList = [],
        expObj = window.optimizelyEdge.get('state').getActiveExperiments();
    for (var exp in expObj) {
      expList.push(expObj[exp].id + ":" + expObj[exp].variation.id);
    }
    return expList;
  },
  init: function() {
    var activeExperimentsArray = this.formatActiveExperiments();
    if (activeExperimentsArray.length) this.campaignArray = activeExperimentsArray;
  }
};

adobeIntegrator.init();

window.OptimizelyEdgeIntegrators = {
  get: function(name) {
    if (name === 'adobe') {
      return adobeIntegrator;
    }
    throw new Error(name + ' is not a supported module');
  }
}


