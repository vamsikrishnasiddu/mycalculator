/*
 @author vamsikrishna siddu
*/

var y = '';

function show(x){
  /*   
  we are concatenating the string here by using y=y+x.value
    EX:
    x.value =1;
    y=1;
    x.value =2;
    y=y+x.value = 1+2 = '1+2' */
    document.querySelector('.dis').innerHTML = y+=x.value;
}

function calc(){
    //this is called when we click '=' button
    var result;
    //For calculating the Power function
    if(y.includes('^')){
        var p = y.split('^');
        result = Math.pow(p[0],p[1]);
    //For calculating the binary function
    }else if(y.includes('bin')){
        console.log("In::bin condition");
        console.log(y);
        var b = y.split('bin');
        var k = parseInt(b[0],10);
        result = k.toString(2);
    }
    else{
        result = eval(y);
    }
    //Setting the panel to show result
    document.querySelector('.dis').innerHTML = result;
    y=result+'';
}
//This function is called when we pressed the ce button which clears the panel,
function xyz(){
    //we are setting the panel to empty string
     document.querySelector('.dis').innerHTML = '';
     //we are setting the global variable y to empty string.
     y='';
}




