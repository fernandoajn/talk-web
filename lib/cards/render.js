var render = function (template, selector) {
    var node = document.querySelector(selector); 
	node.innerHTML = template;
};