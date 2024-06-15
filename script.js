'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // получить нужную дату
    const deadLine = new Date('2024-06-26') 

    // Получить элементы со страницы для того чтобы можно было заменять
    const daysElement = document.querySelector('#days'),
          hoursElement = document.querySelector('#hours'),
          minutesElement = document.querySelector('#minutes'),
          secondsElement = document.querySelector('#seconds');
    
    // Функция для расчета оставшегося времени
    function getDate() {
        const now = new Date()
        const t = deadLine - now
        
        const daysLeft = Math.floor(t / (1000 * 60 * 60 * 24)),
              hoursLeft = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutesLeft = Math.floor((t / (1000 * 60)) % 60),
              secondsLeft = Math.floor((t / 1000) % 60);
        
        // Обновить элементы на странице
        if (t <= 0) {
            daysElement.innerText = '0'
            hoursElement.innerText = '0'
            minutesElement.innerText = '0'
            secondsElement.innerText = '0'
            clearInterval(timeInterval);
        } else {
            daysElement.innerText = daysLeft < 10? `0${daysLeft}`:daysLeft
            hoursElement.innerText = hoursLeft < 10? `0${hoursLeft}`:hoursLeft
            minutesElement.innerText = minutesLeft < 10? `0${minutesLeft}`:minutesLeft
            secondsElement.innerText = secondsLeft < 10? `0${secondsLeft}`:secondsLeft
        }
    }
    
    // Запустить таймер и обновлять каждую секунду
    const timeInterval = setInterval(getDate, 1000)
    getDate()
})

