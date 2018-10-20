let currentDay = new Date();   //initialize the date
let currentMonth = currentDay.getMonth(); //It will gives you the current month which can be incremented later
let currentYear = currentDay.getFullYear();//It will gives you the current year which can be incremented later
let currentDayName = currentDay.getDay();//It will gives you the current day
let todayDate = currentDay.getDate();//It will gives you the current day which is static and we are using it for conditions
let thisMonth = currentDay.getMonth();//It will gives you the current month which is static and we are using it for conditions


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let mny = document.getElementById("mny")

function displayCalendar(month, year) {
    let startingDay = new Date(year, month).getDay();//gives starting day of month
    let daysInMonth = new Date(year, month + 1, 0).getDate();//gives total days in month
    let dim = document.getElementById('daysInMonth');
    let dayName = document.getElementById('todayName');
    let mny = document.getElementById('mny')
    dayName.innerHTML = todayDate;
    dim.innerHTML = ""
    mny.innerHTML = months[currentMonth] + " " + currentYear;
    let date = 1;
//conditions for getting dates
    for (let i = 0; i < 32; i++) {
        let row = document.createElement("div"); //initialize the row for holding dates
        for (let j = 0; j < 7; j++) { //here j<7 because we need only seven divs in a row for a week
            if (i === 0 && j < startingDay - 1) {// conditions for to create empty date holders
                let dayHolder = document.createElement("div");
                let content = document.createTextNode("-");
                dayHolder.appendChild(content);// creating date div
                row.appendChild(dayHolder);// pushing to row
            } else if (date > daysInMonth) {
                break;
            } else { //condition for creating dates
                let dayHolder = document.createElement("div");
                let content = document.createTextNode(date);
                //adding styles for today date
                if (date === currentDay.getDate() && month === currentDay.getMonth() && year === currentDay.getFullYear()) {
                    dayHolder.classList.add("colort");
                }
                //adding stikeouts for passedaway
                if (month < currentDay.getMonth() || date < currentDay.getDate()) {
                    dayHolder.classList.add("color");
                }
                if (month > currentDay.getMonth() || year > currentDay.getFullYear()) {
                    dayHolder.classList.remove("color");
                }
                dayHolder.appendChild(content);// creating date div
                row.appendChild(dayHolder);// pushing to row
                date++; 
            }
        }
        dim.appendChild(row); //adding rows to parent element
    }
}
//function for previous year it will work when previous button clicks
function previous() {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    displayCalendar(currentMonth, currentYear);

}
//function for next year it will work when next button clicks
function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    displayCalendar(currentMonth, currentYear);
    console.log("clicked");
}
displayCalendar(currentMonth, currentYear);
