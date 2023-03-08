/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostium1", "./Start/costumes/kostium1.svg", {
        x: 171,
        y: -126.5
      })
    ];

    this.sounds = [new Sound("pop", "./Start/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.costume = "image";
  }

  *whenthisspriteclicked() {
    this.broadcast("start game");
  }

  *whenIReceiveStartGame() {
    this.visible = false;
    this.stage.costume = "image (2)";
  }
}
