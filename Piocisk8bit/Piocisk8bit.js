/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Piocisk8bit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Piocisk8bit/costumes/kostium1.svg", {
        x: 311,
        y: 172
      })
    ];

    this.sounds = [new Sound("pop", "./Piocisk8bit/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame3
      )
    ];
  }

  *whenIReceiveStartGame() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += 1;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -1;
      }
      if (this.keyPressed("left arrow")) {
        this.x += 1;
      }
      if (this.keyPressed("right arrow")) {
        this.x += -1;
      }
      if (this.x == 282) {
        yield* this.glide(0.1, -190, 6);
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.visible = false;
      while (!this.mouse.down) {
        yield;
      }
      this.visible = true;
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      yield* this.glide(0.2, this.mouse.x, this.mouse.y);
      this.visible = false;
      this.goto(this.sprites[undefined].x, this.sprites[undefined].y);
      yield;
    }
  }

  *whenIReceiveStartGame2() {
    while (true) {
      this.move(1);
      yield;
    }
  }

  *whenIReceiveStartGame3() {
    while (true) {
      if (this.touching(this.sprites["Robocik"].andClones())) {
        this.broadcast("@robocik ukryj");
      }
      yield;
    }
  }
}
