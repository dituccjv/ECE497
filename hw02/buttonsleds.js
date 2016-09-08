 b = require('bonescript')

//instantiate buttons and leds

var button1 = P9_13;
var button2 = P9_15;
var button3 = P9_17;
var button4 = P9_19;
var led1 = P9_12;
var led2 = P9_14;
var led3 = P9_16;
var led4 = P9_18;
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;

b.pinMode(button1,INPUT,7,'pullup','fast');
b.pinMode(button2,INPUT,7,'pullup','fast');
b.pinMode(button3,INPUT,7,'pullup','fast');
b.pinMode(button4,INPUT,7,'pullup','fast');

b.pinMode(led1,OUTPUT,7,'disabled');
b.pinMode(led2,OUTPUT,7,'disabled');
b.pinMode(led3,OUTPUT,7,'disabled');
b.pinMode(led4,OUTPUT,7,'disabled');

//set up interupt handler

b.attachInterupt(button1,true,b.FALLING,b1rupt);
b.attachInterupt(button2,true,b.FALLING,b2rupt);
b.attachInterupt(button3,true,b.FALLING,b3rupt);
b.attachInterupt(button4,true,b.FALLING,b4rupt);



function b1rupt(x)
{
    s1 = s1 ? 0 : 1;
    b.digitalWrite(led1,s1);
};


function b2rupt(x)
{
    s2 = s2 ? 0 : 1;
    b.digitalWrite(led2,s2);
};


function b3rupt(x)
{
    s3 = s3 ? 0 : 1;
    b.digitalWrite(led3,s3);
};

function b4rupt(x)
{
    s4 = s4 ? 0 : 1;
    b.digitalWrite(led4,s4);
};


