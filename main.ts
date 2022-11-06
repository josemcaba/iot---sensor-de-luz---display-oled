OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Nivel de luz:")
    OLED.writeNumNewLine(Environment.ReadLightIntensity(AnalogPin.P2))
})
