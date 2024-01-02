
const toggleButton = document.getElementById('toggleCheckbox');
const  body = document.getElementById('body');
const hamburgerContainer = document.querySelector('.hamburgerContainer');
const overlay = document.getElementById('overlay');

//call the needed elements on the page
paragraphs = document.querySelector('p');
heading = document.querySelector('h1');



toggleButton.addEventListener('change', function () {

     // to be able to set hover and other things in css, 
        // set a dark mode class in the body below, it automatically adds and removes that class upon toggle
            //then you can use the .dark-mode selector in css

    body.classList.toggle('dark-mode', this.checked);
    overlay.classList.toggle('dark-mode', this.checked); // toggle darkmode class for overlay
    
    if (toggleButton.checked) {
        body.style.backgroundColor = 'black';
        paragraphs.style.color = 'white';
        heading.style.color = 'white';
        // lists.style.color = 'white';

        
//cos there are may <a> elements, we will loop through them. 'link' is implicitly defined for links

//the link code below is altering my css so i have to comment it
        // links.forEach(link => {
        //     link.style.color = 'white';
        // });

    } else {
        body.style.backgroundColor = 'white'; 
        paragraphs.style.color = 'black';
        heading.style.color = 'black';
        // lists.style.color = 'black';


        //likewise here
        // links.forEach(link => {
        //     link.style.color = 'black';
        // });  
        
    }
});

//QED



hamburgerContainer.addEventListener('click', function () {
    overlay.classList.toggle('active');
  });


  function closeOverlay() {
    overlay.classList.remove('active');
}

// window.addEventListener('resize', function () {
//     if (window.innerWidth <= 1011) {
//         hamburger.style.display = 'block';
//     }
//         else {
//             hamburger.style.display = 'none';
//         }
//     }

// )



function downloadFile() {
    const pdfPath = './resources/Oni_Damilola_CV.pdf';

    fetch(pdfPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'Oni_Damilola_CV.pdf'; // Set the desired file name

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error:', error));
}


// function downloadFile() {
    // Replace 'path/to/your/cv.pdf' with the correct path to your PDF file
    // const pdfPath = '../resources/Oni_Damilola_CV.pdf';

//     fetch(pdfPath)
//         .then(response => response.blob())
//         .then(blob => {
//             // Create a Blob with the PDF data
//             const url = URL.createObjectURL(blob);

//             // Create an invisible link
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = 'Oni_Damilola.pdf'; // Set the desired file name

//             // Simulate a click on the link to trigger the download
//             document.body.appendChild(link);
//             link.click();

//             // Clean up: remove the link and revoke the URL
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
//         })
//         .catch(error => console.error('Error fetching the PDF file:', error));
// }
