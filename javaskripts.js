
// Ждём полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');
    const enterButton = document.getElementById('enter-button');
    const bgMusic = document.getElementById('bg-music');
    
    // Флаг, чтобы анимация не сработала дважды
    let isEntered = false;
    
    // Функция для входа на сайт
    function enterSite() {
        if (isEntered) return;
        isEntered = true;
        
        // Запускаем музыку
        bgMusic.play().catch(error => {
            console.log('Автовоспроизведение заблокировано браузером');
            // Некоторые браузеры блокируют автовоспроизведение
            // Добавляем кнопку для ручного запуска, если нужно
        });
        
        // Добавляем класс для анимации исчезновения
        introOverlay.classList.add('fade-out');
        
        // Показываем основной контент с анимацией
        mainContent.style.display = 'block';
        mainContent.style.animation = 'fadeIn 1s ease';
        
        // Удаляем оверлей после анимации
        setTimeout(function() {
            introOverlay.style.display = 'none';
        }, 800);
    }
    
    // Обработчик нажатия на кнопку
    enterButton.addEventListener('click', enterSite);
    
    // Дополнительно: можно добавить нажатие на пробел или Enter
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !isEntered) {
            enterSite();
        }
    });
});