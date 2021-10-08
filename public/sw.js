let cacheData = "appV1"

/* Create Caches Data */
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
                "/favicon.ico",
                "https://staticw2.yotpo.com/bajsmlDmBFXvsTGz0wfL4NBwKL6WUaMyH52aYwBi/widget.js",
                "/static/js/vendors~main.chunk.js",
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                // "/*.css",
                // "/*.js",
                "/images/MERN.jpg",
                "/images/vision.jpg",
                "/images/pro1.jpeg",
                "/about",
                "/portfolio",
                "/shop",
                "/post",
                "/contact",
                "/doc"
            ])
        })
    )
})


/* When Network Offline, all caches data view from here */
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result
                }
                let requestUrl = event.request.clone()
                return fetch(requestUrl)
            })
        )
    }
})