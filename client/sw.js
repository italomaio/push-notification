console.log("SW Loaded")

self.addEventListener('push', e => {
    const data = e.data.json()

    self.registration.showNotification(data.title, {
        'body': 'Notified by GSIT Tecno',
        'icon': 'http://gsittecnologia.com.br/images/logo-footer.png'
    })
})