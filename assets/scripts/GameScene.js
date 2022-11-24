class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('bg', 'assets/sprites/background.png');
    this.load.image('card', 'assets/sprites/card.png');
  }

  create() {
    this.createBackground();
    this.createCards();
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
  }

  createCards() {
    this.cards = [];

    const cardPositions = this.getCardPositions();

    for (const cardPosition of cardPositions) {
      this.cards.push(new Card(this, cardPosition));
    }
  }

  getCardPositions() {
    const positions = [];

    const cardTexture = this.textures.get('card').getSourceImage();

    const CARDS_GAP = 5;
    const CARDS_COUNT_IN_ROW = 5;
    const CARDS_COUNT_IN_COL = 2;
    const CARD_WIDTH = cardTexture.width + CARDS_GAP;
    const CARD_HEIGHT = cardTexture.height + CARDS_GAP;

    const CARDS_OFFSET_X = (this.sys.game.config.width - CARD_WIDTH * CARDS_COUNT_IN_ROW) / 2;
    const CARDS_OFFSET_Y = (this.sys.game.config.height - CARD_HEIGHT * CARDS_COUNT_IN_COL) / 2;

    for (let row = 0; row < config.rows; row += 1) {
      for (let col = 0; col < config.cols; col += 1) {
        positions.push({ x: CARDS_OFFSET_X + col * CARD_WIDTH, y: CARDS_OFFSET_Y + row * CARD_HEIGHT });
      }
    }

    return positions;
  }
}
