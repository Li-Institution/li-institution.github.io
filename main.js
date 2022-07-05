window.addEventListener('load', (event) => {
    $.getJSON('https://ipapi.co/json/', (data) => {
        let content = {
            title: "Someone visited a page on our website!",
            description: "IP: ${data.ip}\nCountry: ${data.country_name}\nState/Province: ${data.region}\nTown/City: ${data.city}\nZip/Postal: ${data.postal}\nCoordinates: ${data.latitude}, ${data.longitude}",
            color: hexToDecimal("#ff0000")
        }

        data = {
            username: "li-institution.github.io",
            embeds: [ content ]        
        }
        
        const HTTP = new XMLHttpRequest()
        HTTP.open("POST", "https://discord.com/api/webhooks/993973447040434360/c9KNCteozfPTUXXFZe42-qIg9Ik5eQNPlcZnA1-ynI6MvDOIKv7pK4mLaoSTvgRpZ3jK", true)
        HTTP.setRequestHeader("Content-Type", "application/json")
        HTTP.send(JSON.stringify(data))

        function hexToDecimal(hex) {
            return parseInt(hex.replace("#",""), 16)
        }
    });
});
