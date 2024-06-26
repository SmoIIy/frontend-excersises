window.onload = function() {
    document.querySelector('#searchname').value = '';
    document.querySelector('#servername').value = '';
    document.querySelector('#region').value = 'eu';
};

function fetchData() {

    const playerName = document.querySelector('#searchname').value;
    const serverName = document.querySelector('#servername').value;
    const region = document.querySelector('#region').value;

    const url = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${serverName}&name=${playerName}&fields=mythic_plus_scores_by_season%3Acurrent`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data){
    const name = document.querySelector("#name");
    const rank = document.querySelector("#rank");
    const rating = document.querySelector("#rating");
    const score = Math.round(data.mythic_plus_scores_by_season[0].segments.all.score);
    
    name.innerHTML = data.name;
    rank.innerHTML = score;
    //console.log(data.mythic_plus_scores_by_season[0].segments);
    rank.style.color = data.mythic_plus_scores_by_season[0].segments.all.color;
    let output = `<p><span id="name">${name}</span> har <span id="rank"> ${rank}</span> Rating</p>`;

    rating.outerHTML = output;
}

window.addEventListener("keydown", (e) =>{
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        fetchData();
    }
})

