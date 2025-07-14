// challenge 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The Paragraph is changes!!!";
    console.log(paragraph);
  });

// challenge 2

document
  .getElementById("HighlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });


  // challenge 3

  document.getElementById("")