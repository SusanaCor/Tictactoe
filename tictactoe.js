//variables del juego
let cuadrados = Array.from(document.querySelectorAll(".cuadrado"));
let x = "x";
let o = "O";
let valor = 0;
let juegoplayer = "P1";
let cuadrado2 = document.getElementsByClassName("cuadrado");
let btn_reinicio = document.getElementById("reiniciar");


cuadrados.forEach((cuadrado) => {
  cuadrado.addEventListener("click", () => {
    if (juegoplayer === "ya termino el juego") return;
    if (cuadrado.textContent !== "") return;
    cuadrado.textContent = x;
    if (Empatar()) {
      alert("empate");
    }
    const lista_filtrada = cuadrados.filter(prueba);
    let Ia = Math.floor(Math.random() * lista_filtrada.length);
    lista_filtrada[Ia].textContent = o;

    //funcion para cuando empata
    const Quienganó = ganador();
    if (typeof Quienganó === "object") {
      puntos(Quienganó);
      return;
    }

    console.log(Quienganó);
    if (Quienganó === Empatar) {
      console.log("Empatar");
      alert("Empatar");
    }

    function prueba(cuadrados) {
      if (cuadrados.textContent == "") {
        return true;
      } else {
        return false;
      }
    }
  });
});
//funcion ganador
//revisar si ya alguien gano
function ganador() {
  let tablero = Array.from(cuadrados).map((cuadrado) => cuadrado.textContent);
  console.log(tablero);

  //ganar en horizontal
  for (let i = 0; i < 9; i += 3) {
    if (
      tablero[i] &&
      tablero[i] === tablero[i + 1] &&
      tablero[i] === tablero[i + 2]
    ) {
      return [i, +i + 1, i + 2];
    }
  }

  //ganar en vertical
  for (let i = 0; i < 3; i++) {
    if (
      tablero[i] &&
      tablero[i] === tablero[i + 3] &&
      tablero[i] === tablero[i + 6]
    ) {
      return [i, +i + 3, i + 6];
    }
  }
  //ganar en transversales
  if (tablero[0] && tablero[0] === tablero[4] && tablero[0] === tablero[8]) {
    return ([0, 4, 8]);
  }
  if (tablero[2] && tablero[2] === tablero[4] && tablero[2] === tablero[6]) {
    return [2, 4, 6];
  }

  if (tablero.includes("")) return false;

  return "empate";
}

function puntos(Quienganó) {
  console.log("Ganó", Quienganó);
  juegoplayer = "ya termino el juego";
  Quienganó.forEach((posicion) => {
    cuadrados[posicion].classList.toggle("Ganó", true);
  });
}

function Empatar() {
  let empatar = true;
  for (let cells of cuadrados) {
    if (cells.textContent == "") {
      empatar = false;
    }
  }
  return empatar;
}

btn_reinicio.addEventListener("click", reinicio);

function reinicio() {
  window.location.reload();
}

//funcion modal



// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// window.onload = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }