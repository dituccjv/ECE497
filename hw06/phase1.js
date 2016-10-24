#!/usr/bin/node
var b = require('bonescript');
var a1, a2, a3, a4; 
var a1p = 'P9_11'
var a2p = 'P9_13'
var a3p = 'P9_15'
var a4p = 'P9_17'
var count =0;
var waitTime = 1000;
b.pinMode(a1p,b.OUTPUT,7,'pulldown');
b.pinMode(a2p,b.OUTPUT,7,'pulldown');
b.pinMode(a3p,b.OUTPUT,7,'pulldown');
b.pinMode(a4p,b.OUTPUT,7,'pulldown');

function seq1(){
    a1 = 0;
    a2 = 0;
    a3 = 0;
    a4 = 1;
    setTimeout(wait,waitTime);
    };

function seq2(){
    a1 = 0;
    a2 = 0;
    a3 = 1;
    a4 = 0;
    setTimeout(wait,waitTime);
  };


function seq3(){
    a1 = 0;
    a2 = 1;
    a3 = 0;
    a4 = 0;
    setTimeout(wait,waitTime);
  };

function seq4(){
    a1 = 1;
    a2 = 0;
    a3 = 0;
    a4 = 0;
    setTimeout(wait,waitTime);
};

function wait(){};

function rotation(){
    seq1();
    writeSeq();
    console.log(a1,a2,a3,a4);
    console.log('1');
    seq2();
    writeSeq();
    console.log(a1,a2,a3,a4);
    console.log('2');
    seq3();
    writeSeq();
    console.log(a1,a2,a3,a4);
    console.log('3');
    seq4();
    writeSeq();
    console.log(a1,a2,a3,a4);
    console.log('4');
    console.log(count);
    count++;
};


function writeSeq(){
    b.digitalWrite(a1p,a1);
    b.digitalWrite(a2p,a2);
    b.digitalWrite(a3p,a3);
    b.digitalWrite(a4p,a4);
};


setInterval(rotation,1000);
