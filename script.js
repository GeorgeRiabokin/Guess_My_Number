"use strict"; // Вмикає суворий режим, який допомагає уникати помилок (наприклад, використання необ'явлених змінних)

// Генерується випадкове секретне число від 1 до 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Початкові значення для поточного рахунку та найвищого рахунку
let score = 20;
let highScore = 0;

// Назва ключа для збереження highscore в localStorage
const storagedHighScore = "highscore";

// Функція для оновлення повідомлення на екрані
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Якщо в localStorage вже збережений highscore — беремо його
if (localStorage.getItem(storagedHighScore)) {
  highScore = parseInt(localStorage.getItem(storagedHighScore)); // Перетворюємо з рядка в число
  document.querySelector(".highscore").textContent = highScore; // Відображаємо його на сторінці
}

// Обробник події натискання кнопки "Check" — перевірка введеного числа
document.querySelector(".check").addEventListener("click", function () {
  // Отримуємо значення з поля вводу та перетворюємо в число
  const guess = Number(document.querySelector(".guess").value);

  // Якщо нічого не введено
  if (!guess) {
    displayMessage("No number!");
  
  // Якщо число вгадано правильно
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347"; // Зелений фон
    document.querySelector(".number").style.width = "30rem"; // Збільшуємо ширину блоку з числом
    document.querySelector(".number").textContent = secretNumber; // Показуємо секретне число

    // Якщо новий рахунок більший за найвищий — оновлюємо highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      localStorage.setItem(storagedHighScore, highScore.toString()); // Зберігаємо в localStorage
    }

  // Якщо число не вгадане
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--; // Зменшуємо рахунок
      document.querySelector(".score").textContent = score; // Оновлюємо рахунок на екрані
      // Вказуємо, чи занадто велике чи мале число
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    } else {
      // Якщо закінчилися спроби
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage("Game over!");
    }
  }
});

// Обробник натискання кнопки "Again" — перезапуск гри
document.querySelector(".again").addEventListener("click", function () {
  location.reload(); // Перезавантажує сторінку
});
