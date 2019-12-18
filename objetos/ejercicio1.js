// 1. ¿Cómo utilizarías las clases de ES6 para mejorar el siguiente código?
class Cancion {
  constructor (titulo, nombreBanda, duracion, album) {
    this.titulo = titulo;
    this.nombreBanda = nombreBanda;
    this.duracion = duracion;
    this.album = album;
  }
}
const cancion1 = new Cancion('Good Times, Bad Times', 'Led Zeppelin', 167, 'Led Zeppelin');
const cancion2 = new Cancion('Babe I\'m Gonna Leave You', 'Led Zeppelin', 403, 'Led Zeppelin');

const playlist = [cancion1, cancion2];

console.log(playlist);