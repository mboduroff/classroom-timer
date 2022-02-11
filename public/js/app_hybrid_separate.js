const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

let hh, mm, clN;

console.log("> start: " + date.toLocaleString('en-uk'));

function checkClass() {
    const month = date.toLocaleString('en-us', {month: 'long'});
    const day = date.getDate();
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();

    switch (dayOfWeek) {
        case 1:
            [hh, mm, clN] = runMondayChecks();
            break;
        case 2:
            [hh, mm, clN] = runTuesdayChecks();
            break;
        case 3:
            [hh, mm, clN] = runWednesdayChecks();
            break;
        case 4:
            [hh, mm, clN] = runThursdayChecks();
            break;
        case 5:
            [hh, mm, clN] = runFridayChecks();
            break;
        case 6:
            [hh, mm, clN] = runSaturdayTests();
            break;
        case 0:
            [hh, mm, clN] = runSundayTests();
            break;

        default:
            hh = hours + 1;
            mm = minutes;
            clN = 'почивка';
            break;
    }

    const eD = new Date(month + ' ' + day + ' ' + year + ' ' + hh + ':' + mm + ':00');
    return [eD, clN];
}

const endDate = checkClass()[0];
const className = checkClass()[1];

console.log("> end: " + endDate.toLocaleString('en-uk'));

const audio = new Audio('../audio/bell.wav');

function runMondayChecks() {
    switch (hours) {
        case 7:
            hh = '08';
            mm = '30';
            clN = 'Тестване';
            break;
        case 8:
            if (minutes < 30) {
                hh = '08';
                mm = '30';
                clN = 'Тестване';
            } else {
                hh = '09';
                mm = '10';
                clN = 'Час на класа';
            }
            break;
        case 9:
            if (minutes < 10) {
                hh = '09';
                mm = '10';
                clN = 'Час на класа';
            } else if (minutes < 20) {
                hh = '09';
                mm = '20';
                clN = 'Междучасие';
            } else {
                hh = '10';
                mm = '00';
                clN = 'ФВС';
            }
            break;
        case 10:
            if (minutes < 10) {
                hh = '10';
                mm = '10';
                clN = 'Междучасие';
            } else if (minutes < 50) {
                hh = '10';
                mm = '50';
                clN = 'English';
            } else {
                hh = '11';
                mm = '00';
                clN = 'Междучасие';
            }
            break;
        case 11:
            if (minutes < 40) {
                hh = '11';
                mm = '40';
                clN = 'Математика';
            } else {
                hh = '12';
                mm = '00';
                clN = 'Голямо междучасие';
            }
            break;
        case 12:
            if (minutes < 40) {
                hh = '12';
                mm = '40';
                clN = 'Математика';
            } else if (minutes < 50) {
                hh = '12';
                mm = '50';
                clN = 'Междучасие';
            } else {
                hh = '13';
                mm = '30';
                clN = 'Гражданско образование';
            }
            break;
        case 13:
            if (minutes < 30) {
                hh = '13';
                mm = '30';
                clN = 'Гражданско образование';
            } else if (minutes < 35) {
                hh = '13';
                mm = '35';
                clN = 'Междучасие';
            } else {
                hh = '14';
                mm = '15';
                clN = 'Литература';
            }
            break;
        case 14:
            hh = '14';
            mm = '15';
            if (minutes < 15) {
                clN = 'Литература';
            } else {
                clN = 'учебния ден';
            }
            break;
        default:
            hh = hours + 1;
            mm = minutes;
            clN = 'Почивка';
            break;
    }

    return [hh, mm, clN];
}

function runTuesdayChecks() {
    switch (hours) {
        case 7:
            hh = '08';
            mm = '45';
            clN = 'Литература';
            break;
        case 8:
            if (minutes < 45) {
                hh = '08';
                mm = '45';
                clN = 'Литература';
            } else if (minutes < 55) {
                hh = '08';
                mm = '55';
                clN = 'Междучасие';
            } else {
                hh = '09';
                mm = '40';
                clN = 'Deutsch';
            }
            break;
        case 9:
            if (minutes < 40) {
                hh = '09';
                mm = '40';
                clN = 'Deutsch';
            } else if (minutes < 50) {
                hh = '09';
                mm = '50';
                clN = 'Междучасие';
            } else {
                hh = '10';
                mm = '35';
                clN = 'Информатика';
            }
            break;
        case 10:
            if (minutes < 35) {
                hh = '10';
                mm = '35';
                clN = 'Информатика'
            } else if (minutes < 45) {
                hh = '10';
                mm = '45';
                clN = 'Междучасие'
            } else {
                hh = '11';
                mm = '30';
                clN = 'Информатика';
            }
            break;
        case 11:
            if (minutes < 30) {
                hh = '11';
                mm = '30';
                clN = 'Информатика';
            } else if (minutes < 50) {
                hh = '11';
                mm = '50';
                clN = 'Голямо междучасие';
            } else {
                hh = '12';
                mm = '35';
                clN = 'English';
            }
            break;
        case 12:
            if (minutes < 35) {
                hh = '12';
                mm = '35';
                clN = 'English';
            } else if (minutes < 45) {
                hh = '12';
                mm = '45';
                clN = 'Междучасие';
            } else {
                hh = '13';
                mm = '30';
                clN = 'Математика';
            }
            break;
        case 13:
            hh = '13';
            mm = '30';
            if (minutes < 30) {
                clN = 'Математика';
            } else {
                clN = 'учебния ден'
            }
            break;
        default:
            hh = hours + 1;
            mm = minutes;
            clN = 'Почивка';
            break;
    }
    return [hh, mm, clN];
}

function runWednesdayChecks() {
    switch (hours) {
        case 7:
            hh = '08';
            mm = '45';
            clN = 'Maтематиka';
            break;
        case 8:
            if (minutes < 45) {
                hh = '08';
                mm = '45';
                clN = 'Maтематиka';
            } else if (minutes < 45) {
                hh = '08';
                mm = '55';
                clN = 'Междучасие';
            } else {
                hh = '09';
                mm = '40';
                clN = 'Maтематиka';
            }
            break;
        case 9:
            if (minutes < 40) {
                hh = '09';
                mm = '40';
                clN = 'Maтематиka';
            } else if (minutes < 50) {
                hh = '09';
                mm = '50';
                clN = 'Междучасие';
            } else {
                hh = '10';
                mm = '35';
                clN = 'Maтематиka';
            }
            break;
        case 10:
            if (minutes < 35) {
                hh = '10';
                mm = '35';
                clN = 'Maтематиka';
            } else if (minutes < 45) {
                hh = '10';
                mm = '45';
                clN = 'Междучасие';
            } else {
                hh = '11';
                mm = '30';
                clN = 'English';
            }
            break;
        case 11:
            if (minutes < 30) {
                hh = '11';
                mm = '30';
                clN = 'English';
            } else if (minutes < 50) {
                hh = '11';
                mm = '50';
                clN = 'Голямо междучасие';
            } else {
                hh = '12';
                mm = '35';
                clN = 'English';
            }
            break;
        case 12:
            if (minutes < 35) {
                hh = '12';
                mm = '35';
                clN = 'English';
            } else if (minutes < 45) {
                hh = '12';
                mm = '45';
                clN = 'Междучасие'
            } else {
                hh = '13';
                mm = '30';
                clN = 'Информатика';
            }
            break;
        case 13:
            if (minutes < 30) {
                hh = '13';
                mm = '30';
                clN = 'Информатика';
            } else if (minutes < 35) {
                hh = '13';
                mm = '35';
                clN = 'Междучасие'
            } else {
                hh = '14';
                mm = '20';
                clN = 'Информатика';
            }
            break;
        case 14:
            hh = '14';
            mm = '20';
            if (minutes < 20) {
                clN = 'Информатика';
            } else {
                clN = 'учебния ден'
            }
            break;
        default:
            hh = hours + 1;
            mm = minutes;
            clN = 'Почивка';
            break;
    }
    return [hh, mm, clN];
}

function runThursdayChecks() {
    switch (hours) {
        case 8:
            hh = '09';
            mm = '40';
            clN = 'English';
            break;
        case 9:
            if (minutes < 40) {
                hh = '09';
                mm = '40';
                clN = 'English';
            } else if (minutes < 50) {
                hh = '09';
                mm = '50';
                clN = 'Междучасие';
            } else {
                hh = '10';
                mm = '35';
                clN = 'English';
            }
            break;
        case 10:
            if (minutes < 35) {
                hh = '10';
                mm = '35';
                clN = 'English';
            } else if (minutes < 45) {
                hh = '10';
                mm = '45';
                clN = 'Междучасие';
            } else {
                hh = '11';
                mm = '30';
                clN = 'Български език';
            }
            break;
        case 11:
            if (minutes < 30) {
                hh = '11';
                mm = '30';
                clN = 'Български език';
            } else if (minutes < 50) {
                hh = '11';
                mm = '50';
                clN = 'Голямо междучасие';
            } else {
                hh = '12';
                mm = '35';
                clN = 'ФВС';
            }
            break;
        case 12:
            if (minutes < 35) {
                hh = '12';
                mm = '35';
                clN = 'ФВС';
            } else if (minutes < 45) {
                hh = '12';
                mm = '45';
                clN = 'Междучасие';
            } else {
                hh = '13';
                mm = '30';
                clN = 'Математика';
            }
            break;
        case 13:
            if (minutes < 30) {
                hh = '13';
                mm = '30';
                clN = 'Математика';
            } else if (minutes < 35) {
                hh = '13';
                mm = '35';
                clN = 'Междучасие';
            } else {
                hh = '14';
                mm = '20';
                clN = 'Математика';
            }
            break;
        case 14:
            hh = '14';
            mm = '20';
            if (minutes < 20) {
                clN = 'Математика';
            } else {
                clN = 'учебния ден';
            }
            break;
        default:
            hh = hours + 1;
            mm = minutes;
            clN = 'Почивка';
            break;
    }

    return [hh, mm, clN];
}

function runFridayChecks() {
    switch (hours) {
        case 7:
            hh = '08';
            mm = '45';
            clN = 'English';
            break;
        case 8:
            if (minutes < 45) {
                hh = '08';
                mm = '45';
                clN = 'English';
            } else if (minutes < 55) {
                hh = '08';
                mm = '55';
                clN = 'Междучасие';
            } else {
                hh = '09';
                mm = '40';
                clN = 'English';
            }
            break;
        case 9:
            if (minutes < 40) {
                hh = '09';
                mm = '40';
                clN = 'English';
            } else if (minutes < 50) {
                hh = '09';
                mm = '50';
                clN = 'Междучасие';
            } else {
                hh = '10';
                mm = '35';
                clN = 'Информатика';
            }
            break;
        case 10:
            if (minutes < 35) {
                hh = '10';
                mm = '35';
                clN = 'Информатика';
            } else if (minutes < 45) {
                hh = '10';
                mm = '45';
                clN = 'Междучасие';
            } else {
                hh = '11';
                mm = '30';
                clN = 'Информатика';
            }
            break;
        case 11:
            if (minutes < 30) {
                hh = '11';
                mm = '30';
                clN = 'Информатика';
            } else if (minutes < 50) {
                hh = '11';
                mm = '50';
                clN = 'Голямо междучасие';
            } else {
                hh = '12';
                mm = '35';
                clN = 'Maтематиka';
            }
            break;
        case 12:
            if (minutes < 35) {
                hh = '12';
                mm = '35';
                clN = 'Maтематиka';
            } else if (minutes < 45) {
                hh = '13';
                mm = '30';
                clN = 'БЕЛ-РП';
            }
            break;
        case 13:
            if (minutes < 30) {
                hh = '13';
                mm = '30';
                clN = 'БЕЛ-РП';
            } else if (minutes < 35) {
                hh = '13';
                mm = '35';
                clN = 'Междучасие';
            } else {
                hh = '14';
                mm = '20';
                clN = 'Deutsch';
            }
            break;
        case 14:
            hh = '14';
            mm = '20';
            if (minutes < 20) {
                clN = 'Deutsch';
            } else {
                clN = 'учебния ден';
            }
            break;
        default:
            hh = hours + 1;
            mm = minutes;
            clN = 'Почивка';
            break;
    }

    return [hh, mm, clN];
}

function runSaturdayTests() {
    switch (hours) {
        case 19:
            hh = '20';
            mm = '30';
            clN = 'Час на класа';
            break;
        case 20:
            if (minutes < 45) {
                hh = '20';
                mm = '45';
                clN = 'Информатика';
            } else {
                hh = '21';
                mm = '45';
                clN = 'Литература';
            }
            break;
        case 22:
            hh = '23';
            mm = '59';
            clN = 'it works!!!'
            break;
    }

    return [hh, mm, clN];
}

function runSundayTests() {
    if (minutes < 15) {
        hh = hours + '';
        mm = '15';
        clN = 'Междучасие';
    } else if (minutes < 30) {
        hh = hours + '';
        mm = '30';
        clN = 'English';
    } else if (minutes < 45) {
        hh = hours + '';
        mm = '45';
        clN = 'Deutsch';
    } else if (minutes < 58) {
        hh = hours + '';
        mm = '58';
        clN = 'Математика';
    } else {
        hh = hours + 1 + '';
        mm = '35';
        clN = 'testing';
    }

    return [hh, mm, clN];
}


// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');


const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const render = (time) => {
    if (time.hours >= 1) {
        app.innerHTML = `
        <div class="count-down" id="timer">
            <div class="timer">
                <h2 class="hours" >${format(time.hours)}</h2>
                <small>Часа</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Минути</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Секунди</small>
            </div>
        </div>
        `;
    } else if (time.minutes >= 1) {
        app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Минути</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Секунди</small>
            </div>
        </div>
        `;
    } else {
        app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Секунди</small>
            </div>
        </div>
        `;
    }


};


function showMessage() {
    message.innerHTML = "Край на " + className;
    app.innerHTML = '';
    heading.style.display = 'none';
}

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
};

function complete() {
    showMessage();
    document.body.style.backgroundImage = breakUrl;
    playAudio();
    // restart the countdown after showing the
    // greeting message for (--a day--) 9 seconds  ()
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(endDate);
        window.location.reload();
    }, 9000); // ms
}

function playAudio() {
    audio.play().then(() => {
        console.log("bell rung; reloading page");
    });
}

const countdownTimer = new CountDown(
    checkClass()[0],
    render,
    complete
);

console.log("> class name: " + className);
