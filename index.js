function sendJsonToServer(jsonData) {
  fetch("http://your-flask-server-endpoint", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Failed to send JSON data to server.");
      }
      console.log("JSON data sent successfully.");
  })
  .catch(error => {
      console.error("Error sending JSON data to server:", error);
  });
}


const formFields = Array.from(document.querySelectorAll("#left input"));
const rightContainer = document.getElementById("right");

formFields.forEach((field) => {
  field.addEventListener("input", () => {
      const fieldName = field.parentElement.className;
      jsonObject[fieldName] = field.value;
      updateJsonDisplay();
      sendJsonToServer(jsonObject); // Send JSON data to server on each input change
  });
});

function updateJsonDisplay() {
  rightContainer.innerHTML = JSON.stringify({ ...jsonObject }, null, 2);
}

const jsonObject = {};
updateJsonDisplay();


const downloadLink = document.getElementById("downloadLink");

function downloadJsonFile() {
    const jsonData = JSON.stringify({ ...jsonObject }, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.download = "data.json";
    downloadLink.click();

    // Clean up
    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 100);
}