// Librairies
import Framework7 from 'framework7/framework7.esm.bundle'

// Init F7
new Framework7({
  root: '#app',
  theme: 'auto',
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
})

document.getElementById("magic").addEventListener("submit", (evt) => {
  evt.preventDefault();
  const aAnswers = ["no", "yes"];
  const nAnswer = Math.floor(Math.random() * aAnswers.length);
  document.getElementById("answer").innerHTML = aAnswers[nAnswer];
});

if (`serviceWorker` in navigator) {
  window.addEventListener(`load`, () => {
    navigator.serviceWorker.register(`/sw.js`);
  })
}
