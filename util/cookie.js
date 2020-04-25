

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }


  function removeCookie(name){
    var expiry = new Date();
    expiry.setTime(expiry.getTime() - 3600);
    document.cookie = name + "=; expires=" + expiry.toGMTString() + "; path=/"
    window.location.reload();
  }


  function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  
  function createCookie(name, value){
    let d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }


  module.exports = {
    getCookie,
    removeCookie,
    setCookie,
    createCookie
  }