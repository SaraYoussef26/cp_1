const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const commentsInput= document.getElementById("comments");
const submitButton= document.getElementById("submit");

submitButton.addEventListener("click",(e) => {
    e.preventDefault();
   alert("Form Submitted!");

const entry = document.createElement("div");
entry.textContent= "Feedback received";
document.getElementById("feedback-display").appendChild(entry);
});

commentsInput.addEventListener("input", () =>{
    const count=commentsInput.ariaValueMax.length;
    console.log("Characters typed", count);
})