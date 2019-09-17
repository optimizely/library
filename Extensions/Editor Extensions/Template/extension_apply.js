
  
if(extension.position == "before"){ 
  	document.querySelector(extension.selector).insertAdjacentHTML('beforebegin', extension.$html); 
} else if(extension.position == "prepend") { 
    document.querySelector(extension.selector).insertAdjacentHTML('afterbegin', extension.$html); 
} else if(extension.position == "after") { 
    document.querySelector(extension.selector).insertAdjacentHTML('afterend', extension.$html); 
} else if(extension.position == "append") { 
    document.querySelector(extension.selector).insertAdjacentHTML('beforeend', extension.$html); 
}
