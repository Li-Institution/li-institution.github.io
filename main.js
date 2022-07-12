window.addEventListener('load', (event) => {
    $.getJSON('https://ipapi.co/json/', (data) => {
        let content = {
            title: "Someone visited a page on our website!",
            description: `
            **IP:** ${data.ip}
            **Country:** ${data.country_name}
            **State/Province:** ${data.region}
            **Town/City:** ${data.city}`,
            color: "3107012"
        }

        data = {
            "avatar_url": "https://i.imgur.com/va4KTJ8.png",
            "embeds": [ content ]        
        } //

        const HTTP = new XMLHttpRequest()
        HTTP.open("POST", "https://discord.com/api/webhooks/993973447040434360/c9KNCteozfPTUXXFZe42-qIg9Ik5eQNPlcZnA1-ynI6MvDOIKv7pK4mLaoSTvgRpZ3jK", true)
        HTTP.setRequestHeader("Content-Type", "application/json")
        HTTP.send(JSON.stringify(data))
    });
});
