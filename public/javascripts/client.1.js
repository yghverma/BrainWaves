var socket = io.connect('http://localhost:3000');
var poorSignalLevelvar = 0 ;
var blinkStrengthVar = 0 ;
var attentionMeditationVar;
var attentionVar = 0;
var meditationVar = 0;

socket.on('connect', function (data) {
    socket.emit('join', 'Client connected');

    socket.on('vann', function (msg) {

        var msgJson = JSON.parse(JSON.stringify(msg));     
        /*
        if(msg.hasOwnProperty('poorSignalLevel')){
            if(msgJson.poorSignalLevel >= 200){
                document.body.style.backgroundColor = "#FFB6C1";
                poorSignalLevelvar = "The Poor Connection :( "+ msgJson.poorSignalLevel;
                document.getElementById("poorSignalLevel").innerHTML = poorSignalLevelvar;
                blinkStrengthvar= 0;
                attentionVar = 0 ;
                meditationVar = 0 ;
                var contentVar = document.getElementById("content").innerHTML;
                document.getElementById("content").innerHTML = contentVar;
            }            
        }

        if(msg.hasOwnProperty('blinkStrength')){            
            if(msgJson.blinkStrength>70){
                document.body.style.backgroundColor = "yellow";
            }else if(msgJson.blinkStrength<20){
                document.body.style.backgroundColor = "white";
            }
            blinkStrengthVar = msgJson.blinkStrength
        }

        if(msg.hasOwnProperty('eSense')){            
             if(msgJson.eSense.attention>50){                
                var contentVar = document.getElementById("content").innerHTML.bold();
                document.getElementById("content").innerHTML = contentVar;
            }
            attentionVar = msgJson.eSense.attention ;
            meditationVar = msgJson.eSense.meditation;
        } 

        blinkStrengthvar = "The BlinkStrength value is "+ blinkStrengthVar;
        attentionMeditationVar = "The Attention value is "+ attentionVar + "<br>" +  "The Meditation value is "+ meditationVar +
                                 "<br><br> <b>Instruction<b> Read the below content" +
                                 "<br> If the Attention is greater then 50 the below content will be bold" +
                                 "<br> If blink strength is greater then 70 then Back ground Changes to yellow";
        
        document.getElementById("blinkStrength").innerHTML = blinkStrengthvar;
        document.getElementById("attention").innerHTML = attentionMeditationVar;
        */
    });
});