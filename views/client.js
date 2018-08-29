var socket = io.connect('http://localhost:3000');


socket.on('connect', function (data) {
    socket.emit('join', 'Client connected');

    socket.on('vann', function (msg) {

        var msgJson = JSON.parse(JSON.stringify(msg));     
        
        if(msg.hasOwnProperty('poorSignalLevel')){
            if(msgJson.poorSignalLevel >= 200){
                document.body.style.backgroundColor = "#FFB6C1";
            }            
        }

        if(msg.hasOwnProperty('blinkStrength')){            
            if(msgJson.blinkStrength>70){
                window.scrollBy(0,100);
            }
        }

        if(msg.hasOwnProperty('eSense')){            
             if(msgJson.eSense.attention>60){                
                document.body.style.backgroundColor = "yellow";
            }else{
                document.body.style.backgroundColor = "white";     
            }

            // if(msgJson.eSense.meditation>60){                
            //     window.scrollBy(0,-1000);    
            // }        
        }
    });
});