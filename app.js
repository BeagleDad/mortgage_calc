window.onload = function() {
  // Global "State variables"
  var yearsOfMortgage = 30;
  var interestRate = 8.0;
  var loanAmount = 0;
  var annualTax = 0;
  var annualInsurance = 0;

  // Setup year slider
  const updateSlider = e => {
    yearsOfMortgage = e.target.value;
    document.getElementById("year-value").innerText = yearsOfMortgage;
  };
  const yearSlide = document.getElementById("year-slide");
  yearSlide.value = yearsOfMortgage;
  document.getElementById("year-value").innerText = yearsOfMortgage;
  yearSlide.addEventListener("input", updateSlider);

  // Setup rate slider
  const updateRateSlider = e => {
    interestRate = e.target.value;
    document.getElementById("rate-value").innerText = interestRate;
  };
  const rateSlide = document.getElementById("rate-slide");
  rateSlide.value = interestRate;
  document.getElementById("rate-value").innerText = interestRate;
  rateSlide.addEventListener("input", updateRateSlider);

  // Setup loan input
  const updateLoanAmt = e => {
    loanAmount = e.target.value;
    document.getElementById("loan-input").innerText = loanAmount;
  };
  const loanInput = document.getElementById("loan-input");
  loanInput.addEventListener("input", updateLoanAmt);

  // Setup tax input
  const updateTax = e => {
    annualTax = e.target.value;
    document.getElementById("tax-input").innerText = annualTax;
    console.log(annualTax);
  };
  const taxInput = document.getElementById("tax-input");
  taxInput.addEventListener("input", updateTax);

  // Setup Insurance Input
  const updateInsurance = e => {
    annualInsurance = e.target.value;
    document.getElementById("insurance-input").innerText = annualInsurance;
    console.log("insurance:", annualInsurance);
  };
  const insuranceInput = document.getElementById("insurance-input");
  insuranceInput.addEventListener("input", updateInsurance);

  const calcPrincipleAndInterest = () => {
    let principleAndInterest =
      ((interestRate / 100 / 12) * loanAmount) /
      (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12));
    //console.log(principleAndInterest);
    return principleAndInterest;
  };

  const calcMonthlyTax = annTax => {
    return annTax / 12;
  };

  const calcMonthlyInsurance = annInsurance => {
    return annInsurance / 12;
  };

  // Handle submit
  const handleSubmit = e => {
    e.preventDefault();
    // Do the calculations
    const principleAndInterest = calcPrincipleAndInterest();
    const monthlyTax = calcMonthlyTax(annualTax);
    const monthlyInsurance = calcMonthlyInsurance(annualInsurance);
    const monthlyPayment = principleAndInterest + monthlyTax + monthlyInsurance;
    console.log(
      "pni: " +
        principleAndInterest.toFixed(2) +
        " tax: " +
        monthlyTax.toFixed(2) +
        " insurance: " +
        monthlyInsurance.toFixed(2) +
        " monthly payment: " +
        monthlyPayment.toFixed(2)
    );
  };
  document.getElementById("the-form").addEventListener("submit", handleSubmit);
};
