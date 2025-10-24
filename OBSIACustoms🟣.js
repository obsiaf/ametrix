function OBSIACustoms(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileJs=document.createElement('script')
  fileJs.setAttribute("type","text/javascript")
  fileJs.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined"){
  document.getElementsByTagName("head")[0].appendChild(fileref)
 }
 else if (typeof fileJs!="undefined"){
  document.getElementsByTagName("body")[0].appendChild(fileJs)
 }
}

// 🎨 external CSS
//OBSIACustoms("https://url.com/.../customStyleSheet.css", "css") ////dynamically load and add this .css file
// OBSIACustoms("https://cdn.jsdelivr.net/gh/eliyantosarage/font-awesome-pro@main/fontawesome-pro-6.5.1-web/css/all.min.css", "css")
OBSIACustoms("https://obsiaf.github.io/ametrix/OBSIACustoms%F0%9F%9F%A3.css", "css")

// 🧩 external JS
// OBSIACustoms("https://url.com/.../customJavaScript.js", "js") //dynamically load and add this .js file
// OBSIACustoms("https://cdn.logwork.com/widget/countdown.js", "js")
OBSIACustoms("https://obsiaf.github.io/ametrix/globalol.js", "js")

