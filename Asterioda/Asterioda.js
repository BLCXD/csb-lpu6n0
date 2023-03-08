/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Asterioda extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "obraz-removebg-preview(3)",
        "./Asterioda/costumes/obraz-removebg-preview(3).png",
        { x: 316, y: 190 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *startAsClone() {
    this.visible = true;
    this.x = 220;
    this.x += this.random(-235, 230);
    while (true) {
      this.x += this.random(-30, -15);
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone2() {
    this.y = this.random(160, -30);
  }

  *whenIReceiveStartGame() {
    this.visible = true;
    this.x = 220;
    while (true) {
      this.x += 20;
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveStartGame2() {
    while (true) {
      if (this.touching(this.sprites["_8Bit1pngRemovebgPreview"].andClones())) {
        this.broadcast("game over");
      }
      yield;
    }
  }

  *whenIReceiveStartGame3() {
    while (true) {
      this.createClone();
      yield* this.wait(this.random(1, 2));
      yield;
    }
  }

  *whenIReceiveStartGame4() {
    this.y = this.random(160, -30);
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
