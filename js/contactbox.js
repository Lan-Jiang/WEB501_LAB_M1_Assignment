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

//Not idea way, seeking TA's help on improving the code and method;
function evaluateOption() {
    var select = document.getElementById('contactMethod');
    var option = select.options[select.selectedIndex];
    optionvalue = option.value;
    if (optionvalue == 'email') {
        document.getElementById("contactBox").style.visibility = 'visible';
        enterContext(0);
    } else if (optionvalue == 'phone') {
        document.getElementById("contactBox").style.visibility = 'visible';
        enterContext(1);
    } else if (optionvalue == 'selectone') {
        document.getElementById("selectone").style.display= 'none';
        document.getElementById("contactBox").style.visibility = 'hidden'; // hidden box when click Select One;
    }
};
evaluateOption();

// //Hide contactBox when load page
// function hidecontactBox() {
//     document.getElementById("contactBox").style.visibility = 'hidden';
// };
// hidecontactBox();

function enterContext(i) {
    document.getElementById("contactBox").innerHTML = contactBoxList[i];
};

enterContext();








