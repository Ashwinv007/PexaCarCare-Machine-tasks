// This debounce function makes sure that a function
//  is executed only after a specified delay has passed
//  since last time it was invoked

function debounce(func,wait){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(this.args);
        },wait)
    }
}


//example usage:

// const debounceFunc = debounce(funcName,1000);
// debounceFunc();