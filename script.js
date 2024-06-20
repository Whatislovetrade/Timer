'use strict'

document.addEventListener('DOMContentLoaded', () => {
    flatpickr("#datepicker", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        onChange: function(selectedDates, dateStr, instance) {

            const days = document.querySelector('#days'),
                  hours = document.querySelector('#hours'),
                  minutes = document.querySelector('#minutes'),
                  seconds = document.querySelector('#seconds');

            // Очистка предыдущего таймера, если он существует
            clearInterval(window.timeInterval)

            // Получение выбранной пользователем даты
            const selectedDate = selectedDates[0]

            function getDate() {
                // Получение текущей даты
                const today = new Date()

                // Вычисление разницы в миллисекундах
                const differenceInMilliseconds = Date.parse(selectedDate) - Date.parse(today)

                const daysLeft = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)),
                      hoursLeft = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24),
                      minutesLeft = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60),
                      secondsLeft = Math.floor((differenceInMilliseconds / 1000) % 60);

                if (differenceInMilliseconds <= 0) {
                    days.innerText = '00'
                    hours.innerText = '00'
                    minutes.innerText = '00'
                    seconds.innerText = '00'
                    clearInterval(window.timeInterval)
                } else {
                    days.innerText = daysLeft < 10 ? `0${daysLeft}` : daysLeft
                    hours.innerText = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft
                    minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft
                    seconds.innerText = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
                }
            }
            // Устанавливаем интервал обновления таймера
            window.timeInterval = setInterval(getDate, 1000)
            // Первоначальный вызов функции для отображения начальных значений
            getDate();
        }
    });
});


