// For full developer documentation see: 
// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin

var utils = optimizely.get('utils');

// Function to initialize Facebook JS SDK
window.fbAsyncInit = function() {
  FB.init({	
    appId            : extension.appId,
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
  });
};

// Async function to load Facebook SDK
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'))

// Optimizely utility function to wait for the Body to appear in the DOM before appending FB Messeenger Widget
// https://developers.optimizely.com/x/solutions/javascript/reference/#function_waitforelement
utils.waitForElement('body').then(function(el){	
	el.insertAdjacentHTML('afterbegin', extension.$html);
});
