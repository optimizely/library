/*Exposing a window-level function to clear localStorage values who's key includes the substring 'optimizely' 
*/
window.clearOptlyLocalStorage = function(){
    for (var key in window.localStorage){
        if(key.indexOf('optimizely') !== -1){
            window.localStorage.removeItem(key)
        }
    }
}
//The function can be called from Optimizely Project JS based on an available boolean flag, such as a cookie's value 
var optly_should_clear = window.customer_storage_flag_boolean;
if(optly_should_clear){
    clearOptlyLocalStorage();
}
