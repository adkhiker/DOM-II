rocket();


function rocket() {
  blocksDiv = document.querySelector(".blocks");
  blocks = document.querySelectorAll(".block");
  Array.from(blocks).map(block => {
    block.addEventListener("mousedown", function (e) {
      block.classList.add("move-box");
      console.log("mousedown");
    });
    block.addEventListener("mouseup", function (e) {
      blocksDiv.prepend(e.target);
    });
  });
}

