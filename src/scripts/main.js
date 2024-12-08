document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const images = [
        { src: "/src/assets/images/1.jpg", alt: "Image 1" },
        { src: "/src/assets/images/2.jpg", alt: "Image 2" },
    ];

    images.forEach(img => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";
        col.innerHTML = `
            <div class="card">
                <img src="${img.src}" class="card-img-top" alt="${img.alt}">
                <div class="card-body">
                    <p class="card-text">${img.alt}</p>
                </div>
            </div>
        `;
        gallery.appendChild(col);
    });
});
