/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8Bit1pngRemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "8_bit_1png-removebg-preview",
        "./_8Bit1pngRemovebgPreview/costumes/8_bit_1png-removebg-preview.png",
        { x: 362.5, y: 172 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenKeyLeftArrowPressed() {
    this.x += -8;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.x > 190) {
        yield* this.glide(0.1, -190, 6);
      }
      yield;
    }
  }

  *whenIReceiveStartGame() {
    while (true) {
      this.move(3);
      yield;
    }
  }

  *whenKeyDownArrowPressed() {
    this.y += -8;
  }

  *whenKeyUpArrowPressed() {
    this.y += 8;
  }

  *whenIReceiveStartGame2() {
    this.goto(-190, 6);
    this.visible = true;
  }

  *whenIReceiveStartGame3() {
    while (true) {
      if (this.touching(this.sprites["Robocik"].andClones())) {
        this.broadcast("game over");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Asterioda"].andClones())) {
        this.broadcast("game over");
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    this.visible = false;
  }
}
