// Pre conditions :
//   1: Econda-Tracking-Script is loaded before
(function(){
  var decObject = window.optimizely.get("state").getDecisionObject({campaignId: campaignId});
                if( typeof window.emos3 !== 'undefined'){
                               window.emos3.send({ type: 'event', abtest:  [ [decObject.experiment , decObject.variation] ] }); 
  } else if (typeof(window.emosPropertiesEvent)== "function"){
                               window.emosPropertiesEvent({ type: 'event', abtest:  [ [decObject.experiment , decObject.variation] ] }); 
  } else {
               console.log("Problem: econda A/B Test Tracking is activated but tracking library is not yet loaded. Could not send data to econda.");
  }
})();