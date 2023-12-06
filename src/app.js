/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarCard();
  console.log("Hello Rigo from the console!");
};

function generarCard() {
  //Generar el Icono Random
  let iconos = ["♦", "♥", "♠", "♣"];
  let icono = Math.floor(Math.random() * 4);
  let iconosIcono = iconos[icono];
  console.log(iconosIcono);
  let elem = document.querySelector(".elem1");
  elem.innerHTML = iconosIcono;
  let elem3 = document.querySelector(".elem3");
  elem3.innerHTML = iconosIcono;

  //Condicion para colocar el color
  if (iconosIcono == "♥" || iconosIcono == "♦") {
    elem.style.color = "red";
    elem3.style.color = "red";
  } else {
    elem.style.color = "black";
    elem3.style.color = "black";
  }

  //Generar el numero Random
  let number = [
    "A",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberRam = Math.floor(Math.random() * 12 + 1);
  let numberRandom = number[numberRam];
  console.log(numberRandom);
  let numero = document.querySelector(".elem2");
  numero.innerHTML = numberRandom;
}

let selectDiv = document.querySelector(".Mycard");
selectDiv.addEventListener("click", generarCard);
