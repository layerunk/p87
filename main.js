var can = new fabric.Canvas("myCanvas");
var keyPressed = "";
var block_y=50;
var block_x=1;

var block_image_width = 200;
var block_image_height = 530;

var block_image_object= "";

function new_image(get_image)
{
	console.log("ok this works")
	fabric.Image.fromURL(get_image , function(Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);

		block_image_object.set({
			top:block_y,
			width:block_x
		});
		can.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_x = 100;
		new_image("rr1.png");
		block_image_object = "rr1.png";
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 300;
		new_image("gr.png");
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =500;
		new_image("yr.png");
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 700;
		new_image("pr.png");
		console.log("b");
	}
	if(keyPressed == '66')
	{
		block_x = 900;
		new_image("br.png");
		console.log("p");
	}
	
}

