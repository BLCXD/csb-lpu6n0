/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Duszek1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("aby.....", "./Duszek1/costumes/aby......svg", {
        x: 213.75,
        y: 103.25
      })
    ];

    this.sounds = [new Sound("pop", "./Duszek1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveGameOver() {
    this.visible = true;
  }
}
