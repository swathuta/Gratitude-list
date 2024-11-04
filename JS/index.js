document.getElementById("addGratitude").addEventListener("click", function() {
    const gratitudeInput = document.getElementById("gratitude");
    const gratitudeText = gratitudeInput.value.trim();

    if (gratitudeText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = gratitudeText;

        document.getElementById("gratitudeList").appendChild(listItem);

        // Clear input field after adding
        gratitudeInput.value = "";
    }
});