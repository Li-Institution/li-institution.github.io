window.addEventListener('load', (event) => {
    $.getJSON('https://ipapi.co/json/', (data) => {
        dataNow = {
            content: `Someone visited a page on our website!\nIP: ${data.ip}\nCountry: ${data.country_name}\nState/Province: ${data.region}\nTown/City: ${data.city}\nZip/Postal: ${data.postal}\nCoordinates: ${data.latitude}, ${data.longitude}`
        }
        
        const HTTP = new XMLHttpRequest()
        HTTP.open("POST", "https://discord.com/api/webhooks/993973447040434360/c9KNCteozfPTUXXFZe42-qIg9Ik5eQNPlcZnA1-ynI6MvDOIKv7pK4mLaoSTvgRpZ3jK", true)
        HTTP.setRequestHeader("Content-Type", "application/json")
        HTTP.send(JSON.stringify(dataNow))
    });
});
