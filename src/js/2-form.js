const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
form.addEventListener("input", handlerInput);

function handlerInput(event) {
    const target = event.target;
    if(target.name === "email" || target.name === "message") {
        formData[target.name] = target.value;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
}

const loadData = localStorage.getItem("feedback-form-state");
if(loadData) {
    try {
        const parseData = JSON.parse(loadData);
        
        formData.email = parseData.email?.trim() || "";
        formData.message = parseData.message?.trim() || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    } catch(error) { 
        console.log( `Помилка парсингу:`, error )}

    
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if(email ==="" || message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
}

