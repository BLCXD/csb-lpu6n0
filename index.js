import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Start from "./Start/Start.js";
import Piocisk8bit from "./Piocisk8bit/Piocisk8bit.js";
import ProjectLaser from "./ProjectLaser/ProjectLaser.js";
import GameOverRemovebgPreview from "./GameOverRemovebgPreview/GameOverRemovebgPreview.js";
import Asterioda from "./Asterioda/Asterioda.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import _8Bit1pngRemovebgPreview from "./_8Bit1pngRemovebgPreview/_8Bit1pngRemovebgPreview.js";
import Star from "./Star/Star.js";
import Robocik from "./Robocik/Robocik.js";
import Duszek1 from "./Duszek1/Duszek1.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Start: new Start({
    x: 39,
    y: 25,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Piocisk8bit: new Piocisk8bit({
    x: 295,
    y: 197,
    direction: 68.32148600740814,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 7
  }),
  ProjectLaser: new ProjectLaser({
    x: -49,
    y: -11,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  GameOverRemovebgPreview: new GameOverRemovebgPreview({
    x: 28,
    y: -20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Asterioda: new Asterioda({
    x: 300,
    y: 18,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 4
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  _8Bit1pngRemovebgPreview: new _8Bit1pngRemovebgPreview({
    x: -141.28000000000003,
    y: 6,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 6
  }),
  Star: new Star({
    x: 33.41176470588236,
    y: 57,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 3
  }),
  Robocik: new Robocik({
    x: 192,
    y: 21,
    direction: 90,
    costumeNumber: 1,
    size: 28.999999999999996,
    visible: false,
    layerOrder: 9
  }),
  Duszek1: new Duszek1({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
