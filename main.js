Webcam.set({
    height:300,
    width:350,
    image_format:"png",
png_quality:"100"
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("results").innerHTML='<img id="take_snap" src="'+data_uri+'">';
    });
}

console.log(ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s4jU1zas7f/model.json",model_loaded);

 function model_loaded(){
     console.log("Hey!!!!!!");
 }
var prediction_1="";

 function speak(){
     var synth=window.speechSynthesis;
     data_1="The prediction is"+prediction_1;
var utter_this=new SpeechSynthesisUtterance(data_1);
synth.speak(utter_this);
 }

 function check(){
     img=document.getElementById("take_snap");
     classifier.classify(img,gotresults);
 }
 function gotresults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("emotion_name1").innerHTML=results[0].label;
    prediction_1=results[0].label;
    speak();
    if(prediction_1=="Thumbs up"){
document.getElementById("emoji_1").innerHTML="&#128077;";
    }
    if(prediction_1=="Super"){
        document.getElementById("emoji_1").innerHTML="&#128076;";
            }
       if(prediction_1=="Yo yo"){
        document.getElementById("emoji_1").innerHTML="&#129304;";
            }     
            if(prediction_1=="Cheez"){
                document.getElementById("emoji_1").innerHTML="&#9996;";
                    }           
}
 }