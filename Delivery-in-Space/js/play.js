"use strict";

GameStates.makePlay = function(game, shared) {
  var ship;
  var aliens;
  var cursors;
  var spaceKey;

  var bullet;
  var bullets;
  var bulletTime = 0;
  var score = 0;
  var scoreText = null;
  var lives;
  var stateText;

return {

  create: function () {

    //  This will run in Canvas mode, so let's gain a little speed and display
        game.renderer.clearBeforeRender = false;
        game.renderer.roundPixels = true;

        //  We need arcade physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //  A spacey background
        game.add.tileSprite(0, 0, game.width, game.height, 'space');

    this.aliens = game.add.group();
    this.aliens.enableBody = true;

    for (var i = 0; i < 50; i++)
    {
        var s = this.aliens.create(game.world.randomX, game.world.randomY, 'baddie');
        s.name = 'alien' + s;
        s.body.collideWorldBounds = true;
        s.body.bounce.setTo(0.8, 0.8);
        s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
      //  s.animations.add('move', [4], 10, true);
    }
        //  Our ships bullets
        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

        //  All 40 of them
        this.bullets.createMultiple(40, 'bullet');
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);

        //this.bullets.animations.add('shoot', [35], 10, true);

        //  Our player ship
        this.sprite = game.add.sprite(300, 300, 'ship');
        this.sprite.anchor.set(0.5);

      //   and its physics settings
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

        this.sprite.body.drag.set(100);
        this.sprite.body.maxVelocity.set(200);

    //    this.sprite.animations.add('player', [9], 10, true);

        //  Game input
        this.cursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

        this.scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

        //  Lives
        lives = game.add.group();
        game.add.text(game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });

        //  Text
    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;

    for (var i = 0; i < 3; i++)
    {
        var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'ship');
        ship.anchor.setTo(0.5, 0.5);
        ship.angle = 90;
        ship.alpha = 0.4;
    }

  },

  update: function () {

    game.physics.arcade.overlap(this.bullets, this.aliens, this.collisionHandler, null, this);
    game.physics.arcade.overlap(this.bullets, this.sprite, this.killSprite, game.state.start('lose'), this);


    if (this.cursors.up.isDown)
    {
        game.physics.arcade.accelerationFromRotation(this.sprite.rotation, 200, this.sprite.body.acceleration);
    }
    else
    {
        this.sprite.body.acceleration.set(0);
    }

    if (this.cursors.left.isDown)
    {
        this.sprite.body.angularVelocity = -300;
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite.body.angularVelocity = 300;
    }
    else
    {
        this.sprite.body.angularVelocity = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        this.fireBullet();
    }

    this.screenWrap(this.sprite);

    this.bullets.forEachExists(this.screenWrap, this);

    if (score == 500)
    {
      game.state.start('win');
    }
  },

  fireBullet: function () {

    if (game.time.now > bulletTime)
    {
        bullet = this.bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(this.sprite.body.x + 60, this.sprite.body.y + 16);
            bullet.lifespan = 2000;
            bullet.rotation = this.sprite.rotation;
            game.physics.arcade.velocityFromRotation(this.sprite.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 50;
        }
    }

},

collisionHandler: function (ship, bullet) {
  ship.kill();
  bullet.kill();
      //  Add and update the score
     score += 10;
     this.scoreText.text = 'Score: ' + score;

},

killSprite: function (player, letter) {
  letter.kill();
  player.kill();
  var winLabel = game.add.text(80, 80, 'You Lose...', {font: '50px Arial', fill: '#00FF00'});
},

  Win: function () {
    game.state.start('win');
  },

  screenWrap: function (sprite) {

      if (sprite.x < 0)
      {
          sprite.x = game.width;
      }
      else if (sprite.x > game.width)
      {
          sprite.x = 0;
      }

      if (sprite.y < 0)
      {
          sprite.y = game.height;
      }
      else if (sprite.y > game.height)
      {
          sprite.y = 0;
      }

  }
};
};
