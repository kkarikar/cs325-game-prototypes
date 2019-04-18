"use strict";

GameStates.makeLose = function(game, shared) {

return {
  create: function () {

    var loseLabel = game.add.text(80, 80, 'You Lost...', {font: '50px Arial', fill: '#00FF00'});

    var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to restart', {font: '25px Arial', fill: '#00FF00'});

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.restart, this);

  },

  restart: function () {
    game.state.start('menu');
  }

};
};
