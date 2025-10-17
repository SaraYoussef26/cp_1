const form = document.querySelector("#feedback-form");
const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const commentsInput= document.getElementById("comments");
const submitButton= document.getElementById("submit");
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


form.addEventListener("input", (e)=>{
    if (e.target.id ==="comments"){
        charactersCountDisplay.textContent= `${e.target.value.length} characters`;
        console.log("Characters typed (delegated):", e.target.value.length);

    }
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