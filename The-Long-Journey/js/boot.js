"use strict";

var GameStates = {};

GameStates.makeBoot = function(game) {
  return {
    create: function () {
      game.state.start('load');
    }
  };
};
