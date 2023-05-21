const alertButton = document.querySelector(".alert");
const toggle = document.querySelector('.toggle');
const unread = document.querySelectorAll('.unread');
const red = document.querySelectorAll('.red');

var notification_count = 3;
var isMarkAllRead = false; 

toggle.addEventListener('click', () => {
    if (!isMarkAllRead) {
        notification_count = 0;
        alertButton.innerText = 0;
        isMarkAllRead = true;
        unread.forEach(text => {
            text.classList.add('read');
            text.style.backgroundColor = 'hsl(0, 0%, 100%)';
        });
        red.forEach(redButton => {
            redButton.style.display = 'none';
        });
    }
});

unread.forEach((text, index) => {
    const redButton = red[index];

    text.addEventListener('click', () => {
        if (!text.classList.contains('read')) {
            notification_count -= 1;
            alertButton.innerText = notification_count;
            text.classList.add('read');
            text.style.backgroundColor = 'hsl(0, 0%, 100%)';
            redButton.style.display = 'none';
        }
    });
});
