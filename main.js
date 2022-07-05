window.addEventListener('load', (event) => {
    $.getJSON('https://ipapi.co/json/', (data) => {
        dataNow = {
            //content: `====================================\nSomeone visited a page on our website!\nIP: ${data.ip}\nCountry: ${data.country_name}\nState/Province: ${data.region}\nTown/City: ${data.city}\nZip/Postal: ${data.postal}\nCoordinates: ${data.latitude}, ${data.longitude}`,
            embeds: [
                {
                    title: "Report",
                    description: "Someone visited a page on our website!",
                    color: 0xffff00,
                    fields: [
                        {
                            name: "IP Address",
                            value: data.ip,
                            inline: false
                        },
                        {
                            name: "Country",
                            value: data.country_name,
                            inline: false
                        },
                        {
                            name: "State/Province",
                            value: data.region,
                            inline: false
                        },
                        {
                            name: "City/Town",
                            value: data.city,
                            inline: false
                        },
                        {
                            name: "Zip/Postal",
                            value: data.postal,
                            inline: false
                        },
                        {
                            name: "Coordinates",
                            value: `${data.latitude}, ${data.longitude}`
                        }
                    ]
                }
            ]
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
