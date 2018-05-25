reg = navigator.serviceWorker.register('worker.js');

function showNotification() {
    Notification.requestPermission(function (result) {
        if (result === 'granted') {
            reg.then(function (result) {
                result.showNotification('Vibration Sample', {
                    body: 'Buzz! Buzz!',
                    // icon: '../images/touch/chrome-touch-icon-192x192.png',
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: 'vibration-sample'
                });
        });}
    });
}

document.getElementById('btn1').addEventListener('click', function () {
    console.log('clicked!');
    showNotification();
});