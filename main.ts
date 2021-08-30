pins.servoWritePin(AnalogPin.P1, 90)
while (pins.digitalReadPin(DigitalPin.P0) == 0) {
    basic.pause(100)
}
pins.servoWritePin(AnalogPin.P1, 180)
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(160, music.beat(BeatFraction.Double))
