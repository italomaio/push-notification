
import app from './app'

(function(){

    const publicVapidKey = "BK9Z1AvDq84Oz5nWzgJdACVpkOCkH1Pbsghmm7G1OOQ2FbKpCHPqQ7r6BJ6Gcbq0qREhSGGbM9UICNDpIQKteWA"

    if ('serviceWorker' in navigator) {
        send()
        .then(resp => console.log(resp))
        .catch(err => console.error(err))
    }

    function urlBase64ToUint8Array(base64String) {
      const padding = "=".repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }

    async function send() {

        const register = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        })

        const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
        })

        await fetch('/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(resp => console.log(resp))
        .catch(err => console.error(err))
    }
  

})()