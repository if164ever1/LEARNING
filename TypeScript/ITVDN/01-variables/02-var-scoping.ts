
var i = 1;
function var1(){
    console.log(i);
    console.log(test);

    for(var i = 0; i < 10; i++){
        var test = 1;
    }

    console.log(i);
    console.log(test);
}
var1();

function var2(){
    var a = 10;
    var a = 20;
    console.log(a)
}

var2();

function var3(){
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 10);
    }
}

var3();