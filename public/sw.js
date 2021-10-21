let cacheData = "appV1"

/* Create Caches Data */
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
                //"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
                "/favicon.ico",
                "https://staticw2.yotpo.com/bajsmlDmBFXvsTGz0wfL4NBwKL6WUaMyH52aYwBi/widget.js",
                "/static/js/vendors~main.chunk.js",
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/^\/product\//",
                "/assets/aboutbio.jpg",
                "/images/vision.jpg",
                "/images/mission.jpg",
                "/images/MERN.jpg",
                "/images/pro1.jpeg",
                "/images/pro2.jpeg",
                "/images/pro3.jpeg",
                "/images/pro4.jpeg",
                "/images/pro5.jpeg",
                "/images/pro6.jpeg",
                "/images/pro7.jpeg",
                "/images/pro8.jpeg",
                "/images/pro9.jpeg",
                "/",
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

