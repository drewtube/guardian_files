var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("url");
document.getElementById("url").value = c;
window.location.assign(c);