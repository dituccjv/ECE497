var b =require('bonescript');
var bl = require('blessed');
var program = bl.program();
var data2;
var scr = bl.screen();

var posx=0;
var posy=0;
var colx=20;
var rowy=20;

var button1 = 'P9_13';
var button2 = 'P9_23';
var button3 = 'P9_17';
var button4 = 'P9_21';
var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;

b.pinMode(button1,b.INPUT,7,'pulldown','fast');
b.pinMode(button2,b.INPUT,7,'pulldown','fast');
b.pinMode(button3,b.INPUT,7,'pulldown','fast');
b.pinMode(button4,b.INPUT,7,'pulldown','fast');

//var colx= prompt("How many columns do you want?");
//var rowy= prompt("How many rows do you want?");



var tbl = bl.listtable({
    keys:true
    });

var data2 = new Array(rowy);
for (var i = 0; i < rowy; i++) {
    data2[i] = new Array(colx);
    for(var k = 0; k< colx;k++){
        data2[i][k]='';
    }
}

program.key(['q','Q'],function(char, key) {
    process.exit(0);
});


function updateTable(){
    data2[posy][posx]='#';
    tbl.focus();
    tbl.setData(data2);
    scr.append(tbl);
    scr.render();
};

updateTable();


//up button
function b1rupt(x)
{
    if(posy>0)
        posy-=1;
    else
        posy=0;
    updateTable();
};

//down button
function b2rupt(x)
{
    if(posy<coly-1)
        posy+=1;
    else
        posy=coly-1;
    updateTable();
};

//left button
function b3rupt(x)
{
    if(posx>0)
        posx-=1;
    else
        posx=0;
    updateTable();
};
//right button
function b4rupt(x)
{
    if(posx>colx-1)
        posx+=1;
    else
        posx=colx-1;
    updateTable();
};



b.attachInterrupt(button1,true,b.FALLING,b1rupt);
b.attachInterrupt(button2,true,b.FALLING,b2rupt);
b.attachInterrupt(button3,true,b.FALLING,b3rupt);
b.attachInterrupt(button4,true,b.FALLING,b4rupt);
