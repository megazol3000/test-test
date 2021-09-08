const screenLink = document.querySelector('.screen__link');
const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav');
const arrow = document.querySelector('.nav__arrow');
const screen = document.querySelector('.screen');
const navList = document.querySelector('.test-list');
const ul = document.querySelector('.test-list__ul');
const mobileBurger = document.querySelector('.mobile-nav__burger');
const mobileArrow = document.querySelector('.mobile-nav__arrow');
const screenBegin = document.querySelector('.screen-begin');
const screenContent = document.querySelector('.screen-content');

// Данные по тестам

const testsArray = [
    {
        id: 1,
        name: "Test's name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.",
        timer: 0,
        questions: [
            ['Вопрос 1', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Б', 'Не ответили'],
            ['Вопрос 2', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант А', 'Не ответили'],
            ['Вопрос 3', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Е', 'Не ответили'],
            ['Вопрос 4', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Д', 'Не ответили'],
            ['Вопрос 5', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант В', 'Не ответили']
        ]
    },

    {
        id: 2,
        name: "Another Test",
        description: "Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui.",
        timer: 0,
        questions: [
            ['Вопрос 1', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант В', 'Не ответили'],
            ['Вопрос 2', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант В', 'Не ответили'],
            ['Вопрос 3', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант А', 'Не ответили']
        ]
    },

    {
        id: 3,
        name: "Test",
        description: "Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui.",
        timer: 0,
        questions: [
            ['Вопрос 1', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Б', 'Не ответили'],
            ['Вопрос 2', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант А', 'Не ответили'],
            ['Вопрос 3', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Е', 'Не ответили'],
            ['Вопрос 4', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Д', 'Не ответили'],
            ['Вопрос 5', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант В', 'Не ответили'],
            ['Вопрос 6', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Б', 'Не ответили'],
            ['Вопрос 7', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант А', 'Не ответили'],
            ['Вопрос 8', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Е', 'Не ответили'],
            ['Вопрос 9', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Д', 'Не ответили'],
            ['Вопрос 10', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант В', 'Не ответили'],
            ['Вопрос 11', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант В', 'Не ответили']
        ]
    },

    {
        id: 4,
        name: "Название теста",
        description: "Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui.",
        timer: 0,
        questions: [
            ['Вопрос 1', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Б', 'Не ответили'],
            ['Вопрос 2', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант А', 'Не ответили'],
            ['Вопрос 3', 'Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г', 'Вариант Д', 'Вариант Е', 'Вариант Е', 'Не ответили'],
            ['Вопрос 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.', 
            'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.', 
            'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.', 
            'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.', 
            'Не ответили']
        ]
    }
];


localStorage.setItem('allTests', JSON.stringify(testsArray));
const raw = localStorage.getItem('allTests');
const tests = JSON.parse(raw);


console.log(tests);

//выводим список тестов в навигации

for (let i = 0; i < tests.length; i++) {
    ul.innerHTML += `<li class="test-list__item">${tests[i].name}</li>`;
}
const navListItems = document.querySelectorAll('.test-list__item');

// выводим описание теста

for (let i = 0; i < navListItems.length; i++) {
    navListItems[i].addEventListener('click', () => {
        let screenWidth = window.screen.width;
        if(screenWidth < 700) {
            closeNav();
        }
        screenContent.innerHTML = `
        <div class="screen-description">
            <div class="screen-description-title">Описание</div>
            <div class="screen-description-text">
                <p>
                    ${tests[i].description}
                </p>
            </div>
            <div class="screen-description-buttons">
                <button class="btn begin-test">Начать</button><button class="btn cancel">Отмена</button>
            </div>
        </div>
    `;
    });
}

// Обрабатываем кнопку "Отмена"

function testDescription() {
    screenContent.innerHTML = `
    <div class="screen-begin">
        <a class="screen__link" href="#">Выберите тест из списка</a>
    </div>`;
    const screenLink2 = document.querySelector('.screen__link');
    screenLink2.addEventListener('click', openNav);
    for (let j = 0; j < navListItems.length; j++) {
        navListItems[j].classList.remove('test-list__item_active');
    }
}

// Выводим тест

function testContent() {
    closeNav();

    for (let i = 0; i < navListItems.length; i++) {
        if (navListItems[i].classList.contains('test-list__item_active')) {
            let headCounter = `<span class="header-counter">0</span>`;
            screenContent.innerHTML = `
            <div class="screen-test">
                <div class="screen-test-title">
                    <div class="screen-test-title1"><button class="exit-btn test-btn">Выход</button></div>
                    <h2> ${tests[i].name}</h2>
                    <div class="test-nav">
                        <button class="clear test-btn">Сбросить все ответы</button>
                        <span class="test-counter">${headCounter}/${tests[i].questions.length}</span>
                        <span class="test-timer">00:00:00</span>
                    </div>
                </div>
                <div class="screen-test-forms">
                <div class="screen-test-result">
                </div>
                    
                </div>
                <div class="screen-test-footer">
                    <button class="btn complete-test">Завершить</button>
                </div>
            </div>
            `;
            const testForm = document.querySelector('.screen-test-forms');
            const timer = document.querySelector('.test-timer');
            
            let hours = 0;
            let min = 0;
            let sec = 0;

            function time() {
                if(sec <= 8) {
                    timer.innerHTML = `0${hours}:0${min}:0${sec+=1}`;
                } else if (sec >= 9 && sec <= 58) {
                    timer.innerHTML = `0${hours}:0${min}:${sec+=1}`;
                } else if (sec >= 59) {
                    sec = -1;
                    min += 1;
                    timer.innerHTML = `0${hours}:0${min}:0${sec+=1}`;
                }
            }
           setInterval(time, 1000);
            //Выводим строки теста

            for (let j = 0; j < tests[i].questions.length; j++) {
                testForm.innerHTML += `
                <p class="form-question">${tests[i].questions[j][0]}</p>
                <form class="form">
                    <div class="form-inputs">
                    <input class="radio" type="radio" id="${"var" + j}" name="${"var" + j}" value="${tests[i].questions[j][1]}"><label for="${"var" + j}">${tests[i].questions[j][1]}</label>
                    <input class="radio" type="radio" id="${"var" + j + 1}" name="${"var" + j}" value="${tests[i].questions[j][2]}"><label for="${"var" + j + 1}">${tests[i].questions[j][2]}</label>
                    <input class="radio" type="radio" id="${"var" + j + 2}" name="${"var" + j}" value="${tests[i].questions[j][3]}"><label for="${"var" + j + 2}">${tests[i].questions[j][3]}</label>
                    <input class="radio" type="radio" id="${"var" + j + 3}" name="${"var" + j}" value="${tests[i].questions[j][4]}"><label for="${"var" + j + 3}">${tests[i].questions[j][4]}</label>
                    <input class="radio" type="radio" id="${"var" + j + 4}" name="${"var" + j}" value="${tests[i].questions[j][5]}"><label for="${"var" + j + 4}">${tests[i].questions[j][5]}</label>
                    <input class="radio" type="radio" id="${"var" + j + 5}" name="${"var" + j}" value="${tests[i].questions[j][6]}"><label for="${"var" + j + 5}" style="margin:0;">${tests[i].questions[j][6]}</label>
                   </div>
                </form>`;

                // Обрабатываем кнопку "очистить"

                const clearButton = document.querySelector('.clear');
                const radioInput = document.querySelectorAll('.radio');
                let headCounter = 0;
                const headCounterDom = document.querySelector('.header-counter');
                
                    
                
                for (let k = 0; k < radioInput.length; k++) {
                    radioInput[k].addEventListener('change', () => {
                        if (headCounter < tests[i].questions.length) {
                            headCounter += 1;
                            headCounterDom.innerHTML = headCounter;
                        }
                        clearButton.addEventListener('click', () => {
                            headCounter = 0;
                            headCounterDom.innerHTML = headCounter;
                            for (let k = 0; k < radioInput.length; k++) {
                                radioInput[k].checked = false;
                            }
                        });
                    });
                }
                    
            }
        
            // Выводим результат

            const completeTest = document.querySelector('.complete-test');
            completeTest.addEventListener('click', () => {

                const forms = document.querySelectorAll('.form-inputs');
                for (let n = 0; n < forms.length; n++) {
                    for (let k = 0; k < 12; k++) {
                        if(forms[n].childNodes[1].checked) {
                            tests[i].questions[n][8] = forms[n].childNodes[1].value;
                        } else if (forms[n].childNodes[4].checked) {
                            tests[i].questions[n][8] = forms[n].childNodes[4].value;
                        } else if (forms[n].childNodes[7].checked) {
                            tests[i].questions[n][8] = forms[n].childNodes[7].value;
                        } else if (forms[n].childNodes[10].checked) {
                            tests[i].questions[n][8] = forms[n].childNodes[10].value;
                        } else if (forms[n].childNodes[13].checked) {
                            tests[i].questions[n][8] = forms[n].childNodes[13].value;
                        } else if (forms[n].childNodes[16].checked) {
                            tests[i].questions[n][8] = forms[n].childNodes[16].value;
                        }
                    }
                }
                
                testForm.innerHTML = `<div class="screen-test-result"></div>`;
                const resultTest = document.querySelector('.screen-test-result');
                resultTest.style.height = "115px";
                let counterAns = 0;

                for (let j = 0; j < tests[i].questions.length; j++) {
                    if (tests[i].questions[j][7]==tests[i].questions[j][8]) {
                        counterAns += 1;
                    }         
                }

                

                resultTest.innerHTML = `
                        <h2>Тест завершен</h2>
                        <span>вы ответили правильно на ${counterAns} вопросов из ${tests[i].questions.length}</span>
                        <p>Ваши ответы</p>
                    `;

                for (let j = 0; j < tests[i].questions.length; j++) {
                    testForm.innerHTML += `
                        <div class="screen-result-item">
                        <p class="form-question">${tests[i].questions[j][0]}</p>
                                <span>Правильный ответ: ${tests[i].questions[j][7]}</span>
                                <span>Вы ответили: ${tests[i].questions[j][8]}</span>
                        </div>
                        `;
                }
                const footer = document.querySelector('.screen-test-footer');
                footer.innerHTML = `<button class="btn again">Пройти еще раз</button>`

                const againBtn = document.querySelector('.again');
                againBtn.addEventListener('click', testContent);
                againBtn.addEventListener('click', () => {
                    for (let e = 0; e < tests[i].questions.length; e++) {
                        tests[i].questions[e][8] = 'Не ответили';
                    }
                });
            });
        }


    }

    // Модальное окно

    const exitBtn = document.querySelector('.exit-btn');
    const darkWrap = document.querySelector('.dark-wrap');

    exitBtn.addEventListener('click', () => {
        darkWrap.style.display = 'block';
        const formExit = document.querySelector('.form-exit');
        const formCancel = document.querySelector('.form-cancel');

        formCancel.addEventListener('click', () => {
            darkWrap.style.display = 'none';
        })

        formExit.addEventListener('click', () => {
            testDescription()
            darkWrap.style.display = 'none';
        })
    });

}

// поведение кнопок и навигации

function openNav() {
    burger.classList.remove('nav__burger_active');
    mobileBurger.classList.remove('mobile-nav__burger_active');
    mobileArrow.classList.add('mobile-nav__arrow_active');
    nav.classList.add('screen__nav_active');
    screen.classList.add('screen_slim');
    navList.classList.remove('test-list_invisible');
}

function closeNav() {
    burger.classList.add('nav__burger_active');
    mobileBurger.classList.add('mobile-nav__burger_active');
    mobileArrow.classList.remove('mobile-nav__arrow_active');
    burger.classList.add('nav__burger_active');
    nav.classList.remove('screen__nav_active');
    screen.classList.remove('screen_slim');
    navList.classList.add('test-list_invisible');
}

screenLink.addEventListener('click', openNav);
burger.addEventListener('click', openNav);
arrow.addEventListener('click', closeNav);
mobileArrow.addEventListener('click', closeNav);
mobileBurger.addEventListener('click', openNav);

for (let i = 0; i < navListItems.length; i++) {
    navListItems[i].addEventListener('click', () => {
        screenBegin.classList.add('screen-description');
        for (let j = 0; j < navListItems.length; j++) {
            navListItems[j].classList.remove('test-list__item_active');
        }
        navListItems[i].classList.toggle('test-list__item_active');
        const beginTest = document.querySelector('.begin-test');
        beginTest.addEventListener('click', testContent);
        const cancelBtn = document.querySelector('.cancel');
        cancelBtn.addEventListener('click', testDescription);
    });
}

