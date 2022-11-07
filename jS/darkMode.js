//

function darkmodeToggle(cambio){
    if (cambio=='on'){
        DarkReader.enable()
        document.querySelector("div.darkmodeT").firstElementChild.className="gg-moon"
        setCookie("darkmode","on",99)
    }
    else{
        DarkReader.disable()
        document.querySelector("div.darkmodeT").firstElementChild.className="gg-sun"
        setCookie("darkmode","off",99)
    }
}

document.querySelector("div.darkmodeT").addEventListener("click",function(){
    if(document.querySelector(".darkreader")){
        darkmodeToggle('off')
    }
    else(
        darkmodeToggle('on')
    )
},false)

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

darkmodeToggle(getCookie("darkmode"))