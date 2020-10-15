var divbox = document.getElementById("box");
divbox.onclick = nestelement();
var span = document.getElementById("span");

function nestelement() {
	//var spanCreate = document.createElement("span");
	//spanCreate.setAttribute("id","span");
	//box.appendChild(span);
	span.style.display = "block";
}
