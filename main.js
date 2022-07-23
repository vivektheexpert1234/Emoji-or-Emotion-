//https://teachablemachine.withgoogle.com/models/g8D0Z1xv6/
Webcam.set({
    height:300,
    width:300,
    Image_format:"png",
    png_quality:90
})
Webcam.attach("#camera")
function Takepicture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>"
    })
}
console.log("ml5_version",ml5.version)
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/g8D0Z1xv6/model.json",modelloaded)
    function modelloaded()
    {
        console.log("model loaded")
    }
    var prediction1=""
    var prediction2=""
    function speak(){
        var Synth=window.speechSynthesis
        speakData1="The first prediction is "+prediction1
        speakData2=" The second prediction is "+prediction2
        var utterthis=new SpeechSynthesisUtterance(speakData1+speakData2)
        Synth.speak(utterthis)
    }
   function check(){
    img=document.getElementById("image")
    classifier.classify(img,gotResults)
   } 
   function gotResults(error,results)
   {
if (error) {
    console.error(error)
} else {
console.log(results)
document.getElementById("emotion1").innerHTML=results[0].label
document.getElementById("emotion2").innerHTML=results[1].label
prediction1=results[0].label
prediction2=results[1].label
speak()
if(prediction1=="Crying"){
    document.getElementById("emoji1").innerHTML="&#128557;"
}
if(prediction1=="Happy"){
    document.getElementById("emoji1").innerHTML="&#128522;"
}
if(prediction1=="Surprise"){
    document.getElementById("emoji1").innerHTML="&#128561;"
}
if(prediction1=="Sad"){
    document.getElementById("emoji1").innerHTML="&#128546;"
}
if(prediction1=="Angry"){
    document.getElementById("emoji1").innerHTML="&#128545;"
}
if(prediction2=="Crying"){
    document.getElementById("emoji2").innerHTML="&#128557;"
}
if(prediction2=="Happy"){
    document.getElementById("emoji2").innerHTML="&#128522;"
}
if(prediction2=="Surprise"){
    document.getElementById("emoji2").innerHTML="&#128561;"
}
if(prediction2=="Sad"){
    document.getElementById("emoji2").innerHTML="&#128546;"
}
if(prediction2=="Angry"){
    document.getElementById("emoji2").innerHTML="&#128545;"
}
}
   }