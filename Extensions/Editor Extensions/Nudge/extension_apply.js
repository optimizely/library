var utils = optimizely.get('utils');
var extensionId = 'optimizely-extension-' + extension.$instance

var removeExtension = function() {
  var extensionElement = document.getElementById(extensionId);
  if (extensionElement) {
    extensionElement.parentElement.removeChild(extensionElement);
    localStorage.setItem(extensionId, new Date());
  }
}

utils.waitForElement(extension.element_selector)
  .then(function(elem) {
    if (!localStorage.getItem(extensionId) || extension.frequency === 'always') {
      elem.insertAdjacentHTML('afterbegin', extension.$html);
      var nudgeElement = elem.querySelector('.nudge-container');
      var arrowContainer = nudgeElement.querySelector('.arrow-container');
      var arrow = nudgeElement.querySelector('.arrow');
      nudgeElement.style.width = nudgeElement.offsetWidth + 'px';
      nudgeElement.style.color = extension.text_color;

      switch (extension.placement) {
        case 'right':
          nudgeElement.style.left = elem.offsetWidth / 2 + nudgeElement.offsetWidth / 2 + 10;
          nudgeElement.classList.add('wiggler');
          arrowContainer.classList.add('arrow-left-container');
          arrow.classList.add('arrow-left');
          arrow.style.borderRightColor = extension.color;
          break;
        case 'left':
          nudgeElement.style.left = - elem.offsetWidth / 2 - nudgeElement.offsetWidth / 2 - 10 - 10;
          nudgeElement.classList.add('wiggler');
          arrowContainer.classList.add('arrow-right-container');
          arrow.classList.add('arrow-right');
          arrow.style.borderLeftColor = extension.color;
          break;
        case 'top':
          nudgeElement.style.top = - elem.offsetHeight / 2 - nudgeElement.offsetHeight / 2 - 10 - 10;
          nudgeElement.classList.add('bouncer');
          arrowContainer.classList.add('arrow-down-container');
          arrow.classList.add('arrow-down');
          arrow.style.borderTopColor = extension.color;
          break;
        case 'bottom':
          nudgeElement.style.top = elem.offsetHeight / 2 + nudgeElement.offsetHeight / 2 + 10;
          nudgeElement.classList.add('bouncer');
          arrowContainer.classList.add('arrow-up-container');
          arrow.classList.add('arrow-up');
          arrow.style.borderBottomColor = extension.color;
          break;
        default:
          break;
      }

      var closeButton = nudgeElement.querySelector('.close');
      closeButton.addEventListener('click', removeExtension);
    }
  });

