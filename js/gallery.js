//  Start photo gallery js

// var photoList = ["dog1", "dog2", "dog3", "dog4", "dog5"];
var captionTexts = ["Vince, 16 months", "Teddy, 3 months", "Victor, 5 months",
                        "Uni, 9 months", "Meatball, 12 months"
                        ,"Meme, 3 years" , "Flur, 1 year", "Lia, 14 months", "Cath, 9 months", "CC, 16 months  " ];
var descTexts = ["Vince likes treats", "Teddy likes play", "Victor likes hugging", "Uni likes sea", "Meatball likes sunshine"
                        ,"Meme likes wool ball", "Flur likes cans", "Lia likes snow", "Cath likes apple", "CC likes napping"];
var photos = [];
var fileNames = [];
var imagefileNames = [];
var imageList = [];
var image;
var captions =[];
var descriptions = [];
var openList = "<li class='photo'>";
var closeList = "</li>";
var openCaptionTag = "<p class='caption'>";
var closeCaptionTag = "</p>";
var titleTexts = ["Dog - Vince", "Dog - Teddy", "Dog - Victor", "Dog - Uni", "Dog - Meatball"
                    , "Cat - Meme", "Cat - Flur", "Cat - Lia", "Cat - Cath", "Cat - CC"];
var infoTexts = ["Vince is active and he likes the red color, he likes the sea."
                    , "Teddy is brave and he likes the music."
                    , "Victor is little but he is eager to grow up."
                    , "Uni is yellow and he like taking photos."
                    , "Meatball is white and is flury."
                    , "Meme is good at posing and she is grey."
                    , "Flur is naughty and she like play."
                    , "Lia is orange and she likes taking naps."
                    , "Cath is white and she has beautiful eyes."
                    , "CC is cautious and she is calm."];
var closeinfoBox = "Click to close";
var openDescTag = "<p class='description' onClick='showinfoBox(";
var openDescClose = ")'>";
var closeDescTag = "</p>";

//Create a loop to create 10 images
for (var i=0; i<10; i++) {
    if (i>=0 && i <=4) {
        fileNames.push("dog" + [i+1]);
        photos.push("<img src = 'images/" +fileNames[i]+ ".jpeg' alt='" + "dog" +[i+1] + "'>");//  
        captions.push(openCaptionTag + captionTexts[i] + closeCaptionTag);
        descriptions.push(openDescTag + [i] + openDescClose + descTexts[i] + closeDescTag);  
        image = openList + descriptions[i] + photos[i] + captions[i] + closeList;        
        imageList.push(image);
    } else if (i>=5 && i<10) {
        fileNames.push("cat" + [i-4]);
        photos.push("<img src = 'images/" +fileNames[i]+ ".jpeg' alt='" + "cat" +[i-4] + "'>");//  
        captions.push(openCaptionTag + captionTexts[i] + closeCaptionTag);
        descriptions.push(openDescTag + [i] + openDescClose + descTexts[i] + closeDescTag);  
        image = openList + descriptions[i] + photos[i] + captions[i] + closeList;        
        imageList.push(image);
    }
};
//console.log(imageList[0]);

//Display 10 images from array
document.getElementById("photos").innerHTML = imageList.join(" ");

//  End photo gallery js

//  Start infoBox-->
function showinfoBox(i) {
    document.getElementById("infoBox").style.visibility = 'visible';
    document.getElementById("title").innerHTML = titleTexts[i];
    document.getElementById("info").innerHTML = infoTexts[i];
    document.getElementById("closeInfo").innerHTML = closeinfoBox;
};

//
var closeInfo = document.getElementById("closeInfo");
closeInfo.addEventListener("click", hideinfoBox);

function hideinfoBox() {
    document.getElementById("infoBox").style.visibility = 'hidden';
};
//  End infoBox