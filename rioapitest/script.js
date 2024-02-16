window.onload = function() {
    document.getElementById('searchname').value = '';
    document.getElementById('servername').value = '';
};

function fetchData() {

    const playerName = document.getElementById('searchname').value;
    const serverName = document.getElementById('servername').value;

    const url = `https://raider.io/api/v1/characters/profile?region=eu&realm=${serverName}&name=${playerName}&fields=mythic_plus_scores_by_season%3Acurrent`
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
    name.innerHTML = data.name;
    rank.innerHTML = data.mythic_plus_scores_by_season[0].segments.all.score;
    //console.log(data.mythic_plus_scores_by_season[0].segments);
    rank.style.color = data.mythic_plus_scores_by_season[0].segments.all.color;
}



