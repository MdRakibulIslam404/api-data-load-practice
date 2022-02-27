// load random users
const loadUsers = () => {
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => displayUsers(data.results[0]))
};
loadUsers();

// display random users
const displayUsers = users => {
    // console.log(users);
    const usersParent = document.getElementById("users-parent");
    // users.forEach(user => {
    // console.log(user);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card p-3 border-3 border-info" style="width: 18rem;">
          <img src="${users.picture.large}" class="card-img-top rounded-circle w-75 mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title my-3">Name: ${users.name.title} ${users.name.first} ${users.name.last}</h5>
            <p class="card-text my-3">Address: ${users.location.street.number} ${users.location.street.name}</p>
            <p class="card-text my-3">City: ${users.location.city}</p>
            <p class="card-text my-3">State: ${users.location.state}</p>
            <p class="card-text my-3">Country: ${users.location.country}</p>
            <p class="card-text my-3">Postcode: ${users.location.postcode}</p>
            <p class="card-text my-3">Coordinates: ${users.location.coordinates.latitude} ${users.location.coordinates.longitude}</p>
            <p class="card-text my-3">Timezone: ${users.location.timezone.offset} ${users.location.timezone.description}</p>
          </div>
        </div>`
    usersParent.appendChild(div);
    // })
};