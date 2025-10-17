const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const commentsInput= document.getElementById("comments");
const submitButton= document.getElementById("submit");
const charactersCountDisplay= document.getElementById("character-count");


submitButton.addEventListener("click",(e) => {
    e.preventDefault();
   alert("Form Submitted!");

const entry = document.createElement("div");
entry.textContent= "Feedback received";
document.getElementById("feedback-display").appendChild(entry);
});

commentsInput.addEventListener("input", () =>{
    const count=commentsInput.value.length;
    console.log("Characters typed", count);
    charactersCountDisplay.textContent= `${count} characters`;
});

field.addEventListener("mouseover", () => showTooltip());
field.addEventListener("mouseout", () => hideTooltip());
