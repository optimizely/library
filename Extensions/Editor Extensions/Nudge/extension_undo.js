var extensionId = 'optimizely-extension-' + extension.$instance
var extensionElement = document.getElementById(extensionId);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}
localStorage.removeItem(extensionId);
