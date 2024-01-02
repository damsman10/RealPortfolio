const toggleButton = document.getElementById('toggleCheckbox');
const  body = document.getElementById('body');
const hamburgerContainer = document.querySelector('.hamburgerContainer');
const overlay = document.getElementById('overlay');

paragraphs = document.querySelector('p');
heading = document.querySelector('h4');

toggleButton.addEventListener('change', function () {
    body.classList.toggle('dark-mode', this.checked);
    overlay.classList.toggle('dark-mode', this.checked);

    if (toggleButton.checked) {
        body.style.backgroundColor = 'black';
        paragraphs.style.color = 'white';
        heading.style.color = 'white';
    }
    else {
        body.style.backgroundColor = 'white'; 
        paragraphs.style.color = 'black';
        heading.style.color = 'black';
    }

});

hamburgerContainer.addEventListener('click', function () {
    overlay.classList.toggle('active');
  });


  function closeOverlay() {
    overlay.classList.remove('active');
}