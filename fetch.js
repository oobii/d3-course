window.onload = init();
var div;
var divXHR;

const url = 'https://api.randomuser.me/?nat=US&results=1';

function init() {

    divXHR = document.querySelector('#xhrid');
    div = document.querySelector('#fetchid');
    div.innerHTML += "......";
}

// called by clicking on button
function gofetch(event){
    
    div.innerHTML += "<br></br>I fetched the stick! Gav! Gav!";

    fetch(url)
      .then((response) => {return response.json()})
      .then(json => json.results)
      .then((res) => { div.innerHTML = `Results: ${JSON.stringify(res)}`})
      .catch(err => {div.innerHTML = `Error: ${err}`});

}


function reqListener() {
    var data = JSON.parse(this.responseText);
    divXHR.innerHTML = `Results: ${JSON.stringify(data)}`;
  }
  
  function reqError(err) {
    //console.log('Fetch Error :-S', err);
    divXHR.innerHTML = `Fetch Error: ${err}`;
  }
  
  function sendXHR() {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.onerror = reqError;
    oReq.open('get', url, true);
    oReq.send();
  }
  