const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const request = require('request');

var subscriptionKey = "aa90fdd904904ec6b42e2c621e0e4064";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "eastus2";

function translateText() {
    let options = {
        method: 'post',
        baseUrl: endpoint,
        url: '/translate',
        qs: {
            'api-version': '3.0',
            'to': ['de', 'it']
        },
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        body: [{
            'text': document.getElementById("directions").value,
        }],
        json: true,
    };

    request(options, function (err, res, body) {
        document.getElementById("output").innerHTML = JSON.stringify(body, null, 4);
    });
};

// Call the function to translate text.
translateText();