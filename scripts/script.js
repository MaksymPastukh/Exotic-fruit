function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}




// accordion()
// popup()
// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
// tabs('.tabs-header', '.tabs-header-item', '.tabs-content-item', 'active')

// let slideIndex = 1;
// const slides = document.querySelectorAll('.item-slider'),
//     prev = document.querySelector('.prev'),
//     next = document.querySelector('.next');
//
// showSlides(slideIndex);
//
// function showSlides(n) {
//     let i;
//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.add('hide');
//         slides[i].classList.remove('show');
//     }
//
//     // Показываем следующие три слайда
//     for (i = n - 1; i < n + 2; i++) {
//         if (i >= slides.length) {
//             slides[i - slides.length].classList.add('show');
//         } else if (i < 0) {
//             slides[slides.length + i].classList.add('show');
//         } else {
//             slides[i].classList.add('show');
//         }
//     }
// }
//
// function plusSlides (n) {
//     showSlides(slideIndex += n);
// }
//
// prev.addEventListener('click', function(){
//     plusSlides(-1);
// });
//
// next.addEventListener('click', function(){
//     plusSlides(1);
// });

