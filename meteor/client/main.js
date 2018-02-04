var rtVal = new ReactiveVar();

Meteor.startup(function () {
  rtVal.set("<h1> hi </h1>");

  (new Promise((resolve,reject) => {
    Meteor.setTimeout(function () {
      resolve('ok-1');
      rtVal.set("<h1> hi 1 </h1>");
    },1000)
  } )).then((value)=>{
      console.log(value)
      new Promise(((resolve, reject) => {
        Meteor.setTimeout(function () {
          resolve('ok-2');
          rtVal.set("<h1> hi 2 </h1>");
        },1000)
      })).then( (value)=> {
        console.log(value);
        },
        (reason) => {

        })
    },
    (reason)=>{
      //reject
    }
  )




});


Template.main.helpers({
  test() {
    return rtVal.get();
  }

});