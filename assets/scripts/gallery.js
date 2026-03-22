function initGallery() {
    hideModal();
    document.getElementById('selectedImage').addEventListener('click', () => {
        showModal(document.getElementById('selectedImage').src);
    });
    document.getElementById('galleryImageModal').addEventListener('click', hideModal);
    fetch('/assets/data/gallery.json').then(res => res.json()).then(data => {
        const galleryItems = data.items.map(item => ({ ...item, selected: false }));
        galleryItems[0].selected = true;
        const imgElements = [];
        galleryItems.forEach((item, index) => {
            const imgElement = getSmallImage(index, item.image_url);
            imgElements.push(imgElement);
            imgElement.addEventListener('click', () => {
                // Remove selected class from all
                imgElements.forEach((el, idx) => {
                    el.classList.remove('opacity-100', 'filter-none');
                    el.classList.add('opacity-50', 'filter', 'grayscale');
                    galleryItems[idx].selected = false;
                });
                // Add selected class to clicked
                imgElement.classList.remove('opacity-50', 'filter', 'grayscale');
                imgElement.classList.add('opacity-100', 'filter-none');
                item.selected = true;
                document.getElementById('selectedImage').src = item.image_url;
            });
            // Set initial selected class
            if (index === 0) {
                // Ensure first image is styled as selected
                imgElement.classList.remove('opacity-50', 'filter', 'grayscale');
                imgElement.classList.add('opacity-100', 'filter-none');
                document.getElementById('selectedImage').src = item.image_url;
            } else {
                imgElement.classList.remove('opacity-100', 'filter-none');
                imgElement.classList.add('opacity-50', 'filter', 'grayscale');
            }
            document.querySelector('#smallImageRow').appendChild(imgElement);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => initGallery());


function showModal(imageUrl) {
    const modal = document.getElementById('galleryImageModal');
    const modalImage = modal.querySelector('img');
    modalImage.src = imageUrl;
    modal.classList.add('opacity-100', 'pointer-events-auto');
    modal.classList.remove('opacity-0', 'pointer-events-none');
}

function hideModal() {
    const modal = document.getElementById('galleryImageModal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
}


function getSmallImage(index, imageUrl) {
    const htmlElement = document.createElement('img');
    htmlElement.src = imageUrl;
    htmlElement.className = "imageElement w-25 h-25 rounded-lg shadow-card transition-opacity duration-300 opacity-50 object-cover hover:cursor-pointer";
    htmlElement.dataset.key = index;
    return htmlElement;
}