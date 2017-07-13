//Fetch Optimizely State
var state = optimizely.get('state');
//Get the current Decision String from the state
var string = state.getDecisionString({"campaignId":campaignId,"shouldCleanString":true});
//Check for a truthy value for the string indicating a visitor has been successfully bucketed
if (string) {
  //create or update the window-level optimizelyMoat array with the Decision String if 
	window.optimizelyMoat = window.optimizelyMoat || [];
	window.optimizelyMoat.push(string);
}
