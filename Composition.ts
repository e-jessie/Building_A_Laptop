 ////////////Composition

//defining the Laptop class
 class Laptop {
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display
    hardDisk: HardDisk
    bitKind: BitKind
    powerState: boolean = false
    version: number
    os: OperatingSystem;
    

    constructor( keyboards: Keyboard[],
        nic: NetworkInterfaceCard,
        display: Display,
        hd: HardDisk,
        bitKind: BitKind, 
        os: OperatingSystem   
    ) {
        this.keyboard = keyboards;
        this.nic = nic;
        this.screen = display;
        this.hardDisk = hd;
        this.bitKind = bitKind;
        this.powerState = false //the laptop is switched off
        this.version = 10
        this.os = os;
    }

    shutDown() {
        this.powerState = false
        console.log("The Laptop is off")
    }

    switchOn() {
        this.powerState = true
        console.log("The Laptop is on")
    }

    update(version: number) {
        this.version = version
        console.log(`Your laptop has been updated to version ${this.version}`)
    }

 }

 class Keyboard {
    kind: KeyboardKind
    layout: KeyboardLayout

    constructor(kind: KeyboardKind, layout: KeyboardLayout) {
        this.kind = kind;
        this.layout = layout
    }

 }
 
 class NetworkInterfaceCard {
    constructor(public readonly name: string) {
        
    }
}

class Display {
    size: number
    type: DisplayType 

    set displaySize(val: number) {
        this.size = val
    }

    setDisplayType(type: DisplayType) {
        this.type = type;
    }
}

 class HardDisk {
    type: "ssd" | "hdd"
    size: string
 }

 class OperatingSystem {
    kind: OsKind
    Version: string
}


 //////defining the types
type KeyboardKind = "in-built" | "external"
type KeyboardLayout = "Qwerty" | "Qwertz" | "Azerty"
type BitKind = "x64" | "x32" | "x84"
type DisplayType = "amoled" | "lcd" | "oled"
type OsKind = "Linux" | "Mac" | "Windows"





// keyboard instances for the Array of Keyboards
const FirstKeyboard = new Keyboard("in-built", "Qwerty")
const SecondKeyboard = new Keyboard("in-built", "Qwertz")
const ThirdKeyboard = new Keyboard("in-built", "Azerty")
const FourthKeyboard = new Keyboard("external", "Qwerty")
const FifthKeyboard = new Keyboard("external", "Qwertz")
const SixthKeyboard = new Keyboard("external", "Azerty")

//instances of other properties
const nic = new NetworkInterfaceCard("Bluetooth")
const display = new Display()
const hd = new HardDisk()
const os = new OperatingSystem();



display.displaySize = 16
display.setDisplayType("amoled");
hd.size = "2TB"
hd.type = "ssd"
os.kind = "Windows"
os.Version = "22H2"



//intance of the Laptop class 
const  nitLap = new Laptop([FourthKeyboard, SecondKeyboard], nic, display, hd, "x64", os)

console.log(nitLap)
nitLap.switchOn()
nitLap.update(12)
nitLap.shutDown()