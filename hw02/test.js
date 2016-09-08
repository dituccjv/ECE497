var bl = require('blessed');
var program = bl.program();
var scr = bl.screen();
var tbl = bl.listtable({
    keys:true,
    fg:'red',
    bg:'blue'
});
var data1 = [
    ['1','2','3'],
    ['1','2','3'],
    ['1','2','3']
];

program.key(['q','Q'],function(char, key) {
    process.exit(0);
});

tbl.focus();
tbl.setData(data1);
scr.append(tbl);
scr.render();

program.key('up',function(char, key) {
    data1 = [
        ['2','2','3'],
        ['1','2','3'],
        ['1','2','3']
];
    data1[1][0]='4';
    tbl.focus();
    tbl.setData(data1);
    scr.append(tbl);
    scr.render();
 });
