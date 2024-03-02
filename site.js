//alert('hi')

const hours = new Date().getHours() // get the current hour

/*const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?*/

function greeting (hours){
    if (hours >= 4 && hours < 12) {
        return "Good Morning"
    }
    else if (hours >= 12 && hours < 17) {
        return "Good Afternoon"
    }
    else if (hours >= 17 || hours < 4) {
        return "Good Evening"
    }

}

const welcomeMessage = document.querySelector('#welcome')
welcomeMessage.textContent = greeting(hours)

const secret = "Serect Moblin"
localStorage.setItem("It's a secret to everybody.", secret)
