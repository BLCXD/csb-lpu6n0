/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];

    this.vars.zycie = 8;
  }

  *whenIReceiveStartGame() {
    this.vars.zycie = 8;
  }

  *whenGreenFlagClicked() {
    this.watchers.zycie.visible = false;
  }

  *whenIReceiveGameOver() {
    this.stage.costume = "gAME OVER";
  }
}
