var elements = document.getElementsByTagName("*");

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];

   if (element.tagName === "IFRAME" || element.tagName === "IMG") {
      element.style.display = "none";
   }
}
