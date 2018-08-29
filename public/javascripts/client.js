// var socket = io.connect('http://localhost:3000');

// socket.on('connect', function (data) {
//     socket.emit('join', 'Client connected');

//     socket.on('vann', function (msg) {
//         if(msg.hasOwnProperty('blinkStrength')){
//             document.getElementById('message')
//             .appendChild(document.createTextNode(JSON.stringify(msg)));
//         }
//     });
// });

var socket = io.connect('http://localhost:3000');
socket.on('connect', function (data) {
    socket.emit('join', 'Client connected');

    socket.on('vann', function (msg) {
        var msgJson = JSON.parse(JSON.stringify(msg));             
        if(msg.hasOwnProperty('poorSignalLevel')){
            if(msgJson.poorSignalLevel >= 200){
                document.body.style.backgroundColor = "#FFB6C1";
                document.getElementById("message").innerHTML = "Device is disconnected";
                if(null != document.getElementById("attentionDetails")){
                    document.getElementById("attentionDetails").innerHTML=  "If the Attention value reaches above threadhold page will turn blue else it will remain white once device is connected";
                }
            }else{
                document.getElementById("message").innerHTML = "Connected";
                if(null != document.getElementById("attentionDetails")){
                    document.getElementById("attentionDetails").innerHTML=  "If the Attention value reaches above threadhold page will turn blue else it will remain white once device is connected";
                }
            }            
        }
        if(msg.hasOwnProperty('blinkStrength')){            
            if(msgJson.blinkStrength>70){
                window.scrollBy(0,100); 
                if(null != document.getElementById("blinkStrength")){
                    document.getElementById("blinkStrength").innerHTML = "Blink Strength "+msgJson.blinkStrength;
                }
            }else{
                if(null != document.getElementById("blinkStrength")){
                    document.getElementById("blinkStrength").innerHTML = "Blink Strength "+msgJson.blinkStrength;
                }
            }
        }

        if(msg.hasOwnProperty('eSense')){    
            if(msgJson.eSense.attention>40 && msgJson.eSense.attention <50){                
                document.body.style.backgroundColor = "#FFFF66";
                if(null != document.getElementById("attention")){
                    document.getElementById("attention").innerHTML = "Attention :"+msgJson.eSense.attention;
                }
            }else if(msgJson.eSense.attention>50 && msgJson.eSense.attention <60){
                document.body.style.backgroundColor = "#FFFF33";
                if(null != document.getElementById("attention")){
                    document.getElementById("attention").innerHTML = "Attention :"+msgJson.eSense.attention;
                }
            }else if(msgJson.eSense.attention>60 && msgJson.eSense.attention <70){
                document.body.style.backgroundColor = "yellow";
                if(null != document.getElementById("attention")){
                    document.getElementById("attention").innerHTML = "Attention :"+msgJson.eSense.attention;
                }
            }else if(msgJson.eSense.attention>70){
                document.body.style.backgroundColor = "#FFFF00";
                if(null != document.getElementById("attention")){
                    document.getElementById("attention").innerHTML = "Attention :"+msgJson.eSense.attention;
                }
            }else{
                document.body.style.backgroundColor = "white";
                if(null != document.getElementById("attention")){     
                    document.getElementById("attention").innerHTML = "Attention :"+msgJson.eSense.attention;
                }
            }
        }

        // if(msg.hasOwnProperty('eSense')){    
        //     if(msgJson.eSense.meditation>40 && msgJson.eSense.meditation <50){                
        //         document.body.style.backgroundColor = "#FFFF66";
        //         if(null != document.getElementById("meditation")){     
        //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
        //         }
        //     }else if(msgJson.eSense.meditation>50 && msgJson.eSense.meditation <60){
        //         document.body.style.backgroundColor = "#FFFF33";
        //         if(null != document.getElementById("meditation")){
        //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
        //         }
        //     }else if(msgJson.eSense.meditation>60 && msgJson.eSense.meditation <70){
        //         document.body.style.backgroundColor = "yellow";
        //         if(null != document.getElementById("meditation")){
        //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
        //         }
        //     }else if(msgJson.eSense.meditation>70){
        //         document.body.style.backgroundColor = "#FFFF00";
        //         if(null != document.getElementById("meditation")){
        //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
        //         }
        //     }else{
        //         document.body.style.backgroundColor = "white";     
        //         if(null != document.getElementById("meditation")){
        //             document.getElementById("meditation").innerHTML = "Meditation :"+msgJson.eSense.meditation;
        //         }
        //     }
          
        // }
    });
});