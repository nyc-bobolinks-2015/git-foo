$(document).ready(function() {

  $('#btn-bird-count').on('click',function(event){
    event.preventDefault();

    console.log("1")

    $.ajax({
      method: 'get',
      url: '/birds/count'
    }).done(function(responseBody){
      console.log("2")
      console.log(responseBody);
    }).fail(function(error){
      console.log("3")
      console.log(error);
    });

    console.log("4");

  });






































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

  // $('#sub-btn').on('click',function(event){
  //   debugger
  // });

  $('#bird-adder').on('submit',function(event){
    event.preventDefault();
    //CAST AJAX SPELL
    //Three Parts of the Request are...
    // method: [get,post,put,delete]  
    // route: /birds
    // data: KV pair of inputs from our form
    var formMethod = $(event.target).attr('method');
    var route = $(event.target).attr('action');
    var data = $(event.target).serialize();

    var argHash = {url: route, method: formMethod, data: data }
    var requestObj = $.ajax(argHash);

    requestObj.done(function(responseBody){
      $('#bird-list').append(responseBody);
    });

    requestObj.fail(function(error){
      console.log("ERRRRoRRRRROROROROR");
    });
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
