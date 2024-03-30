function printTextWithDelay(text, seconds) {
    setTimeout(() => {
        console.log(text);
    }, seconds * 1000);
}


function callbackWithDelay(text, seconds, callback) {
    setTimeout(() => {
        callback(text);
    }, seconds * 1000);
}

callbackWithDelay("Print text after 5 seconds", 5, printTextWithDelay);