// destructure
// propertydescriptor
// debounce es5

function debounce(fn, delay) {
    // console.log(this)  // what's this
    var timeID;
    return function() {
        // what's this?
        clearTimeout(timeID)
        timeID = setTimeout(() => {
            fn.apply(this) 
        }, delay);  
    }
}


function print ()
{
    console.log(this.value)  // what's this?
}

function test () {
    console.log(this)
}

document.querySelector('input').addEventListener('input', debounce(print, 1000))
document.querySelector('button').addEventListener('click', test)

