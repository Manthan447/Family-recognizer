
Webcam.set({
height: 300,
width: 300, 
image_format: 'png',
png_quality: 90
})

Webcam.attach('#webcam')

function Capture(){
    Webcam.snap(function(data_uri){
    document.getElementById('captured').innerHTML= '<img id = "captured_img" src ="'+data_uri+'">'
    })
}

console.log('ML5 version' + ml5.version)
classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q_zUuOrmm/model.json', modelloaded)

function modelloaded(){
    console.log('Model Loaded!')
}


function Results(){
    img = document.getElementById("captured_img")
    classifer.classify(img , gotResults)
}

function gotResults(error , results){
    if(error){
        console.error(error)
    }
    else{
       console.log(results) 
       document.getElementById("object").innerHTML = results[0].label
       document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}