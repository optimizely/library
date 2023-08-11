// We define the HotJar object if this has not been done already
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};

// We get the decision in a string
const decisionString = window.optimizely.get('state').getDecisionString({
  campaignId: campaignId,
  shouldCleanString:true,
  maxLength:50
});

if (extension.heatmaps === 'true') {
  // If the visitor is in the holdback
  if (isHoldback === true) {
    // We trigger the heatmap
    hj('trigger', `${extension.javascript_trigger}_holdback`);
  } else {
    // We trigger the heatmap
    hj('trigger', `${extension.javascript_trigger}_${variationId}`);
  }
}

if (extension.recordings === 'true') {
  // We tag recordings with experiment info
  hj('tagRecording', [decisionString]);
}
