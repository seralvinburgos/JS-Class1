let accountUsers="Burgos"
let primaryAccount="Alvin"
let secondaryAccount="EJ"
let language="English"
let geoLocation="United States"

let topMovie1="Look Both Ways"
let topMovie2="Untold, The Girlfriend Who Didn't Exist"
let topMovie3="Dayshift"
let topMovie4="The Next 365 Days"
let topMovie5="Uncharted"
let topMovie6="Sing 2"
let topMovie7="Purple Hearts"
let topMovie8="Endless Love"
let topMovie9="The Gray Man"
let topMovie10="The Informer"

let topShow1="The Sandman"
let topShow2="Echoes"
let topShow3="Never Have I Ever"
let topShow4="The Cuphead Show"
let topShow5="Stranger Things"
let topShow6="High Heat"
let topShow7="Glow Up"
let topShow8="Virgin River"
let topShow9="Extraordinary Attorney Woo"
let topShow10="Locke & Key"

document.write(`
    
    <h1>
    <img class="n-logo" src="img/n-logo.png" alt="">
    Netflix</h1>
    <p><span>Account:</span> ${accountUsers}</p>
        <ul>
            <li><span>Primary:</span> ${primaryAccount}</li>
            <li><span>Secondary:</span> ${secondaryAccount}</li>
        </ul>
    <p><span>Language:</span> ${language}</p>
    <p><span>Location:</span> ${geoLocation}</p>

    <div class="containerList">
        <div class="movieList">
            <h2>Top 10 Movies in the U.S. Today</h2>
                <ol>
                    <li>${topMovie1}</li>
                    <li>${topMovie2}</li>
                    <li>${topMovie3}</li>
                    <li>${topMovie4}</li>
                    <li>${topMovie5}</li>
                    <li>${topMovie6}</li>
                    <li>${topMovie7}</li>
                    <li>${topMovie8}</li>
                    <li>${topMovie9}</li>
                    <li>${topMovie10}</li>
                </ol>
        </div>
        <div class="showList">
            <h2>Top 10 Shows in the U.S. Today</h2>
                <ol>
                    <li>${topShow1}</li>
                    <li>${topShow2}</li>
                    <li>${topShow3}</li>
                    <li>${topShow4}</li>
                    <li>${topShow5}</li>
                    <li>${topShow6}</li>
                    <li>${topShow7}</li>
                    <li>${topShow8}</li>
                    <li>${topShow9}</li>
                    <li>${topShow10}</li>
                </ol>
        </div>
    </div>
`)

console.log(accountUsers);
console.log(primaryAccount);
console.log(secondaryAccount);
console.log(language);
console.log(geoLocation);
