function playerExpense(perPlayerCost, selected) {
    const totalPlayerExpense = parseFloat(perPlayerCost) * parseFloat(selected);
    return totalPlayerExpense;
}

function totalCost(playerCost, managerCost, coachCost) {
    console.log("hello")
    const total = parseFloat(playerCost) + parseFloat(managerCost) + parseFloat(coachCost);
    return total;
}

document.getElementById("total-calculation").addEventListener("click", function () {
    const playerCost = document.getElementById("player-cost").innerText;
    const managerCost = document.getElementById("manager").value;
    const coachCost = document.getElementById("coach").value;
    const cost = totalCost(playerCost, managerCost, coachCost);
    const costTotal = document.getElementById("total-cost")
    costTotal.innerText = cost;
})

document.getElementById("player-cost-calculation").addEventListener("click", function () {
    const selected = document.getElementById("player-list").childElementCount;
    console.log(selected)
    const perPlayer = document.getElementById("per-player").value;
    const playerCost = playerExpense(perPlayer, selected);
    document.getElementById("player-cost").innerText = playerCost;
})

document.getElementById("player-container").addEventListener("click", function (event) {
    const selectedPlayerList = document.getElementById("player-list");
    if (selectedPlayerList.childElementCount === 5) {
        const selectionButton = document.getElementsByClassName("player-btn");
        for (x of selectionButton) {
            x.setAttribute("data-bs-toggle", "modal");
            x.setAttribute("data-bs-target", "#exampleModal");
        }
    };
});


document.getElementById("cavani").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = name;
    const playerList = document.getElementById("player-list");
    if (playerList.childElementCount < 5) {
        playerList.appendChild(li);
        const selectedButton = document.getElementById("cavani");
        selectedButton.classList.add("disabled");
        selectedButton.innerText = "Selected";
    };
});
document.getElementById("bale").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = name;
    const playerList = document.getElementById("player-list");
    if (playerList.childElementCount < 5) {
        playerList.appendChild(li);
        const selectedButton = document.getElementById("bale");
        selectedButton.classList.add("disabled");
        selectedButton.innerText = "Selected";
    };
})
document.getElementById("luka").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = name;
    const playerList = document.getElementById("player-list");
    if (playerList.childElementCount < 5) {
        playerList.appendChild(li);
        const selectedButton = document.getElementById("luka");
        selectedButton.classList.add("disabled");
        selectedButton.innerText = "Selected";
    };
});
document.getElementById("marcelo").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = name;
    const playerList = document.getElementById("player-list");
    if (playerList.childElementCount < 5) {
        playerList.appendChild(li);
        const selectedButton = document.getElementById("marcelo");
        selectedButton.classList.add("disabled");
        selectedButton.innerText = "Selected";
    };
});
document.getElementById("mbappe").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = name;
    const playerList = document.getElementById("player-list");
    if (playerList.childElementCount < 5) {
        playerList.appendChild(li);
        const selectedButton = document.getElementById("mbappe");
        selectedButton.classList.add("disabled");
        selectedButton.innerText = "Selected";
    };
});
document.getElementById("messi").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li");
    li.innerText = name;
    const playerList = document.getElementById("player-list");
    if (playerList.childElementCount < 5) {
        playerList.appendChild(li)
        const selectedButton = document.getElementById("messi");
        selectedButton.classList.add("disabled");
        selectedButton.innerText = "Selected";
    };
});