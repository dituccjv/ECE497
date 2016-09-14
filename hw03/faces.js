#!/usr/bin/env node
var bl = require('blessed');
var program = bl.program();
var b = require('bonescript');
var port = '/dev/i2c-2'
var matrix = 0x70;
var time = 1000; // Delay between images in ms

program.key(['q','Q'],function(char, key) {
    process.exit(0);
});


// The first byte is GREEN,the second is RED.
var smile =
    [0x00, 0x3c, 0x00, 0x42, 0x28, 0x89, 0x04, 0x85,
     0x04, 0x85, 0x28, 0x89, 0x00, 0x42, 0x00, 0x3c];
var frown =
         [0x3c, 0x00, 0x42,0x00, 0x85, 0x20, 0x89, 0x00,
          0x89, 0x00, 0x85,0x20, 0x42, 0x00, 0x3c, 0x00];
var neutral =
          [0x3c, 0x3c, 0x42,0x42, 0xa9, 0xa9, 0x89, 0x89,
           0x89, 0x89, 0xa9,0xa9, 0x42, 0x42, 0x3c, 0x3c];
var blank = [0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

b.i2cOpen(port, matrix);
b.i2cWriteBytes(port,0x00,smile);
