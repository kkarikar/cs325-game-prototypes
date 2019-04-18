"use strict";

window.onload = function() {
  var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );

  var shared = {};

  game.state.add('boot', GameStates.makeBoot(game));
  game.state.add('load', GameStates.makeLoad(game, shared));
  game.state.add('menu', GameStates.makeMenu(game, shared));
  game.state.add('play', GameStates.makePlay(game, shared));
  game.state.add('win', GameStates.makeWin(game, shared));
  game.state.add('lose', GameStates.makeLose(game, shared));

  game.state.start('boot');

};
