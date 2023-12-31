function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");

	world_start.setVolume(0.05);
	mario_jump.setVolume(0.05);
	mario_kick.setVolume(0.05);
	mario_die.setVolume(0.05);
	mario_coin.setVolume(0.05);
	mario_gameover.setVolume(0.05);
	setSprites();
	MarioAnimation();
}



function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
    video.size(800, 400);
	video.parent('gameConsole');

	poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded () {
	console.log('Modelo carregado!');
	}
	
	function gotPoses (results)
{
  if (results.length > 0)
    {
		console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
    }
}

function draw() {
	game()
}






