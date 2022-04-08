/*Send a web request.*/
fetch('https://my-api.com/test', {
    method: 'POST', // GET, POST, PUT, DELETE, etc.
    headers: { // request headers
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ // data to send (not available for GET requests)
        name: 'test',
        value: 'test'
    })
}).then(function (response) {
    // response body is returned as json
    return response.json();
}).then(function (json) {
    console.log(json);
});
