function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://enl9mbmwf6ngofa.m.pipedream.net");
oReq.send();