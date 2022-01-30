//Hide contactBox when load page
function hidecontactBox() {
    document.getElementById("contactBox").style.visibility = 'hidden';
};

//Create js for contact box show/hide
var labelTexts = ["Enter your email", "Enter your phone"];
var inputTexts = ["type = 'email' name = 'email'", "type = 'text' name = 'phone'"];
var labelOpenTag = "<label>";
var labelCloseTag = "</label>";
var inputOpenTag = "<input ";
var inputCloseTag = ">";
var contactBoxList = [];

for (i=0; i<=1; i++) {
    contactBoxList.push(labelOpenTag + labelTexts[i] + labelCloseTag + inputOpenTag + inputTexts[i] + inputCloseTag)
}
//console.log(contactBoxList);

//Need your help here, how to call the option and so that when click can pop up the content.
//Thanks!
var option = document.getElementById("contactMethod");
option.addEventListener("click", evaluateOption());

function evaluateOption() {
    optionvalue = document.getElementById("contactMethod").value;
    if (option == 'email') {
        enterContext(0);
    } else if (option == 'phone') {
        enterContext(1);
    }
};

function enterContext(i) {
    document.getElementById("contactBox").innerHTML = contactBoxList[i];
};

enterContext();





