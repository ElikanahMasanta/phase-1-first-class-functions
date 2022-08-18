function receivesAFunction(callback){
    console.log (callback());
}

receivesAFunction(function(){return `we are coming home`});

function returnsANamedFunction(){
    var fn;

}

returnsAnAnonymousFunction(function () {
    console.log("Working from home!");
  });
