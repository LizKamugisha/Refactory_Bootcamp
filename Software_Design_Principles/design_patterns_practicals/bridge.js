/*
BRIDGE DESIGN PATTERN
----------------------
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes
into two separate hierarchies; such as abstraction and implementation, which can be developed independently of each other.

The main concept applied in this pattern is Composition over Inheritance, and loose coupling of code

Example : a Shape class with various subclasses

Steps:

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
// The "abstraction" defines the interface for the "control"
// part of the two class hierarchies. It maintains a reference
// to an object of the "implementation" hierarchy and delegates
// all of the real work to this object.
var RemoteControl = /** @class */ (function () {
    // Methods
    function RemoteControl(device) {
        this.device = device;
    }
    RemoteControl.prototype.togglePower = function () {
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
            this.device.enable();
        }
    };
    ;
    RemoteControl.prototype.adjustSettings = function () {
        this.device.changeVolume();
        this.device.changeChannel();
    };
    return RemoteControl;
}());
// You can extend classes from the abstraction hierarchy
// independently from device classes.
var AdvancedRemoteControl = /** @class */ (function (_super) {
    __extends(AdvancedRemoteControl, _super);
    function AdvancedRemoteControl(device) {
        return _super.call(this, device) || this;
    }
    AdvancedRemoteControl.prototype.mute = function () {
        console.log('Device is muted...');
        // this.device.setVolume(0)
    };
    return AdvancedRemoteControl;
}(RemoteControl));
// All devices follow the same interface.
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.isEnabled = function () {
        console.log('TV is switching on...');
    };
    Tv.prototype.enable = function () {
        console.log('TV is on!');
    };
    Tv.prototype.disable = function () {
        console.log('TV is off!');
    };
    Tv.prototype.changeVolume = function () {
        console.log('Adjusting TV volume...');
    };
    Tv.prototype.changeChannel = function () {
        console.log('Changing TV channels...');
    };
    return Tv;
}());
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.isEnabled = function () {
        console.log('Radio is switching on...');
    };
    Radio.prototype.enable = function () {
        console.log('Radio is on!');
    };
    Radio.prototype.disable = function () {
        console.log('Radio is off!');
    };
    Radio.prototype.changeVolume = function () {
        console.log('Adjusting Radio volume...');
    };
    Radio.prototype.changeChannel = function () {
        console.log('Changing Radio channels...');
    };
    return Radio;
}());
// Somewhere in client code.
var tv = new Tv();
var tvRemote = new RemoteControl(tv);
tvRemote.togglePower();
tvRemote.adjustSettings();
var radio = new Radio();
var radioRemote = new AdvancedRemoteControl(radio);
radioRemote.togglePower();
radioRemote.adjustSettings();
radioRemote.mute();
