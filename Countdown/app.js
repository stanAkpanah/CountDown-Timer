const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline')
const giveaway = document.querySelector('.giveaway')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2021, 11, 31, 23, 59, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()

let weekday = futureDate.getDay()
weekday = weekdays[weekday]

giveaway.textContent = `The giveaway ends ${weekday}, ${date}st ${month} ${year} @ ${hours}:${minutes}pm`

// I want to get my time in milliseconds(ms)
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const daysDifference = futureTime - today
  // 1sec = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // lets have values in millisecs
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000
  // lets calculate all the values
  let days = daysDifference / oneDay
  days = Math.floor(days)
  let hours = Math.floor ((daysDifference % oneDay) / oneHour)
  let minutes = Math.floor((daysDifference % oneHour) / oneMin)
  let seconds = Math.floor((daysDifference % oneMin) / 1000)

  const values = [days, hours, minutes, seconds]

  function format(item){
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }


  items.forEach(function(item, index){
     item.innerHTML = format(values[index])
     
  })
  if (daysDifference < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()

