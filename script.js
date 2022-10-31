const inputArea = document.querySelector('#input-text');
const outputArea = document.querySelector('#output-text');
const translateBtn = document.querySelector('#btn-translate');

function translateText() {
  translateBtn.disabled = true;
  translateBtn.innerText = "Translating...";
  const input = inputArea.value;
  const url = 'https://api.funtranslations.com/translate/minion.json?text=' + input
  fetch(encodeURI(url))
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      outputArea.innerHTML = data.contents.translated;
      translateBtn.disabled = false;
      translateBtn.innerText = "Translate";
    })
    .catch((err)=>{
      console.error(err);
      alert('Something went wrong!! Please check the console.')
      translateBtn.disabled = false;
      translateBtn.innerText = "Translate";
    })
  
}

translateBtn.addEventListener("click", translateText );