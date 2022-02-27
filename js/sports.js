// search sports
const searchPlayers = () => {
    const searchBox = document.getElementById("search-box");
    const searchValue = searchBox.value;
    searchBox.value = "";
    if (searchValue == "") {
        document.getElementById("search-err").style.display = "block";
    }
    else {
        loadPlayer(searchValue);
        document.getElementById("spinner").style.display = "block";
    }
};

// load player
const loadPlayer = searchPlayer => {
    // console.log(playerName);
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchPlayer}`)
        .then(res => res.json())
        .then(data => displayPlayer(data.player))
        .catch(error => displayErr(error))
};
const displayErr = error => {
    document.getElementById("search-err").style.display = "block";
    document.getElementById("spinner").style.display = "none";
};

// display player
const displayPlayer = playerInfo => {
    // console.log(playerInfo);
    // if (playerInfo == null) {
    //     document.getElementById("search-err").style.display = "block";
    // }
    const playersParent = document.getElementById("players-parent");
    playersParent.textContent = "";
    playerInfo.forEach(player => {
        // console.log(player);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="col">
            <div onclick="loadDetails(${player.idPlayer})" class="card h-100">
                <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${player.strPlayer}</h3>
                  <p class="card-text">${player.strDescriptionPT}</p>
                </div>
            </div>
        </div>`
        playersParent.appendChild(div);
        document.getElementById("spinner").style.display = "none";
    })
};

// load player details
const loadDetails = playerId => {
    // console.log(playerId);
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookuphonors.php?id=${playerId}`)
        .then(res => res.json())
        .then(data => displayDetails(data.honors[0]))
};

// display player details
const displayDetails = details => {
    // console.log(details);
    const detailsParent = document.getElementById("details-parent");
    detailsParent.textContent = "";
    const div = document.createElement("div");
    // bootstrap class
    div.classList.add("border");
    div.classList.add("border-info")
    div.classList.add("rounded");
    div.innerHTML = `
    <h5>${details.strHonour}</h5>
    <h5>${details.strPlayer}</h5>
    <h5>${details.strSeason}</h5>
    <h5>${details.strSport}</h5>
    <h5>${details.strTeam}</h5>`
    detailsParent.appendChild(div);
};