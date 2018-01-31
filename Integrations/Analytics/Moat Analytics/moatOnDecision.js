//Fetch Optimizely State
var state = optimizely.get('state');
//Use the getDecisionString API to get a string with relevant data from customer
var string = state.getDecisionString({"campaignId":campaignId,"shouldCleanString":true});
//Check for a truthy value for the string indicating a visitor has been successfully bucketed and is relevant for tracking
if(string){
	//Split the generated string, replacing colons with '|' after the first to fit within Moat's slicer logic
	var array = string.split(':');
	var key = array[0];
	var value = array.slice(1).join('|');
  	var pipe_string = key + ':' + value;
	//Push value new value to optimizelyMoat object
	window.optimizelyMoat = window.optimizelyMoat || [];
	window.optimizelyMoat.push(pipe_string);
}
