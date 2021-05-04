
Webcam.set(
    {
        width:170,
        height:170,
        image_format:"png",
        png_quality:90

    }
);
Webcam.attach("#camera");

function capture()
{
    Webcam.snap(function(click){
        document.getElementById("result").innerHTML ="<img id='cam' src='"+click+"'>";
    });
}

console.log("ML5 VER", ml5.version);
var imgClass = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wgTi8Nmaf/model.json",fun)

function fun()
{
    console.log("Model Loaded");
}

function utter()

{
    var UAPI = window.speechSynthesis;

    FamM = "The family member is"+  Familymember;

    var utter = new SpeechSynthesisUtterance(FamM);
    
    UAPI.speak(utter);

}

function identify()
{
    img = document.getElementById("cam");
    imgClass.Classify(img, func);
}

function func(err,res)
{
    if (err)
    {
        console.error(error)
    }
    else
    {
        console.log(res);
        document.getElementById("object").res[0].label;
        document.getElementById("accuracy").innerHTML = res[0].label;
    }
}