// BRIDGE DESIGN PATTERN EXAMPLE - DEVICE REMOTES

// Implementation Interface
interface Device {
    isEnabled(): any;
    enable(): any;
    disable(): any;
    changeVolume(): any;
    changeChannel(): any;
};

// Abstraction Class
class RemoteControl {

    protected device: Device

    constructor(device: Device) {
        this.device = device
    }
    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable()
        } else {
            this.device.enable()
        }
    };
    adjustSettings() {
        this.device.changeVolume();
        this.device.changeChannel();
    }
}

// You can extend classes from the abstraction hierarchy 
// independently from device classes.
class AdvancedRemoteControl extends RemoteControl {
    constructor(device: Device) {
        super(device)
    }
    mute() {
        console.log('Device is muted...')
    }
}

// All devices follow the same interface.
class Tv implements Device {
    isEnabled() {
        console.log('TV is switching on...')
    }
    enable() {
        console.log('TV is on!')
    }
    disable() {
        console.log('TV is off!')
    }
    changeVolume() {
        console.log('Adjusting TV volume...')
    }
    changeChannel() {
        console.log('Changing TV channels...')
    }
}

class Radio implements Device {
    isEnabled() {
        console.log('Radio is switching on...')
    }
    enable() {
        console.log('Radio is on!')
    }
    disable() {
        console.log('Radio is off!')
    }
    changeVolume() {
        console.log('Adjusting Radio volume...')
    }
    changeChannel() {
        console.log('Changing Radio channels...')
    }

}

// Instanciate
let tv = new Tv()
let tvRemote = new RemoteControl(tv)
tvRemote.togglePower();
tvRemote.adjustSettings();

let radio = new Radio()
let radioRemote = new AdvancedRemoteControl(radio)
radioRemote.togglePower();
radioRemote.adjustSettings();
radioRemote.mute();