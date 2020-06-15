var prime = true;

function setup(){

}

function draw(){
    background(0);
    var r1 = Math.round(random(2,100));
    for(var i = 2;i <= r1/2; i++){
        if(r1%i === 0){
            prime = false;
            break;
        }else{
            prime = true;
        }
    }
    if(prime === true){
        console.log(r1);
    }
}