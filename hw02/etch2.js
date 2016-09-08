var bl = require('blessed');
var program = bl.program();

var xpos, ypos;

var screen = bl.screen({smartCSR: true});
screen.title= 'etch-a-scketch';

var table=bl.ListTable(['.','.','.'],['x','x','x']);
var etch = bl.ListTable({
    parent: screen,
    keys:true,
    width:20,
    height:10,
    content:table
});
//etch.setContent(table);
//etch.setText(table);
screen.render();

program.key(['q','Q'],function(char, key) {
    process.exit(0);
});

program.key('up',function(char, key) {
    etch.setContent(table);

    screen.render();
});
