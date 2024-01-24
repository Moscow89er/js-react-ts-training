// document.js

// 1) Календарь в виде таблицы
function createCalendar(elem, year, month) {
    const mon = month - 1;
  
    let d = new Date(year, mon);
  
    let table = "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";
  
    for (let i = 0; i < getDay(d); i++) {
      table += "<td></td>";
    }
  
    while (d.getMonth() == mon) {
      table += "<td>" + d.getDate() + "</td>";
  
      if (getDay(d) % 7 == 6) {
        table += "</tr><tr>";
      }
  
      d.setDate(d.getDate() + 1);
    }
  
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += "<td></td>";
      }
    }
  
    table += "</tr></table>";
  
    elem.innerHTML = table;
}
  
function getDay(date) {
  let day = date.getDay();

  if (day == 0) day = 7;

  return day - 1;
}
  
createCalendar(calendar, 2012, 9);

// 2)
function createWatch() {
  const startBtn = document.querySelector(".startBtn");
  const stopBtn = document.querySelector(".stopBtn");

  let time = document.createElement("div");

  let hour = "hh";
  let min = "mm";
  let sec = "ss"

  time.textContent = `${hour}:${min}:${sec}`;

  document.body.prepend(time);

  let timerId;

  function startWatch() {
    startBtn.addEventListener("click", () => {
      clearInterval(timerId);
      
      timerId = setInterval(() => {
        let today = new Date();

        hour = today.getHours();
        min = today.getMinutes();
        sec = today.getSeconds();

        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;
        
        time.textContent = `${hour}:${min}:${sec}`;
      }, 1000);
    });
  }

  function stopWatch() {
    stopBtn.addEventListener("click", () => {
      clearInterval(timerId);
      timerId = null;
    })
  }

  startWatch();
  stopWatch();
}

// 3)
function showNotification(options) {
  let notification = document.createElement("div");
  notification.classList.add("notification");
  
  notification.style.marginTop = options.top + "px";
  notification.style.marginRight = options.right + "px";
  notification.textContent = options.html;

  if (options.className) {
    notification.classList.add(options.className);
  }

  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 1500);
}

showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});

// 4) Распахнуть элемент на всю высоту
element.style.height = `${element.scrollHeight}px`;

// 5)
function getScrollBarWidth() {
  let div = document.createElement("div");

  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";

  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  console.log(scrollWidth);
}

getScrollBarWidth();

// 6)
function putBallInCenterWithoutCss() {
  const ball = document.querySelector("#ball");
  const field = document.querySelector("#field");

  ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
  ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";
}

// 7)
function applyingForFixedPositioning() {
  const elem = document.getElementById("coords-show-mark");

  function createMessageUnder(elem, html) {
    // создаём элемент, который будет содержать сообщение
    let message = document.createElement("div");
    // для стилей лучше было бы использовать css-класс здесь
    message.style.cssText = "position:fixed; color: red";

    // устанавливаем координаты элементу, не забываем про "px"!
    const coords = elem.getBoundingClientRect();

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;

    return message;
  }

  // Использование:
  // добавим сообщение на страницу на 5 секунд
  let message = createMessageUnder(elem, "Hello!");
  document.body.append(message);
  setTimeout(() => message.remove(), 5000);
}

// 8)
function applyingForAbsolutePositioning() {
  // получаем координаты элемента в контексте документа
  function getCoords(elem) {
    const box = elem.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

  function createMessageUnder(elem, html) {
    const message = document.createElement("div");
    message.style.cssText = "position:absolute; color: red";

    let coords = getCoords(elem);

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;

    return message;
  }

  let message = createMessageUnder(elem, "Hello!");
  document.body.append(message);
  setTimeout(() => message.remove(), 5000);
}

// 9)
function getCoords() {
  let fieldCoords = field.getBoundingClientRect();

  const answer = [
    `firstAnswer: x = ${Math.round(fieldCoords.left)}, y = ${Math.round(fieldCoords.top)}`,
    `secondAnswer: x = ${Math.round(fieldCoords.right)}, y = ${Math.round(fieldCoords.bottom)}`,
    `thirdAnswer: x = ${Math.round(fieldCoords.left + field.clientLeft)}, y = ${Math.round(fieldCoords.top + field.clientTop)}`,
    `fourthAnswer: x = ${Math.round(fieldCoords.left + field.offsetWidth - field.clientLeft)}, y = ${Math.round(fieldCoords.top + field.offsetHeight - field.clientTop)}`
  ]

  console.log(answer);
}