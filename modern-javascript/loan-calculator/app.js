// Listen for submit
document.getElementById('loan-form').addEventListener('submit', (e)=>{
  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(()=>{
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    calculateResults();
  }, 1500);

  e.preventDefault();
});

// Calculate Results
function calculateResults(e){
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);


  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    console.log(monthlyPayment)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    console.log(totalPayment)
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    console.log(totalInterest)
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

function showError(error){
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  const errorDiv = document.createElement('div');

  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv,heading);
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';

  // Clear error after 3 seconds
  setTimeout(()=>document.querySelector('.alert').remove(), 3000);
}
