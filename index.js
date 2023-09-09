//Closure

// function outer(){
//     let name = "dalia alawneh"
//     return function(){
//         console.log(name);
//     }
// }
// let func = outer()
// func()

// console.log(outer());




//trottle


const throttle = (func, delay = 100) => {
    let lastCallTime = 0

    return function () {
        const currentTime = Date.now()
        if (currentTime - lastCallTime >= delay) {
            lastCallTime = currentTime
            func()
        }
    }
}



// const resizeThrottle = throttle(printHello, 100)
// window.addEventListener('scroll', printHello)



function printHello() {
    console.log("hello");
}


//debounce
const debounce = (func, delay = 500) => {
    let currentTimeout

    return function () {
        clearTimeout(currentTimeout)
        currentTimeout = setTimeout(() => {
            func()
        }, delay)
    }
}


const inputDebounce = debounce(printHello, 500)
document.querySelector('input').addEventListener('input', inputDebounce)