
const API_URL = "https://api.escuelajs.co/api/v1/users";
const DEFAULT_AVATAR = "/Imagenes/blank-profile-picture-973460_1280.webp";

function isValidAvatar(url) {
    return /\.(jpg|jpeg|png|gif)$/.test(url);
}


async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}


function displayUsers(users) {
    const userList = document.getElementById("user-list");
    users.forEach(user => {
        const avatarUrl = isValidAvatar(user.avatar) ? user.avatar : DEFAULT_AVATAR;

        const userCard = document.createElement("div");
        userCard.className = "card";

        userCard.innerHTML = `
            <img src="${user.avatar}" class="card-img-top" alt="Avatar de ${user.name}" onerror="this.src='${DEFAULT_AVATAR}'">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Password:</strong> ${user.password}</p>
            </div>
        `;
        userList.appendChild(userCard);
    });
}

fetchUsers();
