camera = document.getElementById("camera");
Webcam.attach("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});


function takeSnapshot() {
    {
        Webcam.snap(function (data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
        });
    }
}

console.log ("ml5version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iVyHnYPMf/model.json",modelLoaded);
function modelLoaded(){
console.log("modelloaded");
}

function check() {
    console.log("hello");
    img = document.getElementById("selfie_image");
    classifier.classify(img, gotResult);
    }

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}