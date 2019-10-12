function handler(event) {
    console.log('listener 3');
    event.subject = 'JS'

}


document.addEventListener('contextmenu', handler);


document.oncontextmenu = () => {
    console.log('listener 2');
    return false;
};


document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('listener 1', event.subject);
});
