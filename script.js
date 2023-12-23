let BlogsElem = document.getElementById("main");

function AddBlogToList(blog) {
    let NewUser = document.createElement("div");
    NewUser.id = "user";
    let NewAvatar = document.createElement("img");
    NewAvatar.src = "img/oxi1.jpg";
    NewAvatar.id = "avatar";
    NewAvatar.alt = "Аватар пользователя";
    let NewAuthor = document.createElement("div");
    NewAuthor.textContent = "User" + blog["userId"] + " 01.12.2021" + " 14:42";
    NewAuthor.id="author";
    NewUser.append(NewAvatar);
    NewUser.append(NewAuthor);
    let NewDiv = document.createElement("div");
    NewDiv.id = "message";
    let NewH3 = document.createElement("h2");
    let NewP = document.createElement("p");
    NewP.classList.add("blogbody");
    NewH3.textContent = blog["title"];
    NewP.textContent = blog["body"];
    NewDiv.append(NewUser);
    NewDiv.append(NewH3);
    NewDiv.append(NewP);
    BlogsElem.append(NewDiv);
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
}).then((response) => response.json()).then((json) => json.forEach((blog) => AddBlogToList(blog)));

