// Get the decision from the decision Object
var decisionObject = window.optimizely.get("state").getDecisionObject({
  campaignId: campaignId,
  shouldCleanString: true
});

function sendDecisionData() {
  if (extension.qm_decision_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_decision_id,
      0,
      "Campaign: " +
        decisionObject.campaign +
        " \nExperiment: " +
        decisionObject.experiment +
        " \nVariation: " +
        decisionObject.variation
    );
  }
  if (extension.qm_campaign_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_campaign_id,
      0,
      decisionObject.campaign
    );
  }
  if (extension.qm_experiment_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_experiment_id,
      0,
      decisionObject.experiment
    );
  }
  if (extension.qm_variation_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_variation_id,
      0,
      decisionObject.variation
    );
  }
  if (extension.qm_holdback_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_holdback_id,
      0,
      decisionObject.variation
    );
  }
}

if (!!window.QuantumMetricAPI) {
  sendDecisionData();
} else {
  window.addEventListener("quantumReady", sendDecisionData);
}
