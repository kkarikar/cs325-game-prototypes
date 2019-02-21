"use strict";

GameStates.makeLoad = function(game, shared) {
  return {

  preload: function () {
    var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Courier', fill: '#ffffff'});

    game.load.image('space', 'assets/skies/deep-space.jpg');
    game.load.image('bullet', 'assets/letterC.png');
    game.load.image('ship', 'assets/CarCollectionC.png');
    game.load.image('baddie', 'assets/mailbox.png');

  },

  create: function () {
    game.state.start('menu');
  }
};
};
