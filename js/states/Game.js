Game = function(game){}

Game.prototype = { //propiedad del objecto Game (propio de JS )
	create:function(){

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 1000; // 1000 pixels por segundo

        this.background = this.add.sprite(0,0,'background');
        
        this.floor = this.add.sprite(0,770,'floor');
        this.physics.arcade.enable(this.floor)
        this.floor.body.allowGravity = false;
        this.floor.body.immovable = true; // estatico

        this.scoreBg = this.add.sprite(0,0,'scorebg');
        this.score = 0;

        this.scoreText = this.game.add.text(150,20,' '+this.score);
        this.scoreText.fill = "#FFFFFF";

        this.lives = 5;

        this.candys = this.game.add.group();
        this.candys.enableBody = true;

        this.candyFrequency = 4 * 1000;
        this.candySpeed = 120;
        this.elapseTime= 0;

        this.createPlayer(this);
    },
    createPlayer:function(){
        this.player= this.game.add.sprite(0,0,"monster");
        this.player.anchor.setTo(0.5);
        this.player.x = this.game.world.centerX;
        this.player.y = this.game.world.centerY;

        this.physics.arcade.enable(this.player) //segunda forma cuando no es un grupo
        this.player.body.collideWorldBounds = true;//el orden es importante
        
        this.player.animations.add("walking",[0,1,2,3,4,5,6,7,8,9,10,11,12],10,true)
        this.player.animations.play("walking");
        this.keys = this.input.keyboard.createCursorKeys();

        this.platerActions = {left:false,right:false,up:false};
    },
    update:function(){
        if (this.lives==0) {
            this.state.start('GameOver');
        }

        this.elapseTime += this.time.elapsed;
        if (this.elapseTime >= this.candyFrequency) {
            this.elapseTime= 0;
            this.createCandy();
        }

        this.candys.forEachAlive(function(element){

            if (element.y >= 650) {
                element.kill() //inactiva el renderear para despues
                this.lives-=1;
                console.log(this.lives);
            }
        },this);

        if(this.physics.arcade.collide(this.player,this.candys)){
            this.score+=2;
        }
        

        this.physics.arcade.collide(this.player,this.floor); //collide //objeto objeto

        this.player.body.velocity.x = 0;

        if ((this.keys.up.isDown || this.platerActions.up )&& this.player.body.touching.down) {
            this.player.body.velocity.y = -600;
        }
        
        if(this.keys.left.isDown || this.platerActions.left){
            this.player.body.velocity.x = -200;
            this.player.animations.play("walking");
            //this.player.scale.setTo(1);
            this.player.scale.setTo(-1,1);
        }else if (this.keys.right.isDown || this.platerActions.right) {
            this.player.body.velocity.x = 200;
            this.player.animations.play("walking");
            
            this.player.scale.setTo(1);
        }else{
            this.player.frame = 3;
        }


        this.scoreText.setText(' '+this.score);
    },
    createCandy:function(){
        let candy = this.candys.getFirstDead();
        let number_sprite = this.game.rnd.integerInRange(0,5)
        let y_random = this.game.rnd.integerInRange(0,640)
        if(!candy){
            candy = this.game.add.sprite(y_random,0 ,'candy',number_sprite);
            this.candys.add(candy);
        }else{
            //console.log("revive");
            candy.reset(20,90);
        }

        candy.body.velocity.x = 100;
        //candy.body.collideWorldBounds = true;
        //candy.body.bounce.setTo(1,0.5);
    }
}
