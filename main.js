var speechrecognition= window.webkitSpeechRecognition;
recogntion= new speechrecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recogntion.start();
}
recogntion.onresult= function (event) {
    console.log(event);
    storeword= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= storeword;
    console.log(storeword);
    if (storeword=="take my selfie") {
        speak();
    }
}
 function speak() {
     synth= window.speechSynthesis;
     speakdata= "Takeing Your Selfie In 5 Seconds"
     utterthis= new SpeechSynthesisUtterance(speakdata);
     synth.speak(utterthis);
     Webcam.attach(camera);
     setTimeout(function() {
         takemysnapshot();
         save();
     },5000);
 }
 camera= document.getElementById("camera");
 Webcam.set({
    width: 360,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function takemysnapshot() {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML= "<img id='resultimg' src=" + data_uri + ">";
     });
 }
 
 function save() {
     link= document.getElementById("link");
     img= document.getElementById("resultimg").src;
     link.href= img;
     link.click();
 }