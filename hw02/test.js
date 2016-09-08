var bl = require('blessed');
var program = bl.program();
var data2;
var scr = bl.screen();

var posx=0;
var posy=0;
var colx=20;
var rowy=20;

//var colx= prompt("How many columns do you want?");
//var rowy= prompt("How many rows do you want?");


var tbl = bl.listtable({
    keys:true
    });
;
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

program.key('right',function(char, key) {
    if (posx<colx-1)
        posx+=1;
    updateTable();
});

program.key('left',function(char, key) {
    if (posx>0)
        posx-=1;
    else
        posx=0;
    updateTable();
});

program.key('down',function(char, key) {
    if (posy<rowy-1)
        posy+=1;

    updateTable();
});

program.key('up',function(char, key) {
    if (posy>0)
        posy-=1;
    else
        posy=0;
    updateTable();
});
program.key('space',function(char, key){
    data2 = new Array(rowy);
    for (var i = 0; i < rowy; i++) {
        data2[i] = new Array(colx);
        for(var k = 0; k< colx;k++){
            data2[i][k]='';
        }
    }
    updateTable();
});
