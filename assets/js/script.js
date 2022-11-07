// const rows = 3;
// const columns = 5;

// let currTile;
// let otherTile;  

// let turns = 0;

// // let imgOrder = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15" ]; //name of the pictures
// let imgOrder = ["1", "2", "3", "5", "4", "6", "7", "8", "9", "10", "12", "11", "13", "14", "15"];

// window.onload = function() {
//     for (let r=0; r < rows; r++) {
//         for (let c=0; c < columns; c++) {

//             //<img id="0-0" src="1.jpg">
//             let tile = document.createElement("img");
//             tile.id = r.toString() + "-" + c.toString();
//             tile.src = imgOrder.shift() + ".jpg";
                                   

//             //DRAG FUNCTIONALITY EventListener
//             tile.addEventListener("dragstart", dragStart);  //click an image to drag
//             tile.addEventListener("dragover", dragOver);    //moving image around while clicked
//             tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
//             tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
//             tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
//             tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles



//             document.getElementById("board").append(tile);

           
//         }
//     }
// }

// function dragStart() {
//     currTile = this; //this refers to the img tile being dragged
// }

// function dragOver(e) {
//     e.preventDefault();
// }

// function dragEnter(e) {
//     e.preventDefault();
// }

// function dragLeave() {

// }

// function dragDrop() {
//     otherTile = this; //this refers to the img tile being dropped on
// }

// function dragEnd() {
//     if (!otherTile.src.includes("blank.jpg")) {
//         return;
//     }
 
//     let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
//     let r = parseInt(currCoords[0]);
//     let c = parseInt(currCoords[1]);

//     let otherCoords = otherTile.id.split("-");
//     let r2 = parseInt(otherCoords[0]);
//     let c2 = parseInt(otherCoords[1]);

//     let moveLeft = r == r2 && c2 == c-1;
//     let moveRight = r == r2 && c2 == c+1;

//     let moveUp = c == c2 && r2 == r-1;
//     let moveDown = c == c2 && r2 == r+1;

//     let isAdjacent = moveLeft || moveRight || moveUp || moveDown;


//    if (isAdjacent){
//         let currImg = currTile.src;
//         let otherImg = otherTile.src;

//         currTile.src = otherImg;
//         otherTile.src = currImg;

//         turns +=1;
//         document.getElementById("turns").innerText=turns;
//    }

// }

const rows = 3;
const columns = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            //<img>
            let tile = document.createElement("img");
            tile.src = "./assets/images/blank.jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./assets/images/" + pieces[i] + ".jpg";

        //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

        document.getElementById("pieces").append(tile);
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}

const modalI = document.querySelector('#success-modal');
modalI.style.display = 'block';

// script.onFinished = function() {
//   console.log("Show good job dialog");

  setTimeout(() => {
    modalI.classList.add('open');
    this.el.classList.add('blur-it')
  }, 500);
  modalI.querySelector('.trigger').onclick = () => {
    modalI.classList.remove('open');
    this.el.classList.remove('blur-it');
  }

};

