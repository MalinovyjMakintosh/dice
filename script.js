document.getElementById('rollBtn').addEventListener('click', function() {
    const diceFaces = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
    const diceFaceCount = diceFaces.length;

    const updateDice = (element, finalValue) => {
        let frames = 20; // Количество кадров
        let currentFrame = 0;
        const intervalTime = 100; // Интервал времени между сменами (мс)

        const interval = setInterval(() => {
            element.innerText = diceFaces[Math.floor(Math.random() * diceFaceCount)];
            currentFrame++;
            if (currentFrame >= frames) {
                clearInterval(interval);
                element.innerText = finalValue;
            }
        }, intervalTime);
    };

    // Очищаем текст результата
    document.getElementById('resultText').innerText = '';

    // Получаем элементы кубиков
    const player1Dice = document.getElementById('player1Dice');
    const player2Dice = document.getElementById('player2Dice');

    // Определяем результаты бросков
    const player1Roll = diceFaces[Math.floor(Math.random() * diceFaceCount)];
    const player2Roll = diceFaces[Math.floor(Math.random() * diceFaceCount)];

    // Обновляем кубики с анимацией
    updateDice(player1Dice, player1Roll);
    updateDice(player2Dice, player2Roll);

    // Определяем победителя через 2 секунды
    setTimeout(() => {
        let resultText;

        if (player1Roll > player2Roll) {
            resultText = 'Игрок 1 выиграл!';
        } else if (player2Roll > player1Roll) {
            resultText = 'Игрок 2 выиграл!';
        } else {
            resultText = 'Ничья!';
        }

        document.getElementById('resultText').innerText = resultText;
    }, 2000); // Задержка на 2 секунды
});
