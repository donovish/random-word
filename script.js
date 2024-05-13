const wordList = ['Apple', 'Banana', 'Cherry', 'Dragonfruit', 'Elderberry'];
const container = document.getElementById('container');
const randomizeBtn = document.getElementById('randomizeBtn');

randomizeBtn.addEventListener('click', generateRandomWord);

function generateRandomWord() {
  randomizeBtn.style.display = 'none';
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomIndex];
  const wordElement = document.createElement('div');
  wordElement.textContent = randomWord;
  wordElement.classList.add('word');
  container.appendChild(wordElement);
}