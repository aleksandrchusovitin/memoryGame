const scene = new Phaser.Scene('Game');

scene.preload = function () {
  this.load.image('bg', 'assets/sprites/background.png');
};

scene.create = function () {
  console.log('this.add', this.add);
//   this.add.sprite(
//     this.sys.game.config.width / 2,
//     this.sys.game.config.height / 2,
//     'bg'
//   );
this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
};

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene,
};

const game = new Phaser.Game(config);
