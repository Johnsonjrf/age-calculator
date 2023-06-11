const yearValue = document.getElementById("year");
const monthValue =  document.getElementById("month");
const dayValue = document.getElementById("day");
const dayError = document.getElementById("day-error").innerHTML
const monthError = document.getElementById("day-error").innerHTML
const yearError = document.getElementById("day-error").innerHTML

// add eventlistener to detect when value is being entered
monthValue.addEventListener("input", function () {
    // check the validity of input
    if (monthValue.value < 1 || monthValue.value > 12 || monthValue.value.length > 2 ) {
        document.getElementById("month-error").textContent = "Enter a valid value"
    } else {
        
        document.getElementById("month-error").textContent = " "
    }

    // if(monthValue.value.length = 1 && monthValue.value < 10 && monthValue.value > 0) {
    //     monthValue.value = "0" + monthValue.value
    // }

    
})

// add eventlistener to detect when value is being entered
dayValue.addEventListener("input", function () {
    // ceck the validity of value entered
    if(dayValue.value.length > 2 || dayValue.value < 1 || dayValue.value > 31) {
        document.getElementById("day-error").textContent = "Enter a valid day"
    } else {
        document.getElementById("day-error").textContent = " "
    }

    // if(dayValue.value.length = 1 && dayValue.value < 10 && dayValue.value > 1) {
    //     dayValue.value = "0" + dayValue.value
    // }

})

// add eventlistener to detect when vslue is being entered
yearValue.addEventListener("input", function () {
    if(yearValue.value.length > 4 || yearValue.value < 1 || yearValue.value > 2023) {
        document.getElementById("year-error").textContent = "Enter a valid year"
    } else {
        document.getElementById("year-error").textContent = " "
    }
})


// add eventlistener to detect click event on the arrow
document.getElementsByClassName("img")[0].addEventListener("click", function(e) {
    
    var year = yearValue.value
    var month = monthValue.value
    var day = dayValue.value

    // get current day
    const tday = new Date().getDate()
    // get current month
    const tmonth = new Date().getMonth() + 1
    
    // check if all the fields have valid values
    if(year !== " " && month !== " " & day !== " ") {
    //    with reference to the Date of birth entered, calculate the full length of time so far
        var birthday = +new Date(year, month, day)

        // calculate the age of the person
        var calcAge = Math.floor((Date.now() - birthday) / 31557600000);
        
        if(Number.parseFloat(month) > tmonth) {
           
            const calcMonth = tmonth - Number.parseFloat(month) + 12
            document.getElementById("months").textContent = calcMonth
        } else {
            const calcMonth = tmonth - Number.parseFloat(month)
            document.getElementById("months").textContent = calcMonth
        }
        if(tday < Number.parseFloat(day)) {
            const calcDay = tday - Number.parseFloat(day) + 30
            document.getElementById("days").textContent = calcDay
        } else {
            const calcDay = tday - Number.parseFloat(day)
            document.getElementById("days").textContent = calcDay 
        }

       

        document.getElementById("years").innerHTML = calcAge
        

    } else {

    }



    
})

