const formFields = Array.from(document.querySelectorAll("#left input"));
const rightContainer = document.getElementById("right");

formFields.forEach((field) => {
  field.addEventListener("input", () => {
    const fieldName = field.parentElement.className;
    jsonObject[fieldName] = field.value;
    updateJsonDisplay();
  });
});

function updateJsonDisplay() {
  rightContainer.innerHTML = JSON.stringify({ ...jsonObject }, null, 4);
}

const jsonObject = {};
updateJsonDisplay();