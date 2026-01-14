const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll(".btn");

let tabIndex = 0;
let btnIndex = 0;

function updateTabs() {
    tabs.forEach(t => t.classList.remove("active"));
    tabs[tabIndex].classList.add("active");
}

function updateButtons() {
    buttons.forEach(b => b.classList.remove("active"));
    buttons[btnIndex].classList.add("active");
}

document.addEventListener("keydown", e => {
    if (e.key === "q" || e.key === "Q") {
        tabIndex = (tabIndex - 1 + tabs.length) % tabs.length;
        updateTabs();
    }

    if (e.key === "e" || e.key === "E") {
        tabIndex = (tabIndex + 1) % tabs.length;
        updateTabs();
    }

    if (e.key === "ArrowDown") {
        btnIndex = (btnIndex + 1) % buttons.length;
        updateButtons();
    }

    if (e.key === "ArrowUp") {
        btnIndex = (btnIndex - 1 + buttons.length) % buttons.length;
        updateButtons();
    }

    if (e.key === "Enter") {
        const action = buttons[btnIndex].dataset.action;
        fetch(`https://alpha/${action}`, {
            method: "POST",
            body: "{}"
        });
    }
});
