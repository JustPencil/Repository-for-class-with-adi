function AddTask(){
    var eingabeFeld = document.getElementById("myInput").value;
    var textNode = document.createTextNode(eingabeFeld);
    var makeNewItem = document.createElement("li");

    makeNewItem.appendChild(textNode);

if(document.getElementById("myInput").value != '') {

    document.getElementById("myUL").appendChild(makeNewItem);

    document.getElementById("myInput").value = '';

}}

const gradientGenerator = () => {
    let rgbaMagic = "rgba(";
    for(let start = 0; start < 3; start++){
        rgbaMagic += Math.floor(Math.random() * 255) + ",";
    }
    return rgbaMagic
}

const lightsOn = () => {
    let toFistVariable = gradientGenerator();
    let toSecondVariable = gradientGenerator();
    document.documentElement.style.setProperty("--GradientColor1" , toFistVariable + "1)");
    document.documentElement.style.setProperty("--GradientColor2" , toSecondVariable + "1)");
}

setInterval(lightsOn,100)

function DeleteLastItem(){
    var select = document.getElementById('myUL');

    select.removeChild(select.lastChild);
}