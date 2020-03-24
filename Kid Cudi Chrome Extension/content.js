//alert users what is happening
alert("WELCOME TO THE JOURNEY TO MOTHER MOON!! #cudfam")

//get all images
var images = document.getElementsByTagName("img")

//iterate through the list of images and call replaceImage
for (var i = 0; i < images.length; i++){
	replaceImage(images[i]);
}//for

//returns a random selected Kid Cudi Image
function selectCudi(){
	var random_num = Math.round(Math.random() * 25)

	if (random_num == 0){
		return chrome.extension.getURL("images/kidcudi1.jpg");
	}//kidcudi1

	else if (random_num == 1){
		return chrome.extension.getURL("images/kidcudi2.jpg");
	}//kidcudi2

	else if (random_num == 2){
		return chrome.extension.getURL("images/kidcudi3.jpg");
	}//kidcudi3

	else if (random_num == 3){
		return chrome.extension.getURL("images/kidcudi4.jpg");
	}//kidcudi4

	else if (random_num == 4){
		return chrome.extension.getURL("images/kidcudi5.jpg");
	}//kidcudi5

	else if (random_num == 5){
		return chrome.extension.getURL("images/kidcudi6.jpg");
	}//kidcudi6

	else if (random_num == 6){
		return chrome.extension.getURL("images/kidcudi7.jpg");
	}//kidcudi7

	else if (random_num == 7){
		return chrome.extension.getURL("images/kidcudi8.jpg");
	}//kidcudi8

	else if (random_num == 8){
		return chrome.extension.getURL("images/kidcudi9.jpg");
	}//kidcudi9

	else if (random_num == 9){
		return chrome.extension.getURL("images/kidcudi10.jpg");
	}//kidcudi10

	else if (random_num == 10){
		return chrome.extension.getURL("images/kidcudi11.jpg");
	}//kidcudi11

	else if (random_num == 11){
		return chrome.extension.getURL("images/kidcudi12.jpg");
	}//kidcudi12

	else if (random_num == 12){
		return chrome.extension.getURL("images/kidcudi13.jpg");
	}//kidcudi13

	else if (random_num == 13){
		return chrome.extension.getURL("images/kidcudi14.jpg");
	}//kidcudi14

	else if (random_num == 14){
		return chrome.extension.getURL("images/kidcudi15.jpg");
	}//kidcudi15

	else if (random_num == 15){
		return chrome.extension.getURL("images/kidcudi16.jpg");
	}//kidcudi16

	else if (random_num == 16){
		return chrome.extension.getURL("images/kidcudi17.jpg");
	}//kidcudi17

	else if (random_num == 17){
		return chrome.extension.getURL("images/kidcudi18.jpg");
	}//kidcudi18

	else if (random_num == 18){
		return chrome.extension.getURL("images/kidcudi19.jpg");
	}//kidcudi19

	else if (random_num == 19){
		return chrome.extension.getURL("images/kidcudi20.jpg");
	}//kidcudi20

	else if (random_num == 20){
		return chrome.extension.getURL("images/kidcudi21.jpg");
	}//kidcudi21

	else if (random_num == 21){
		return chrome.extension.getURL("images/kidcudi22.jpg");
	}//kidcudi22

	else if (random_num == 22){
		return chrome.extension.getURL("images/kidcudi23.jpg");
	}//kidcudi23

	else if (random_num == 23){
		return chrome.extension.getURL("images/kidcudi24.jpg");
	}//kidcudi24

	else if (random_num == 24){
		return chrome.extension.getURL("images/kidcudi25.jpg");
	}//kidcudi25

	else if (random_num == 25){
		return chrome.extension.getURL("images/kidcudi26.jpg");
	}//kidcudi6

}//selectCudi

//replaces the image parameter with a random kid cudi image
function replaceImage(image){

	var new_image = selectCudi();
	image.src = new_image;

}//replaceImage 

//code to emphasize the words "Kid Cudi" or "Scott Mescudi"
//iterate through the contents of the document
var document_content = document.getElementsByTagName("body");
for (var i = 0; i < document_content.length; i++){

	//look at the content here
	var curr_text = document_content[i].innerHTML;

	//split up the current content by tags
	var tokens = curr_text.split(/(<.*?>)/);

	//iterate through and ignore everything that is in a tag
	for (var j = 0; j < tokens.length; j++){

		if (tokens[j].charAt(0) != '<') {
			//emphasize the words "Kid Cudi" or "Scott Mescudi" by replacing with css span
			var cud1 = "Cudi";
			var cudi2 = "Kid Cudi";
			var cud3 = "Scott Mescudi";

			tokens[j] = tokens[j].replace(/\bKid+Cudi\b/gi,'<span class="emphasize">Kid Cudi</span>');
     		tokens[j] = tokens[j].replace(/\bCudi\b/gi,'<span class="emphasize">Cudi</span>');
     		tokens[j] = tokens[j].replace(/\bScott+Mescudi\b/gi,'<span class="emphasize">Scott Mescudi</span>');

		}//if
	}//for

	//re-add everyhting back after
  	document_content[i].innerHTML = tokens.join('');

}//for





