let guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}

document.querySelector("body").addEventListener("click", function() {
    // console.log(event.target, event.currentTarget);
    console.log("Event target id: ", event.target.id);

    let eventId = event.target.id;
    if(eventId === "make-large") {
      toggleClass("large");
    } else if(eventId === "add-border") {
      toggleClass("bordered");
    } else if(eventId === "add-color") {
      toggleClass("blue");
    } else if(eventId === "add-rounding") {
      toggleClass("rounded");
    }
})

// document.getElementById("add-color").addEventListener("click", function() {
//   toggleClass("blue")
// })

// document.getElementById("make-large").addEventListener("click", function() {
//     toggleClass("large")
// })

// document.getElementById("add-border").addEventListener("click", function() {
//     toggleClass("bordered")
// })

// document.getElementById("add-rounding").addEventListener("click", function() {
//     toggleClass("rounded")
// })
