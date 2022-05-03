'use strict';

function accordionBlock(element) {
    if (element.style.maxHeight){
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = element.scrollHeight + "px";
    } 
}

module.exports = {
    accordionBlock,
}