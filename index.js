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