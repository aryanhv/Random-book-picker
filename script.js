let array = [];
//📍function add--------------------------------
function add() {
  let desc = document.getElementById("inputtext").value.trim();
  if (desc === "") {
    alert("Please enter a description before saving.");
    return; //Checks if the trimmed input is empty. If it is, it shows an alert and stops the function using return.
  } else {
    array.push(desc);
    console.log(array);
    document.getElementById("inputtext").value = ""; // clears the inputfield
  }
  //----------------------------------------
  const bookcards = document.getElementById("savedbooks");
  //----------------------------------------
  const divEntry = document.createElement("div");
  divEntry.classList.add("addedcards");
  //------------------------------------------
  const trashcan = document.createElement("div");
  trashcan.classList.add("trashcan");
  trashcan.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
 `;
  //-----------------------------------------------
  const paragraph = document.createElement("p");
  paragraph.classList.add("cardsname");
  paragraph.textContent = desc;

  //----------------------------------------------
  trashcan.addEventListener("click", () => {
    divEntry.remove();
    const index = array.indexOf(desc);
    if (index !== -1) {
      array.splice(index, 1);
      console.log(array);
    }
  });
  //trashcan.addEventListener("click", function() {
  //divEntry.remove(); // removes this specific card
  //});

  //----------------------------------------------
  divEntry.appendChild(paragraph);
  divEntry.appendChild(trashcan);
  bookcards.appendChild(divEntry);
  //-----------------------------------------------
}
//📍function reset-------------------------------
function reset() {
  array = [];
  console.log(array);
  // document.querySelector("#savedbooks").innerHTML = "";
  document.getElementById("savedbooks").innerHTML = "";
  document.getElementById("inputtext").value = "";
  document.getElementById("randombook").textContent = "";
}
//📍function randomPicker------------------------
function randomPicker() {
  let i = Math.floor(Math.random() * array.length);
  let randomItemis = array[i];
  document.getElementById("randombook").textContent = randomItemis;
}
