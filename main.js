Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");



function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri +"'>"
    });
}

function attach_camera(){
    Webcam.attach('#camera');
}

console.log("ml5 version: " + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ghWTVAMkm.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!!");
}