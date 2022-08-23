const selected = document.getElementById("player-list").childElementCount;
function playerExpense(perPlayerCost, selected) {
    const totalPlayerExpense = parseFloat(perPlayerCost) * selected;
    return totalPlayerExpense;
}

function totalCost(perPlayerEx, managerCost, coachCost, selected) {
    const playerCost = playerExpense(perPlayerEx, selected);
    const total = playerCost + parseInt(managerCost) + parseInt(coachCost);
    return total;
}

document.getElementById("total-calculation").addEventListener("click", function () {
    const perPlayer = document.getElementById("per-player").value;
    const managerCost = document.getElementById("manager").value;
    const coachCost = document.getElementById("coach").value;
    const cost = totalCost(perPlayer, managerCost, coachCost, selected);
    document.getElementById("total-cost").innerText = cost;
})
document.getElementById("player-cost-calculation").addEventListener("click", function () {
    const perPlayer = document.getElementById("per-player").value;
    const playerCost = playerExpense(perPlayer, selected);
    document.getElementById("player-cost").innerText = playerCost;
})

document.getElementById("player-container").addEventListener("click", function(event){
    const selectedPlayerList = document.getElementById("player-list");
    if(selectedPlayerList.childElementCount === 5){
        const selectionButton = document.getElementsByClassName("player-btn")
        for (x of selectionButton){
            x.setAttribute("data-bs-toggle", "modal");
            x.setAttribute("data-bs-target", "#exampleModal");
        }
    };
})     
    

document.getElementById("cavani").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li")
    li.innerText = name;
    const playerList = document.getElementById("player-list")
    playerList.appendChild(li)
    const selectedButton = document.getElementById("cavani")
    selectedButton.classList.add("disabled")
})
document.getElementById("bale").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li")
    li.innerText = name;
    const playerList = document.getElementById("player-list")
    playerList.appendChild(li)
    const selectedButton = document.getElementById("bale")
    selectedButton.classList.add("disabled")
})
document.getElementById("luka").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li")
    li.innerText = name;
    const playerList = document.getElementById("player-list")
    playerList.appendChild(li)
    const selectedButton = document.getElementById("luka")
    selectedButton.classList.add("disabled")
})
document.getElementById("marcelo").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li")
    li.innerText = name;
    const playerList = document.getElementById("player-list")
    playerList.appendChild(li)
    const selectedButton = document.getElementById("marcelo")
    selectedButton.classList.add("disabled")
})
document.getElementById("mbappe").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li")
    li.innerText = name;
    const playerList = document.getElementById("player-list")
    playerList.appendChild(li)
    const selectedButton = document.getElementById("mbappe")
    selectedButton.classList.add("disabled")
})
document.getElementById("messi").addEventListener("click", function (event) {
    const name = event.target.parentNode.children[0].innerText;
    const li = document.createElement("li")
    li.innerText = name;
    const playerList = document.getElementById("player-list")
    playerList.appendChild(li)
    const selectedButton = document.getElementById("messi")
    selectedButton.classList.add("disabled")
})