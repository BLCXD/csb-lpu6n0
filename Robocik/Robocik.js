/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Robocik extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "obraz-removebg-preview(5)",
        "./Robocik/costumes/obraz-removebg-preview(5).png",
        { x: 391, y: 157.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
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
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "@robocik ukryj" },
        this.whenIReceiveRobocikUkryj
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartGame() {
    this.goto(180, 6);
    while (true) {
      yield* this.wait(1);
      this.y += this.random(5, 15);
      if (this.touching(this.sprites["_8Bit1pngRemovebgPreview"].andClones())) {
        this.stage.vars.undefined += -1;
      }
      if (this.touching(this.sprites["Piocisk8bit"].andClones())) {
        yield* this.wait(1);
        this.goto(170, 6);
      }
      yield;
    }
  }

  *startAsClone() {
    this.goto(180, 6);
    while (true) {
      yield* this.wait(1);
      this.y += this.random(5, 15);
      if (this.touching(this.sprites["_8Bit1pngRemovebgPreview"].andClones())) {
        this.stage.vars.undefined += -1;
      }
      if (this.touching(this.sprites["Piocisk8bit"].andClones())) {
        this.visible = false;
        yield* this.wait(1);
        this.goto(170, 6);
      }
      yield;
    }
  }

  *whenIReceiveStartGame2() {
    while (true) {
      yield* this.wait(2);
      this.createClone();
      yield;
    }
  }

  *whenIReceiveStartGame3() {
    while (true) {
      this.move(-2);
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      this.move(-2);
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveStartGame4() {
    this.visible = true;
  }

  *whenIReceiveStartGame5() {
    while (true) {
      if (this.touching(this.sprites["_8Bit1pngRemovebgPreview"].andClones())) {
        this.broadcast("game over");
      }
      yield;
    }
  }

  *whenIReceiveRobocikUkryj() {
    this.visible = false;
    this.goto(280, 6);
    this.visible = true;
  }
}
