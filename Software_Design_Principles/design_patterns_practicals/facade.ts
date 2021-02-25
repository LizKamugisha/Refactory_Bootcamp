/*
FACADE DESIGN PATTERN
--------------------------

example showing a movie
- dvd player
- speakers / amplifier
- projectpr
- lighting
*/

class DVDplayer {
    turnOn() {
        console.log('DVD player turning on...');
    }
    play() {
        console.log('Movie has started playing...');
    }
    turnOff() {
        console.log('DVFD player turning off...');
    }
}

class Amplifier {
    turnOn() {
        console.log('Amp turning on...');
    }
    setVolume(volume) {
        console.log(`Volume is set to ${volume}`);
    }
    turnOff() {
        console.log('AMP turning off...');
    }
}

class Projector {
    turnOn() {
        console.log('Projector turning on...');
    }
    turnOff() {
        console.log('Projector turning off...');
    }
}

class Ligting {
    dim() {
        console.log('Lights are dimming');
    }
}

// Step 1: Create a facade class
class CinemaFacade {
    // Variables
    private dvdPlayer: DVDplayer;
    private amp: Amplifier;
    private projector: Projector;
    private lights: Ligting;

    constructor(dvdPlayer: DVDplayer, amp: Amplifier, projector: Projector, lights: Ligting) {
        this.dvdPlayer = dvdPlayer;
        this.amp = amp;
        this.projector = projector;
        this.lights = lights;
    }

    // Operations
    watchMovie() {
        this.dvdPlayer.turnOn();
        this.amp.turnOn();
        this.amp.setVolume(20);
        this.projector.turnOn();
        this.lights.dim();
    }
}

let dvdPlayer = new DVDplayer();
let amp = new Amplifier();
let projector = new Projector();
let lights = new Ligting();

// dvdPlayer.turnOn();
// amp.turnOn();
// amp.setVolume(20);
// projector.turnOn();
// lights.dim();

let cinema = new CinemaFacade(dvdPlayer, amp, projector, lights);
cinema.watchMovie();