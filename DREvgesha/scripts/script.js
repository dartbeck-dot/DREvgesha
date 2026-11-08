const btnNo = document.getElementById('run-btn');

function moveButton() {
    // Включаем фиксированное позиционирование через CSS-класс
    btnNo.classList.add('running');
    
    // Рассчитываем случайное место на экране с небольшим отступом от краев
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 100) + 50;
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 100) + 50;
    
    // Перемещаем кнопку
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Убегание при наведении мыши (для ПК)
btnNo.addEventListener('mouseenter', moveButton);

// Убегание при касании пальцем (для мобильных)
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Отменяем обычный клик по кнопке
    moveButton();
});
// --- ЛОГИКА ТАЙМЕРА ОБРАТНОГО ОТСЧЕТА ---

// --- ЛОГИКА ТАЙМЕРА ОБРАТНОГО ОТСЧЕТА С СЕКУНДАМИ ---

// Устанавливаем целевую дату: 20 декабря 2026 года, 18:00
const targetDate = new Date('December 20, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Расчет времени для дней, часов, минут и секунд
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Находим элементы на странице
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Если дата еще не наступила, обновляем цифры
    if (difference > 0) {
        daysElement.innerText = days < 10 ? '0' + days : days;
        hoursElement.innerText = hours < 10 ? '0' + hours : hours;
        minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
    } else {
        // Если время пришло — пишем праздничный текст
        document.querySelector('.countdown-container').innerHTML = '<p class="countdown-title" style="color: #4caf50; font-weight: bold; font-size: 1.2rem;">🔥 ЧАС СТАРТА НАСТАЛ! ВСЕ В ЧАН! 🔥</p>';
    }
}

// Запускаем таймер сразу при загрузке страницы
updateCountdown();
// Обновляем таймер каждую секунду
setInterval(updateCountdown, 1000);

