const getBtn = document.querySelector("#js-btn");
const delBtn = document.querySelector(".delete");
const addBtn = document.querySelector(".add");
const updBtn = document.querySelector(".update");
const tBody = document.querySelector("#js-tbody");
let name = document.querySelector('#name');
let score = document.querySelector('#score');
let idToDelete = document.querySelector("#id-to-delete");
let idToUpdate = document.querySelector("#id-to-update");
let nameUpd = document.querySelector('#name-to-update');
let scoreUpd = document.querySelector('#score-to-update');

const updateView = users => {
  let htmlString = "";
  users.map(user => {
    htmlString += `<tr class="row">
			<td>${user.id}</td>
			<td class=${user.id}>${user.name}</td>
			<td>${user.score}</td>
		</tr>`;
  });
  tBody.innerHTML = htmlString;
};
const getUsers = () =>
	fetch("http://fecore.net.ua/rest/")
	.then(response => {
		if (response.ok) return response.json();
		throw new Error(`Error fetching data`);
	})
	.then(data =>
		updateView(data)
	)
	.catch(error => {
      console.error("Error: ", error);
    });


const addUser = (e) => {
	e.preventDefault();
	
	fetch("http://fecore.net.ua/rest/?action=1&name=" + name.value + "&score=" + score.value, {
		method: "POST",
		headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
		body: JSON.stringify({"name": name.value, "score": score.value})
	})
	.then(response => {
		if (response.ok) {
			alert(`You've added a new User!`);
			return response.json();
		}
		throw new Error(`Error fetching data`);
	})
	.catch(error => {
		console.error("Error: ", error);
	});
	name.value = "";
	score.value = "";
}

const updateUser = (e) => {
	e.preventDefault();
	fetch("http://fecore.net.ua/rest/?action=2&id=" + idToUpdate.value + "&name=" + nameUpd.value + "&score=" + scoreUpd.value, {
		method: "POST",
		headers: new Headers(),
		body: JSON.stringify({"name":nameUpd.value, "score":scoreUpd.value})
	})
	.then(response => {
		if (response.ok) {
			alert(`You've updated User's data!`);
			return response.json();
		}
		throw new Error(`Error fetching data`);
	})
	.catch(error => {
		console.error("Error: ", error);
	});
	idToUpdate.value = "";
	nameUpd.value = "";
	scoreUpd.value = "";
}

const removeUser = (e) => {
	e.preventDefault();
	fetch("http://fecore.net.ua/rest/?action=3&id=" + idToDelete.value, {
		method: "POST"
	})
	.then(response => {
		if (response.ok) {
			alert(`You've deleted a User (ID - ${idToDelete.value})!`);
			return response.json();
		}
		throw new Error(`Error deleting data`);
	})
	.catch(error => {
		console.error("Error: ", error);  
	});
	idToDelete.value = "";
}

getBtn.addEventListener("click", getUsers);
addBtn.addEventListener("click", addUser);
delBtn.addEventListener("click", removeUser);
updBtn.addEventListener("click", updateUser);
