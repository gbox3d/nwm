var rtVal = new ReactiveVar();


Template.exam1.onCreated(function () {
  rtVal.set("<h1> hi </h1>");

  (new Promise((resolve,reject) => {
    Meteor.setTimeout(function () {
      resolve('ok-1');
      rtVal.set("<h1> hi 1 </h1>");
    },1000)
  } )).then(value=>{
      console.log(value)
      return new Promise(((resolve, reject) => {
        Meteor.setTimeout(function () {
          resolve('ok-2');
          rtVal.set("<h1> hi 2 </h1>");
        },1000)
      }))
    },
    reason=> {      //reject
    }
  ).then( value=> {
      console.log(value);
      return new Promise(((resolve, reject) => {
        Meteor.setTimeout(function () {
          resolve('ok-3');
          rtVal.set("<h1> hi 3 </h1>");
        },1000)
      }))
    },
    reason => {

    }
  ).then( value=> {
    console.log(value);
  },reason => {})

})



Template.exam1.events(
  {}
);



Template.exam1.helpers({
  test() {
    return rtVal.get();
  }

});