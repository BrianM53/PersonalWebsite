function TSS() {
    var elem = document.getElementById("TSS");
    var ss = elem.getAttribute("href");
  
    if (ss == "styles1.css") {
      ss = "styles2.css";
    } else {
      ss = "styles1.css";
    }
    elem.setAttribute("href", ss);
    localStorage.setItem("href", ss);
}

window.onload = function() {
    var elem = document.getElementById("TSS");
    var style = localStorage.getItem("href");
    if (style == null) {
      elem.setAttribute("href", "styles1.css");
    }
    else {
      elem.setAttribute("href", style);
    }
}