fetch('https://api.spotify.com/v1/search?q=michael+jackson&type=album')
    .then(response => response.json())
    .then(data => {
        return Promise.all(data.albums.items
            .map(item => item.id).slice(0, 5)
            .map(id => fetch('https://api.spotify.com/v1/albums/' + id)));
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(albums => Promise.all(albums.map(album => fetch(album.images[0].url))))
    .then(responses => Promise.all(responses.map(r => r.blob())))
    .then(blobs => blobs.map(blob => URL.createObjectURL(blob)))
    .then(urls => {
        return Promise.all(urls.map(url => {
            return new Promise(resolve => {
                const image = new Image();
                image.addEventListener('load', () => {
                    resolve(image);
                });
                image.src = url;
            })}));
    })
    .then(images => {
        images.forEach(image => {
            document.body.appendChild(image);
        });
    });
