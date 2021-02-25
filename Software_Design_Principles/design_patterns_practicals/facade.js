/*
FACADE DESIGN PATTERN
--------------------------

example showing a movie
- dvd player
- speakers / amplifier
- projectpr
- lighting
*/
var DVDplayer = /** @class */ (function () {
    function DVDplayer() {
    }
    DVDplayer.prototype.turnOn = function () {
        console.log('DVD player turning on...');
    };
    DVDplayer.prototype.play = function () {
        console.log('Movie has started playing...');
    };
    DVDplayer.prototype.turnOff = function () {
        console.log('DVFD player turning off...');
    };
    return DVDplayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.turnOn = function () {
        console.log('Amp turning on...');
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log("Volume is set to " + volume);
    };
    Amplifier.prototype.turnOff = function () {
        console.log('AMP turning off...');
    };
    return Amplifier;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.turnOn = function () {
        console.log('Projector turning on...');
    };
    Projector.prototype.turnOff = function () {
        console.log('Projector turning off...');
    };
    return Projector;
}());
var Ligting = /** @class */ (function () {
    function Ligting() {
    }
    Ligting.prototype.dim = function () {
        console.log('Lights are dimming');
    };
    return Ligting;
}());
// Step 1: Create a facade class
var CinemaFacade = /** @class */ (function () {
    function CinemaFacade(dvdPlayer, amp, projector, lights) {
        this.dvdPlayer = dvdPlayer;
        this.amp = amp;
        this.projector = projector;
        this.lights = lights;
    }
    // Operations
    CinemaFacade.prototype.watchMovie = function () {
        this.dvdPlayer.turnOn();
        this.amp.turnOn();
        this.amp.setVolume(20);
        this.projector.turnOn();
        this.lights.dim();
    };
    return CinemaFacade;
}());
var dvdPlayer = new DVDplayer();
var amp = new Amplifier();
var projector = new Projector();
var lights = new Ligting();
// dvdPlayer.turnOn();
// amp.turnOn();
// amp.setVolume(20);
// projector.turnOn();
// lights.dim();
var cinema = new CinemaFacade(dvdPlayer, amp, projector, lights);
cinema.watchMovie();
