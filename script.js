function toggleImage() {
    const SlotFull = document.getElementById('SlotFull');
    const SlotEmpty = document.getElementById('SlotEmpty');

    if (image1.style.display !== 'none') {
        image1.style.display = 'none';
        image2.style.display = 'block';
    } else {
        image1.style.display = 'block';
        image2.style.display = 'none';
    }
}
