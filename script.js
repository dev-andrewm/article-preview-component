const shareButton = document.querySelector('.share-button-container');
const shareInfoContainer = document.querySelector('.share-info-container');
const arrowDown = document.querySelector('.arrow-down');

shareButton.addEventListener('click', () => {
    shareInfoContainer.classList.toggle('visible');
    shareButton.classList.toggle('ontop');
    arrowDown.classList.toggle('arrowVisible');
});