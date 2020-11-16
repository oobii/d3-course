window.onload = init();
var div;
var divXHR;
var divAsync;

const url = 'https://api.randomuser.me/?nat=US&results=5';
//const url = 'https://jsonplaceholder.typicode.com/todos/1';
function init() {

    divXHR = document.querySelector('#xhrid');
    div = document.querySelector('#fetchid');
    divAsync = document.querySelector('#asyncid');
    div.innerHTML += "......";
}

// called by clicking on button
function gofetch(event){
    getAsync();

    div.innerHTML += "<br></br>Fetching..........";

    fetch(url)
      .then((response) => {
          //console.log(response);
          return response.json();
        })
      .then(json => { 
          // results is array
          let results = json.results;
          div.innerHTML = '';

          results.forEach(e => { 
            const firstname = e.name.first;
            div.innerHTML  += `<p></p> ${firstname}`;
            //console.log(e.name.first);
            });

          //div.innerHTML  += '<p></p>' + JSON.stringify(res.headers);
          //console.log(json.response);
          return results;})
      .then((res) => { 
          //div.innerHTML = `Results: ${JSON.stringify(res)}`;
        })
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
  

  function getAsync() {
    getFakePerson();
  };

  async function getFakePerson() {
    try {
      let response = await fetch('https://api.randomuser.me/?nat=US&results=1');
      const json = await response.json();
      const results = json.results;
      results.forEach(e => {
        const firstname = e.name.first;
        const lastname = e.name.last;
        divAsync.innerHTML  += `<br></br>${firstname} ${lastname}`;  
        console.log(e);
      });
      
    } catch (error) {
      console.error(error);

      divAsync.innerHTML = "ERROR";
    }
  };

