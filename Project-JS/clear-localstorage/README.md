# clear_localstorage.js

Optimizely uses persistent visitor-level [cookies](https://help.optimizely.com/Set_Up_Optimizely/Cookies_and_localStorage_in_the_Optimizely_snippet#Cookies) and [localStorage](https://help.optimizely.com/Set_Up_Optimizely/Cookies_and_localStorage_in_the_Optimizely_snippet#localStorage) to uniquely identify visitors, track their actions, and deliver consistent experiences across page loads. 

If in the course of your Optimizely usage you would like to clear stored values associated with Optimizely from your users' localStorage, for storage size management, compliance or other reasons, this code sample provides an example function that can be called form Project JS or invoked as a window-level function to do so. Specifically the function will iterate through all localStorage keys and clear any key:value pairs with the substring 'optimizely' in the keyname.
 
