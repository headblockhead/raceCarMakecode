namespace SpriteKind {
    export const animated = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    car.destroy(effects.fire, 100)
    car_back.destroy(effects.fire, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setVelocity(0, -100)
    car.setImage(assets.image`car_red_up_0`)
    pause(300)
    car.setImage(assets.image`car_red_up_1`)
    pause(400)
    car.setVelocity(0, 200)
    car.setImage(assets.image`car_red_up_0`)
    pause(350)
    car.setImage(assets.image`car_red`)
    car.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    car.destroy(effects.fire, 100)
    car_back.destroy(effects.fire, 200)
})
let car_back: Sprite = null
let car: Sprite = null
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
