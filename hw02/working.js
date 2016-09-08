var bl = require('blessed');
var program = bl.program();

var xpos, ypos;

var screen = bl.screen({smartCSR: true});
screen.title= 'etch-a-scketch';

var etch = bl.form({
    parent: screen,
    keys:true,
    width:20,
    height:10,
});
etch.setText('enter text');
screen.render();
program.key(['q','Q'],function(char, key) {
    process.exit(0);
});

program.key('up',function(char, key) {
    etch.setText('recieved input');

    screen.render();
});
