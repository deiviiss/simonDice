/*
#  ·················
#     ··________
#       /./·___/
#    __/./__··)·
#   /___/____/··
#  ·················
*/

const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

class Juego {
  constructor() {
    this.inicializar();
  }

  inicializar() {
    btnEmpezar.classList.add('hide');
  }
}

function iniciarJuego() {
  console.log('El juego va a iniciar');
  var juego = new Juego();
}
