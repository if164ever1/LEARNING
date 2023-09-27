function let1(){
    //console.log(i); ERROR
    //console.log(test); ERROR
    for(let i = 0; i < 10; i++){
        let test = i;
    }

    //console.log(i); ERROR
    //console.log(test); ERROR
}

let1();


function let2(){
    let a = 10;
    // let a = 20; ERROR

    console.log(a);
}

let2();


function let3(){
    for(let i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, 10)
    }
}

let3();