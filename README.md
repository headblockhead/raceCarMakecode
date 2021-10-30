namespace SpriteKind {
    export const animated = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (started == 1) {
        music.knock.play()
        music.thump.play()
        music.smallCrash.play()
        music.zapped.play()
        car.destroy(effects.fire, 100)
        car_back.destroy(effects.fire, 200)
        light.showAnimation(light.theaterChaseAnimation, 100)
        light.setAll(0xff0000)
        music.playMelody("E - C5 - G F E C ", 240)
        game.splash("GAME OVER!", "Try again?")
        game.reset()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (started == 1) {
        music.jumpUp.play()
        car.setVelocity(0, -75)
        car.setImage(assets.image`car_red_up_0`)
        pause(100)
        car.setImage(assets.image`car_red_up_1`)
        pause(200)
        car.setVelocity(0, 75)
        car.setImage(assets.image`car_red_up_0`)
        pause(300)
        car.setVelocity(0, 0)
        car.setImage(assets.image`car_red`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let car_back: Sprite = null
let car: Sprite = null
let started = 0
started = 0
music.playMelody("E - C5 - - G - F ", 240)
light.showAnimation(light.cometAnimation, 1)
light.setBrightness(20)
scene.setBackgroundImage(assets.image`sunset_retro`)
let road_mark = sprites.create(assets.image`line_road`, SpriteKind.animated)
road_mark.setPosition(80, 92)
animation.runImageAnimation(
road_mark,
assets.animation`road_anim`,
50,
true
)
car = sprites.create(assets.image`car_red`, SpriteKind.Player)
car.setPosition(80, 100)
car_back = sprites.create(assets.image`blank`, SpriteKind.animated)
car_back.setPosition(80, 110)
car_back.startEffect(effects.spray)
controller.moveSprite(car, 100, 0)
car.setStayInScreen(true)
controller.moveSprite(car_back, 100, 0)
car_back.setStayInScreen(true)
started = 1
