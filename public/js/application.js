$(document).ready(function() {
  console.log('Document is ready now!');

  $('.colorize').on('click', function(event) {
    event.preventDefault();

    var body = $('body');
    if (body.css('background-color') == "rgb(255, 165, 0)") {
      $('body').css('background-color', 'black');
    }
    else {
      $('body').css('background-color', 'Orange');
    }
  });

});

/*

var foo = '5';
var bar = 6;

console.log(foo);
console.log(bar);

console.log(bar + foo);

var arr = [1,2,3,4,5,6,7];

console.log(arr);

for(var i=0; i < arr.length; i++){
  console.log(arr[i].toString());
}

if(true){
  console.log('helo world');
}

if(true == "true"){
  console.log('goodbye world');
}

if(5 == 5){
  console.log('5 == 5');
}

if(5 == '5'){
  console.log("string and int are the same");
}

if(5 === '5'){
  console.log(" triple equals is type ");
}

if(false == 0 ){
  console.log("waaaaaa")
}

var stayinAlive = function(){
  return 'staaayyyiinnnnn Allllliivveeeeeeee';
}

var myObj = {foo: "hi",
             bar: "bye",
             bazz: "zack",
             func: stayinAlive };

console.log(myObj.foo)
myObj.pet = 'Salsa'
console.log(myObj.pet)
myObj['zipCode'] = '10021'
console.log(myObj['zipCode'])
console.log(myObj.zipCode)

console.log( stayinAlive );
console.log( stayinAlive() );

console.log( myObj.func );
console.log( myObj.func() );


var myArry = [];
myArry["x"] = "y";

*/
