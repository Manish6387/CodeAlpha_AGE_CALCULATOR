// ageCalculator.js
function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const dob = new Date(dobInput);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  const result = document.getElementById('result');
  result.innerHTML = `Your age is: ${age}`;
}
