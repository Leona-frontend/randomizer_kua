const resultBtn = document.getElementById('resultBtn');
const result = document.getElementById('result');

async function getData() {
  const response = await fetch("./content/investigators.json");
  const resultArr = await response.json();
  const randomItem = resultArr[getArrayRandomIndex(resultArr)];
  result.innerHTML = `
  <div id="closeBtn" class="close-btn"></div>
<div class="scene scene--card">
  <div id="card" class="card">
    <div class="card__face card__face--front"><img src="${randomItem.img}" class="investigator"></div>
    <div class="card__face card__face--back"><img src="${randomItem.img_back}" class="investigator"></div>
    </div>
</div>
  `;
  var card = document.querySelector('.card');
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
}

function getArrayRandomIndex(array) {
  const random = Math.floor(Math.random() * array.length);
  return random;
}

resultBtn.addEventListener('click', e => {
  e.preventDefault();

  getData();

  result.style.display = 'block';

  setTimeout(function () {
    resultBtn.classList.toggle('disabled');
    resultBtn.disabled = true;
    resultBtn.textContent = 'Твой сыщик';
  }, 200);
});

document.addEventListener('click', e => {
  if (e.target.id === 'closeBtn') {
    result.style.display = 'none';
    result.innerHTML = ``;
    resultBtn.classList.toggle('disabled');
    resultBtn.textContent = 'Выбрать сыщика';
    resultBtn.disabled = false;
  }
});