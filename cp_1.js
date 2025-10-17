const form = document.querySelector("#feedback-form");
const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const commentsInput= document.getElementById("comments");
const submitButton= document.getElementById("submit-btn");
const charactersCountDisplay= document.getElementById("character-count");
const feedbackDisplay= document.getElementById("feedback-display");


submitButton.addEventListener("click",(e) => {
    e.preventDefault();
    const name= nameInput.value.trim();
    const email= emailInput.value.trim();
    const comments= commentsInput.value.trim();

if(!name || !email || !comments) {
    alert ("All fields required.");
        return;
}
const entry = document.createElement("div");
entry.textContent = `${name} (${email}): ${comments}`;
feedbackDisplay.appendChild(entry);

nameInput.value="";
emailInput.value="";
commentsInput.value="";
charactersCountDisplay.textContent="0 characters";
alert("Form Submitted!");

});

function updateTotalChars() {
    const total = nameInput.value.length + emailInput.value.length + commentsInput.value.length;
    charactersCountDisplay.textContent = `${total} characters`;
}

[nameInput, emailInput, commentsInput].forEach(field => {
    field.addEventListener("input", updateTotalChars);
});


form.addEventListener("mouseover",(e) =>{
    if(["name", "email", "comments"].includes(e.target.id)){
        showTooltip(e.target);
        e.stopPropagation();
    }
});
form.addEventListener("mouseout",(e) =>{
    if(["name", "email", "comments"].includes(e.target.id)){
        hideTooltip(e.target);
        e.stopPropagation();
    }
});
form.addEventListener("click", (e) => {
    if (e.target.matches("input, textarea")){
        console.log("Interacting with:", e.target.id);
        e.stopPropagation();
    }
});

function showTooltip(field) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";

    if (field.id ==="name") tooltip.textContent= "Your full name";
    if (field.id ==="email") tooltip.textContent= "Your email address";
    if (field.id ==="comments") tooltip.textContent= "Write your comments here";

    tooltip.style.position = "absolute";
    tooltip.style.top = field.offsetTop-25+"px";
    tooltip.style.left = field.offsetLeft+"px";

    document.body.appendChild(tooltip);

}

function hideTooltip(field) {
    const tooltip= document.querySelector(".tooltip");
    if(tooltip) tooltip.remove();
}