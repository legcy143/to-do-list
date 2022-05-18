console.log("har har mhadev");
showNotes()

// add a note btn 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    // console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="note">
        <h1>Note ${index + 1}</h1>
        <p> ${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)">delete note</button>
        </div>
        `;
    });
    let notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `  <h1 class="nothing">opps there is nothing add some notes...</h1>`;
    }
}


// function to dlete notes 
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
}

// searching function----
let search = document.getElementById("searchTxt")
search.addEventListener("input" ,function(){
    let inputVal = search.value.toLowerCase();
    let boxjss = document.getElementById("boxjss");

    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none"; 

        }
    })
})

//  for dlete all notes 
function dlt(){
    localStorage.clear();
    location.reload()
}



// more feature comes in future===

// change tittle 
// mark as a important
// seprate notes by user
// syns and host to web server
