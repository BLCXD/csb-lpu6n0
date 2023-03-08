/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ProjectLaser extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "obraz-removebg-preview(1)",
        "./ProjectLaser/costumes/obraz-removebg-preview(1).png",
        { x: 150, y: 162 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveStartGame() {
    this.visible = false;
  }
}
