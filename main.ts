OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Nivel de luz:")
    OLED.writeNum(Environment.ReadLightIntensity(AnalogPin.P2))
})
