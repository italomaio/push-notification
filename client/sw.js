console.log("SW Loaded")

self.addEventListener('push', e => {
    const data = e.data.json()

    let options = {
        body: data.body,
        icon: data.icon
    }

    if (data.image)
        options.image = data.image;
    
    self.registration.showNotification(data.title, options)
})