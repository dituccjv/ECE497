#!/usr/bin/env node
// This is a workaround since the BoneScript i2c isn't working.
// Thanks to Ricky Rung
// install:  npm install i2c@0.2.1  (the latest version doesn't work)
var b = require('bonescript');
var i2c = require('i2c');
var bl = require('blessed');
var program = bl.program(); 
var port = '/dev/i2c-2';
var matrix = 0x70;
var time = 1000; // Delay between images in ms
var button1 = 'P9_13';
var button2 = 'P9_23';
var button3 = 'P9_17';
var button4 = 'P9_21';
var button5 = 'P9_27';
var posx, posy;


var wire = new i2c(0x70, {
    device: '/dev/i2c-2'
    
});


b.pinMode(button1,b.INPUT,7,'pulldown','fast');
b.pinMode(button2,b.INPUT,7,'pulldown','fast');
b.pinMode(button3,b.INPUT,7,'pulldown','fast');
b.pinMode(button4,b.INPUT,7,'pulldown','fast');
b.pinMode(button5,b.INPUT,7,'pulldown','fast');       


// The first byte is GREEN, the second is RED.
var smile = [0x00, 0x3c, 0x00, 0x42, 0x28, 0x89, 0x04, 0x85,
             0x04, 0x85, 0x28, 0x89, 0x00, 0x42, 0x00, 0x3c
            ];
var frown = [0x3c, 0x00, 0x42, 0x00, 0x85, 0x20, 0x89, 0x00,
             0x89, 0x00, 0x85, 0x20, 0x42, 0x00, 0x3c, 0x00
            ];
var neutral = [0x3c, 0x3c, 0x42, 0x42, 0xa9, 0xa9, 0x89, 0x89,
               0x89, 0x89, 0xa9, 0xa9, 0x42, 0x42, 0x3c, 0x3c
              ];

var data = new Array(16);
//data[0]=0;
//data[0]=data[0]|Math.pow(2,7)
//Set Starting matrix
var blank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
data = blank
data[1]=data[3]=data[5]=data[7]=data[9]=data[11]=data[13]=data[15]=0xff

b.attachInterrupt(button1,true,b.FALLING,b1rupt);
b.attachInterrupt(button2,true,b.FALLING,b2rupt);
b.attachInterrupt(button3,true,b.FALLING,b3rupt);
b.attachInterrupt(button4,true,b.FALLING,b4rupt);
b.attachInterrupt(button5,true,b.FALLING,b5rupt);


  
            
program.key(['q','Q'],function(char, key) {
    process.exit(0);
});



//left
function b1rupt(x){
    if(posx<13)
        posx+=2;
    else
        posx=14;
    writeM();
   
};

//down
function b2rupt(x){
    if(posy>0)
        posy-=1;
    else
        posy=0;
    writeM();
};

//up
function b3rupt(x){
    if(posy<7)
        posy+=1;
    else
        posy=7;
    writeM();
};

//Right
function b4rupt(x){
    if(posx>2)
        posx-=2;
    else
        posx=1;
    writeM()}
function b5rupt(x){
    posx = posy =0;
    data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    data[1]=data[3]=data[5]=data[7]=data[9]=data[11]=data[13]=data[15]=0xff;
    console.log(data);
    writeM();
};

function writeM(){
    setTimeout(wait,500);
    data[posx]=data[posx]|Math.pow(2,posy);
    wire.writeBytes(0x00, data, function(err){});
    console.log(posy,posx);
}

console.log('exit');

function wait(){
    console.log('waiting');
}
wire.writeByte(0x21, function(err) {
    wire.writeByte(0x81, function(err) {
        wire.writeByte(0xe7, function(err) {
            console.log('enter')            
        });
    });
});

