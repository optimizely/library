// VERSION 0.1.0
// Last Updated: July 9th 2019

var dataSent = false;
var MAX_ATTEMPTS = 9;
var RETRY_DELAY_MS = 1000;

function getCampaignInfo() {
 return window.optimizely
 .get("state")
 .getDecisionObject({ campaignId: campaignId });
}

function logEvent() {
 var campaignInfo = getCampaignInfo();

 if (campaignInfo) {
 var eventProperties = {
 "[Optimizely Campaign]": campaignInfo.campaign,
 "[Optimizely Experiment]": campaignInfo.experiment,
 "[Optimizely Variation]": campaignInfo.variation,
 "[Optimizely Holdback]": campaignInfo.holdback
 };
 amplitude.getInstance(extension.instance_name).logEvent(extension.event_name, eventProperties);
 }
}

function identifyCall() {
 var campaignInfo = getCampaignInfo();

 if (campaignInfo) {
 var identify = new amplitude.Identify().set(
 extension.property_prefix + " " + campaignInfo.experiment,
 campaignInfo.variation
 );
 amplitude.getInstance(extension.instance_name).identify(identify);
 }
}

function sendData() {
 if (!dataSent) {
 identifyCall();
 if (extension.send_event === "y") {
 logEvent();
 }
 }
 dataSent = true;
}

function sendToAmplitude(call) {
 if (call >= MAX_ATTEMPTS) {
 return;
 }
 
 var instanceKey = extension.instance_name || "$default_instance";

 if (window.amplitude && window.amplitude.getInstance) {
 var instance = window.amplitude.getInstance(extension.instance_name);
 
 if (instance._isInitialized) {
 return sendData();
 } else if (instance.onInit) {
 instance.onInit(function() {
 sendData();
 });
 return;
 }
 }
 
 return setTimeout(function() {
 sendToAmplitude(call + 1);
 }, RETRY_DELAY_MS);
}
sendToAmplitude(0);