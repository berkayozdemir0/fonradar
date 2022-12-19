
// Api connetction start------------------------------------------------------------------
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers', true)


request.onload = function () {
    // Begin accessing JSON data here
}

// Send request
request.send()

// Begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEach(information => {
    // Log each information's title
    console.log("deneme")
})


    // Api connetction finish------------------------------------------------------------------