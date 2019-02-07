var utils = window.optimizely.get('utils');
var setCookie = function(c_name,value,exdays,c_domain) {
  c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
  var exdate=new Date(); exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
};

utils.waitForElement('body').then(function(element){
  var html = widget.$html;
  var cookieName = 'butterbar_' + widget.id + '_dismissed';

  element.insertAdjacentHTML('afterbegin',html);

  // Handle close action setCookie(cookieName, 'true', 90);
  utils.waitUntil(function() {
    var closerOnPage = document.querySelectorAll('#parka');
    return closerOnPage.length > 0;
  }).then(function() {
    document.getElementById("parka").addEventListener('click', function (event) {
      document.getElementsByClassName('banner')[0].classList.add('hide-banner');
      document.getElementsByTagName('body')[0].classList.add('body-no-margin');
    });
  });
});

