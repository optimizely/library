// We define the HotJar object if this has not been done already
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};

var decisionString = window.optimizely.get("state").getDecisionString({
  campaignId: campaignId,
  shouldCleanString:true,
  maxLength:50
 });

console.log('decisionString');
console.log(decisionString);

// We trigger the heatmap for this variation
if(extension.heatmaps === "true") {
  hj('trigger', extension.javascript_trigger+'_'+variationId);
  console.log('HJ Javascript trigger', extension.javascript_trigger);
}

if(extension.recordings === "false") {
  // We tag recordings with experiment info
  hj('tagRecording', [DecisionString]);
}


