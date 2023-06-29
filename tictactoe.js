//variables del juego
let cuadrados = Array.from(document.querySelectorAll(".cuadrado"));
let x = "x";
let o = "O";
let valor = 0;
let juegoplayer = "P1";
let cuadrado2 = document.getElementsByClassName("cuadrado");
let btn_reinicio = document.getElementById("reiniciar");
let px = document.getElementById("x");
let pO = document.getElementById("O");

cuadrados.forEach((cuadrado) => {
  cuadrado.addEventListener("click", () => {
    if (juegoplayer === "ya termino el juego") return;
    if (cuadrado.textContent !== "") return;
    cuadrado.textContent = x;
    let findeJuego = ValidarGanador("x");
    console.log("findeJuego", findeJuego);
    if (!findeJuego) {
      const lista_filtrada = cuadrados.filter(filtro);
      let Ia = Math.floor(Math.random() * lista_filtrada.length);

      px.style.display = "none";
      pO.style.display = "block";
      setTimeout(() => {
        lista_filtrada[Ia].textContent = o;
        ValidarGanador("O");
        px.style.display = "block";
        pO.style.display = "none";
      }, 500);
    } else {
      return;
    }
  });
});

function filtro(cuadrado) {
  return cuadrado.textContent == "";
}

function ValidarGanador(jugador) {
  const Quienganó = ganador();
  //console.log("que imprime", Quienganó);

  if (Array.isArray(Quienganó)) {
    puntos(jugador, Quienganó);
    juegoplayer = "ya termino el juego";
  }

  if (Quienganó === "Empate") {
    console.log("Empate");
    alert("Empate");
  }
  return Array.isArray(Quienganó) || Quienganó === "Empate";
}

//funcion ganador
//revisar si ya alguien gano
function ganador() {
  let tablero = Array.from(cuadrados).map((cuadrado) => cuadrado.textContent);
  let arrayGanador = [];

  // Ganar en horizontal
  for (let i = 0; i < 9; i += 3) {
    if (
      tablero[i] &&
      tablero[i] === tablero[i + 1] &&
      tablero[i] === tablero[i + 2]
    ) {
      arrayGanador = [i, i + 1, i + 2];
    }
  }

  // Ganar en vertical
  for (let i = 0; i < 3; i++) {
    if (
      tablero[i] &&
      tablero[i] === tablero[i + 3] &&
      tablero[i] === tablero[i + 6]
    ) {
      arrayGanador = [i, i + 3, i + 6];
    }
  }

  // Ganar en diagonales
  if (tablero[0] && tablero[0] === tablero[4] && tablero[0] === tablero[8]) {
    arrayGanador = [0, 4, 8];
  }
  if (tablero[2] && tablero[2] === tablero[4] && tablero[2] === tablero[6]) {
    arrayGanador = [2, 4, 6];
  }
  console.log(tablero);
  if (arrayGanador.length > 0) {
    return arrayGanador;
  } else if (!tablero.includes("")) {
    return "Empate";
  } else {
    return false;
  }
}

function puntos(jugador, Quienganó) {
  console.log("Gano", jugador, Quienganó);
  setTimeout(() => {
    alert(`Ganaron las ${jugador}`);
  }, 200);

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
