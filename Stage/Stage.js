/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tło1", "./Stage/costumes/tło1.svg", { x: 240, y: 180 }),
      new Costume("image (2)", "./Stage/costumes/image (2).png", {
        x: 480,
        y: 359
      }),
      new Costume("gAME OVER", "./Stage/costumes/gAME OVER.png", {
        x: 480,
        y: 359
      }),
      new Costume("image", "./Stage/costumes/image.png", { x: 480, y: 353 }),
      new Costume("Xy-grid", "./Stage/costumes/Xy-grid.png", { x: 480, y: 360 })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound(
        "8-Bit Minigame 1 Soundtrack  Brawl Stars",
        "./Stage/sounds/8-Bit Minigame 1 Soundtrack  Brawl Stars.wav"
      ),
      new Sound(
        "8-Bit Minigame 1 Soundtrack  Brawl Stars2",
        "./Stage/sounds/8-Bit Minigame 1 Soundtrack  Brawl Stars2.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.mojaZmienna = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone(
        "8-Bit Minigame 1 Soundtrack  Brawl Stars"
      );
      yield;
    }
  }
}
