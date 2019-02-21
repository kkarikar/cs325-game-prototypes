"use strict";

window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});

  function preload() {

      game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);
      game.load.tilemap('desert', 'assets/tilemaps/maps/desert.json', null, Phaser.Tilemap.TILED_JSON);
      game.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');
      game.load.image('car', 'assets/sprites/car90.png');
      //  Firefox doesn't support mp3 files, so use ogg
    game.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);

  }

  var sprite;
  var music;

  var map;
  var layer;


  function create() {

      game.stage.backgroundColor = '#2d2d2d';

      //  This will check Group vs. Group collision (bullets vs. veggies!)

      game.physics.startSystem(Phaser.Physics.ARCADE);

      music = game.add.audio('boden');

      music.play();


      map = game.add.tilemap('desert');

      map.addTilesetImage('Desert', 'tiles');
  //    map.addTilesetImage('coins');

      map.setCollisionBetween(1,3);
      map.setCollisionBetween(9,11);
      map.setCollisionBetween(17, 21);
      map.setCollisionBetween(31, 48);


      layer = map.createLayer('Ground');
      //layer1 = map.createLayer('veggies');

      layer.resizeWorld();

      // marker = game.add.graphics();
      // marker.lineStyle(2, 0x00bff3, 1);
      // marker.drawRect(0, 0, 32 * 6, 32 * 6);

      // coins = game.add.group();
      // coins.enableBody = true;
      // coins.physicsBodyType = Phaser.Physics.ARCADE;
      //
      // map.createFromObjects('Object Layer 1', 34, 'coin', 0, true, false, coins);
      //
      // for (var i = 0; i < 50; i++)
      // {
      //     var c = coins.create(game.world.randomX, Math.random() * 500, 'coin', game.rnd.integerInRange(0, 36));
      //     // c.name = 'veg' + i;
      //     // c.body.immovable = true;
      // }

      coin1 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin1);
      coin1.body.immovable = true;
      coin1.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin1.callAll('animations.play', 'animations', 'spin');

      coin2 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin2);
      coin2.body.immovable = true;
      coin2.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin2.callAll('animations.play', 'animations', 'spin');

      coin3 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin3);
      coin3.body.immovable = true;
      coin3.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin3.callAll('animations.play', 'animations', 'spin');

      coin4 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin4);
      coin4.body.immovable = true;
      coin4.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin4.callAll('animations.play', 'animations', 'spin');

      coin5 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin5);
      coin5.body.immovable = true;
      coin5.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin5.callAll('animations.play', 'animations', 'spin');

      coin6 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin6);
      coin6.body.immovable = true;
      coin6.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin6.callAll('animations.play', 'animations', 'spin');

      coin7 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin7);
      coin7.body.immovable = true;
      coin7.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin7.callAll('animations.play', 'animations', 'spin');

      coin8 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin8);
      coin8.body.immovable = true;
      coin8.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin8.callAll('animations.play', 'animations', 'spin');

      coin9 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin9);
      coin9.body.immovable = true;
      coin9.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin9.callAll('animations.play', 'animations', 'spin');

      coin10 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin10);
      coin10.body.immovable = true;
      coin10.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin10.callAll('animations.play', 'animations', 'spin');

      coin11 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin11);
      coin11.body.immovable = true;
      coin11.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin11.callAll('animations.play', 'animations', 'spin');

      coin12 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin12);
      coin12.body.immovable = true;
      coin12.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin12.callAll('animations.play', 'animations', 'spin');

      coin13 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin13);
      coin13.body.immovable = true;
      coin13.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin13.callAll('animations.play', 'animations', 'spin');

      coin14 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin14);
      coin14.body.immovable = true;
      coin14.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin14.callAll('animations.play', 'animations', 'spin');

      coin15 = game.add.sprite(game.world.randomX, Math.random() * 500, 'coin');
      game.physics.arcade.enable(coin15);
      coin15.body.immovable = true;
      coin15.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
      coin15.callAll('animations.play', 'animations', 'spin');

      sprite = game.add.sprite(450, 80, 'car');
      sprite.anchor.setTo(0.5, 0.5);

      game.physics.arcade.enable(sprite);
      game.camera.follow(sprite);

      cursors = game.input.keyboard.createCursorKeys();
  }

  function update() {

      game.physics.arcade.collide(sprite, layer);

      game.physics.arcade.overlap(sprite, coin1, collectCoin1, null, this);
      game.physics.arcade.overlap(sprite, coin2, collectCoin2, null, this);
      game.physics.arcade.overlap(sprite, coin3, collectCoin3, null, this);
      game.physics.arcade.overlap(sprite, coin4, collectCoin4, null, this);
      game.physics.arcade.overlap(sprite, coin5, collectCoin5, null, this);
      game.physics.arcade.overlap(sprite, coin6, collectCoin6, null, this);
      game.physics.arcade.overlap(sprite, coin7, collectCoin7, null, this);
      game.physics.arcade.overlap(sprite, coin8, collectCoin8, null, this);
      game.physics.arcade.overlap(sprite, coin9, collectCoin9, null, this);
      game.physics.arcade.overlap(sprite, coin10, collectCoin10, null, this);
      game.physics.arcade.overlap(sprite, coin11, collectCoin11, null, this);
      game.physics.arcade.overlap(sprite, coin12, collectCoin12, null, this);
      game.physics.arcade.overlap(sprite, coin13, collectCoin13, null, this);
      game.physics.arcade.overlap(sprite, coin14, collectCoin14, null, this);
      game.physics.arcade.overlap(sprite, coin15, collectCoin15, null, this);

      // sprite.body.velocity.x = 0;
      // sprite.body.velocity.y = 0;
      // sprite.body.angularVelocity = 0;

      // if (cursors.left.isDown)
      // {
      //     sprite.body.angularVelocity = -200;
      // }
      // else if (cursors.right.isDown)
      // {
      //     sprite.body.angularVelocity = 200;
      // }
      //
      // if (cursors.up.isDown)
      // {
      //     sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, 300));
      // }

      //  only move when you click
    if (game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(sprite, 400);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(sprite.body, game.input.x, game.input.y))
        {
            sprite.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        sprite.body.velocity.setTo(0, 0);
    }

  //    game.physics.arcade.overlap(sprite, veggies, collisionHandler, null, this);
  }
  //  Called if the bullet hits one of the veg sprites
  function collectCoin1 (car, coin1) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }
  function collectCoin2 (car, coin2) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin3 (car, coin3) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin4 (car, coin4) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin5 (car, coin5) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin6 (car, coin6) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin7 (car, coin7) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin8 (car, coin8) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin9 (car, coin9) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin10 (car, coin10) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin11 (car, coin11) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin12 (car, coin12) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin13 (car, coin13) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin14 (car, coin14) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }function collectCoin15 (car, coin15) {

     coin.kill();
      //  Add and update the score
     score += 10;
     scoreText.text = 'Score: ' + score;

  }

  function changeVolume(pointer) {

    if (pointer.y < 100)
    {
        music.mute = false;
    }
    else if (pointer.y < 300)
    {
        music.volume += 0.1;
    }
    else
    {
        music.volume -= 0.1;
    }

}
function render() {
    game.debug.soundInfo(music, 20, 32);
}

};
