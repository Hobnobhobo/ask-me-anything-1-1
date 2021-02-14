input.onButtonPressed(Button.A, function () {
    radio.sendString("Y")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Are You good ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("N")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("No Comment")
})
radio.setGroup(162)
basic.forever(function () {
	
})
