const addStuffForm = document.querySelector("#add-stuff");
const stuffInput = document.querySelector("#add-stuff-input");
const stuffList = document.querySelector("#stuff");

addStuffForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newStuff = stuffInput.value;

    if(newStuff){
        const stuffListItem = document.createElement("li");
        stuffListItem.textContent = newStuff;
        stuffList.append(stuffListItem)
    }
});