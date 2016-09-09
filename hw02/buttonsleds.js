b = require('bonescript');

//instantiate buttons and leds
var button1 = 'P9_13';
var button2 = 'P9_23';
var button3 = 'P9_17';
var button4 = 'P9_21';
var led1 = 'P9_14';
var led2 = 'P9_24';
var led3 = 'P9_18';
var led4 = 'P9_22';
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;

b.pinMode(button1,b.INPUT,7,'pulldown','fast');
b.pinMode(button2,b.INPUT,7,'pulldown','fast');
b.pinMode(button3,b.INPUT,7,'pulldown','fast');
b.pinMode(button4,b.INPUT,7,'pulldown','fast');

b.pinMode(led1,b.OUTPUT,7,'disabled');
b.pinMode(led2,b.OUTPUT,7,'disabled');
b.pinMode(led3,b.OUTPUT,7,'disabled');
b.pinMode(led4,b.OUTPUT,7,'disabled');


function b1rupt(x)
{
    s1 = s1 ? 0 : 1;
    b.digitalWrite(led1,s1);
};


function b2rupt(x)
{
    s2 = s2 ? 0 : 1;
    b.digitalWrite(led2,s2);
    console.log('b2 pressed');
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

program.key('right',function(char, key) {
    if (posx<colx-1)
        posx+=1;
    updateTable();
});

b.attachInterrupt(button1,true,b.FALLING,b1rupt);
b.attachInterrupt(button2,true,b.FALLING,b2rupt);
b.attachInterrupt(button3,true,b.FALLING,b3rupt);
b.attachInterrupt(button4,true,b.FALLING,b4rupt);
