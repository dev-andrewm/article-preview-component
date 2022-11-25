const shareButton = document.querySelector('.share-button-box');
const shareInfoContainer = document.querySelector('.share-icons-box');
const arrowDown = document.querySelector('.arrow-down');

shareButton.addEventListener('click', () => {
    shareInfoContainer.classList.toggle('visible');
    shareButton.classList.toggle('ontop');
    arrowDown.classList.toggle('arrowVisible');
});