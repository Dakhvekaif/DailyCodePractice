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

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("cofeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});
// challenge 4

document.getElementById("addNewItems").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// challenge 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// challenge 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Coding Challenges");
});

// challenge 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("you Selected : " + event.target.textContent);
  }
});

// challenge 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is : ${feedback}`;
  });

// challenge 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// challenge 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let textDescription = document.getElementById("textDescription");
    textDescription.classList.add("highlight");
  });
