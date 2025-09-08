🎯 Гра у вгадування числа
Це проста браузерна гра, у якій гравець має вгадати випадкове число від 1 до 20. Гра створена на чистому JavaScript, HTML та CSS.

🔍 Опис
При завантаженні сторінки генерується випадкове число від 1 до 20.
Гравець вводить своє припущення та натискає кнопку "Check".
Гра повідомляє, чи є число вірним, занадто великим або малим.
Кожна невдала спроба зменшує рахунок на 1.
Якщо рахунок досягає 0 — гра завершується.
Найвищий результат зберігається у localStorage браузера.
Кнопка "Again" дозволяє перезапустити гру.

🧠 Технології
- HTML
- CSS
- JavaScript (ES6+)
- localStorage для збереження найвищого рахунку

🚀 Запуск проєкту
Просто перейдіть за посиланням:
https://georgeriabokin.github.io/Guess_My_Number/

📊 Блок-схема гри формату Mermaid:
```mermaid
flowchart TD
    A[Start] --> B[Generate secret number: 1–20]
    B --> C[Set score to 20]
    C --> D[Check localStorage for highscore]
    D --> E[User clicks "Check" button]
    E --> F[Get user guess]

    F --> G{Is guess valid?}
    G -- No --> H[Display "No number!"]
    G -- Yes --> I{Is guess == secret number?}

    I -- Yes --> J[Display "Correct number!"]
    J --> K[Change background and show number]
    K --> L{score > highscore?}
    L -- Yes --> M[Update highscore in localStorage]
    L -- No --> N[Do nothing]
    M --> O[Wait for "Again"]
    N --> O

    I -- No --> P{score > 1?}
    P -- Yes --> Q[Decrease score by 1]
    Q --> R[Display "Too high!" or "Too low!"]
    R --> O
    P -- No --> S[Set score to 0 and display "Game over!"]
    S --> O

    O --> T[User clicks "Again"]
    T --> U[Reload page]
    U --> B
```
