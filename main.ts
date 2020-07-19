let light_level = 0
input.onButtonPressed(Button.A, function () {
    light_level = 1
    for (let index = 0; index < 11; index++) {
        pins.analogWritePin(AnalogPin.P0, light_level - 1)
        basic.pause(100)
        light_level = light_level * 2
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
	
})
