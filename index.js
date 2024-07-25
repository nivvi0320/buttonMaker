let BackgroundColorE1 = document.getElementById("bgColorInput");
let FontColorE1 = document.getElementById("fontColorInput");
let FontSizeE1 = document.getElementById("fontSizeInput");
let FontWeightE1 = document.getElementById("fontWeightInput");
let PaddingE1 = document.getElementById("paddingInput");
let BorderRadiusE1 = document.getElementById("borderRadiusInput");
let customButtonE1 = document.getElementById("customButton");

function applybtn() {
    let BgColorvalue = BackgroundColorE1.value;
    let FontColorvalue = FontColorE1.value;
    let FontSizevalue = FontSizeE1.value;
    let FontWeightvalue = FontWeightE1.value;
    let Paddingvalue = PaddingE1.value;
    let BorderRadiusvalue = BorderRadiusE1.value;
    customButtonE1.style.backgroundColor = BgColorvalue;
    customButtonE1.style.color = FontColorvalue;
    customButtonE1.style.fontSize = FontSizevalue;
    customButtonE1.style.fontWeight = FontWeightvalue;
    customButtonE1.style.padding = Paddingvalue;
    customButtonE1.style.borderRadius = BorderRadiusvalue;

}
