// 1) Select the section with an id of container without using querySelector.
let containerElement1 = document.getElementById("container");
console.log(container1);

// 2) Select the section with an id of container using querySelector.
let containerElement2 = document.querySelector("#container");
console.log(container2);

// 3) Select all of the list items with a class of "second".
let second = document.querySelectorAll(".scond");
console.log(second);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
let third = document.querySelector("ol").getElementsByClassName("third");
console.log(third);

// 5) Give the section with an id of container the text "Hello!".
let text = document.getElementById("container").textContent = "Hello!";

// 6) Add the class main to the div with a class of footer.
let main = document.querySelector(".footer");
main.classList.add("main")

// 7) Remove the class main on the div with a class of footer.
main.classList.remove("main")

// 8) Create a new li element.
let li =  document.createElement("li");

// 9) Give the li the text "four".
li.textContent = "four";

// 10) Append the li to the ul element.
let ul = document.querySelector("ul");
ul.appendChild(li);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let list = document.querySelector("ol").getElementsByTagName("li");
for(let i of list){
    i.style = "background-color:green";
}

// 13) Remove the div with a class of footer.
let footer = document.querySelector(".footer");
footer.remove();