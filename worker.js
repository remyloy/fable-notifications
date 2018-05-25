console.log("Worker.js running");

self.addEventListener('push', function(evt){
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(evt) {
    console.log("On notification click");
    console.log(evt);

    evt.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    evt.waitUntil(self.clients.matchAll({
      type: "window"
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        var url = new URL(client.url)
        if (url.pathname == '/' && 'focus' in client)
          return client.focus();
      }
      if (self.clients.openWindow)
        return self.clients.openWindow('/');
    }));
});

var reg = self.registration;
console.log(reg);
