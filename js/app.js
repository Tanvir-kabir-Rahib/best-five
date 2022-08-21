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