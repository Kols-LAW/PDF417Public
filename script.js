// Add event listener to the call-to-action form

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".call-to-action form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted!");
    });
});

// Get the form element
const form = document.getElementById('barcode-form');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Get the entered data from the input field
    const data = document.getElementById('data').value;
    
    // Update the barcode URL with the new data
    const barcodeUrl = `https://barcode.tec-it.com/barcode.ashx?data=${data}&code=PDF417`;
    
    // Get the barcode image element
    const barcodeImg = document.getElementById('barcode');
    
    // Set the src attribute of the image to the updated URL
    barcodeImg.src = barcodeUrl;
    
    // Display a message indicating that the form was submitted successfully
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Barcode generated successfully!';
});