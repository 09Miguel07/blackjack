/**
 * @param {Number}  puntosMinimos que la computadora necesita para ganar}
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * @param {Array<string>} deck 
 */
import { pedirCarta, valorCarta, crearCartaHtml } from "./";

export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error ('Puntos HTML son necesarios');
    if (!divCartasComputadora) throw new Error ('divCartasComputadora es necesario');
    


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}