import Phaser from 'phaser';
import BootScene from './scenes/Boot/BootScene';

const config = {
  type: Phaser.AUTO,
  title: 'Game',
  width: 800,
  height: 600,
  url: 'http://yourgame.com',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [BootScene]
};

class AppGame extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

const game = new AppGame(config);
