Preload = function(game){}

Preload.prototype = {
	preload:function(){
		//MANDA LA CONFIGURACION A TODO
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //NONE por defecto
	    this.scale.pageAlignHorizontally = true; //centrar el juego
		this.scale.pageAlignVertically = true; //centrar el juego
		

		this.load.image("background","assets/images/background.png"); 
		this.load.image("title","assets/images/title.png"); 
		this.load.image("scorebg","assets/images/score-bg.png"); 
		this.load.spritesheet('buttonStart', 'assets/images/button_start.png',401,143,3);
		this.load.spritesheet('monster', 'assets/images/monster-idle.png',103,131,13);
		this.load.spritesheet('candy', 'assets/images/candy.png',82,98,5);
		this.load.image("floor","assets/images/floor.png"); 
		this.load.image("gameover","assets/images/gameover.png"); 
		/* 401x143
		this.load.image("arrowButton","assets/images/arrowButton.png");
		this.load.image("barrel","assets/images/barrel.png");
		this.load.image("gorilla3","assets/images/gorilla3.png");
		this.load.image("ground","assets/images/ground.png");
		this.load.image("platform","assets/images/platform.png");
		//USar sprite del mismo ancho
		this.load.spritesheet('fire_spritesheet', 'assets/images/fire_spritesheet.png', 20, 21, 2,1,1);
		this.load.spritesheet('player_spritesheet', 'assets/images/player_spritesheet.png', 28, 30, 5,1,1);
		//ancho, alto , nro fotograma,
		this.load.text('level','assets/data/level.json');
		*/
	},
	create:function(){
		//this.state.start("Menu");
		this.state.start("Menu");
	}
}