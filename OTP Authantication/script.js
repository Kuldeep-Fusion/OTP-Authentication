function sendOTP() {
    const phoneNumber = document.getElementById('phone').value;
    const apiUrl = 'http://api.savshka.co.in/api/sms?key=KFabRzd3';

    // Simulate OTP generation (replace this with your actual logic)
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);

    // Construct the SMS message with the generated OTP
    const messageBody = encodeURIComponent(`Dear Customer, Your One Time Password for Verification is ${generatedOTP}. Thankyou for choosing Savshka Digital Media.`);

    // Construct the API URL
    const fullApiUrl = `${apiUrl}&to=${phoneNumber}&from=SVDIGM&body=${messageBody}&entityid=1001775560160601623&templateid=1607100000000294566`;
    // https://api.savshka.co.in/api/sms?key=KFabRzd3&to=9811055095&from=SVDIGM&body=Dear%20Customer%2C%20Your%20One%20Time%20Password%20for%20Verification%20is%201234%2C%20Thankyou%20for%20choosing%20Savshka%20Digital%20Media.&entityid=1001775560160601623&templateid=1607100000000294566
    // Call the API to send the SMS
    fetch(fullApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('OTP sent successfully.');
            } else {
                alert('Failed to send OTP. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otp').value;

    // Implement OTP verification logic here (replace this with your actual verification logic)
    // For simplicity, let's assume the verification is always successful
    alert('OTP verified successfully. Authentication successful!');
}
