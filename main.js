window.addEventListener('load', (event) => {
    $.getJSON('https://ipapi.co/json/', (data) => {
        let ip = "unknown"; 
        ip = data.ip;

        dataNow = {
            content: `<@672892838995820553> Someone visited a page on our website! Their IP address: ${ip}`
        }
        
        const HTTP = new XMLHttpRequest()
        HTTP.open("POST", "https://discord.com/api/webhooks/989892141734055996/eckpFcO-u-P2i9pojwAaJtdJHmAhAc9Fec3V8FhYmdtSuvG6DuIC7teHN8i153U5366O", true)
        HTTP.setRequestHeader("Content-Type", "application/json")
        HTTP.send(JSON.stringify(dataNow))
    });
});
