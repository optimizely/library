var utils = window.optimizely.get('utils');

utils.waitForElement('body').then(function(element){
	var html = widget.$html;
  element.insertAdjacentHTML('afterbegin', html);
  element.addEventListener('mouseleave', function(){
    showPopup();
		bindCloseBtn();
  });
});

function showPopup() {
  if(document.querySelector('.fade-out')){
	  document.querySelector('.fade-out').classList.remove('fade-out');
  }
  document.querySelector('.exit-intent-modal').classList += ' fade-in';
}

function closePopup() {
	var modal = document.querySelector('.exit-intent-modal');
  modal.parentNode.removeChild(modal);
}

function bindCloseBtn() {
	document.querySelector('.exit-popup-close').addEventListener('click', function(e){
    closePopup();
  });
}
