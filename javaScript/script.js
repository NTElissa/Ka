const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
};

document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo-preview img');
    const overlay = document.createElement('div');
    const fullSizeImage = document.createElement('img');
    
    overlay.className = 'full-size-overlay';
    overlay.appendChild(fullSizeImage);
    document.body.appendChild(overlay);
    
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            fullSizeImage.src = photo.src;
            overlay.style.display = 'flex';
        });
    });
    
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});
