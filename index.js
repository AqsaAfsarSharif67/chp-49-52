// ...............QUESTION 1...................
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>`;
});


// ..................QUESTION 2...........................//
document.addEventListener('Content', function() {
    let readMoreBtn = document.querySelector('.read-more-btn');
    let itemDetails = document.querySelector('.item-details');

    readMoreBtn.addEventListener('click', function() {
        if (itemDetails.style.display === 'none') {
            itemDetails.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            itemDetails.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
})