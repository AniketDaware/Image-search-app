function searchImages() {
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value;

    fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=YOUR_UNSPLASH_ACCESS_KEY`)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);
        })
        .catch(error => {
            console.log(error);
        });
}

function displayImages(images) {
    var imageGrid = document.getElementById("imageGrid");
    imageGrid.innerHTML = "";

    images.forEach(image => {
        var imageItem = document.createElement("div");
        imageItem.className = "imageItem";

        var img = document.createElement("img");
        img.src = image.urls.small;

        imageItem.appendChild(img);
        imageGrid.appendChild(imageItem);
    });
}
