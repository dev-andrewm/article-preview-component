const shareButton = document.querySelector('.share-button-box');
const shareInfoBox = document.querySelector('.share-icons-box');
const arrowDown = document.querySelector('.arrow-down');

shareButton.addEventListener('click', () => {
    shareInfoBox.classList.toggle('visible');
    shareButton.classList.toggle('ontop');
    arrowDown.classList.toggle('arrowVisible');
});