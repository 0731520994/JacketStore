
// Get the buttons by their IDs
const backButton1 = document.getElementById('backButton1');
const nextButton1 = document.getElementById('nextButton1');
const backButton2 = document.getElementById('backButton2');
const nextButton2 = document.getElementById('nextButton2');

// Add event listeners to the buttons
backButton1.addEventListener('click', showCartSection);
nextButton1.addEventListener('click', showPaymentSection);
backButton2.addEventListener('click', showCartSection);
nextButton2.addEventListener('click', submitForm);

// Function to show the payment section and hide the billing address section
function showPaymentSection() {
  const billingSection = document.getElementById('page1');
  const paymentSection = document.getElementById('page2');
  
  billingSection.style.display = 'none';
  paymentSection.style.display = 'block';
}

// Function to show the billing address section and hide the payment section
function showCartSection() {
  const billingSection = document.getElementById('page1');
  const paymentSection = document.getElementById('page2');
  
  billingSection.style.display = 'block';
  paymentSection.style.display = 'none';
}

// Function to submit the form
function submitForm() {
  document.querySelector('form').submit();
}

// Function to calculate the total
function calculateTotal() {
  // Perform the calculation logic
  // ...
}

  