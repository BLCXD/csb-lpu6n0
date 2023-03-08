/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("star", "./Star/costumes/star.svg", { x: 22, y: 23 })
    ];

    this.sounds = [new Sound("collect", "./Star/sounds/collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.y = 157;
    while (true) {
      this.y += -20;
      yield* this.wait(1);
      if (this.touching("edge")) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.createClone();
      yield* this.wait(this.random(1, 2));
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.y = 157;
    this.x = this.random(-235, 230);
    while (true) {
      this.y += this.random(-30, -15);
      yield* this.wait(1);
      if (this.touching("edge")) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
