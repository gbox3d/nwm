var rtVal = new ReactiveVar();


Template.exam1.onCreated(function () {

})



Template.exam1.events(
  {
    'click #waterfall'(evt) {
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
    },
    'click #asynccall'(evt) {

      var p1 = new Promise(
        // resolver(결정자) 함수는 프로미스 (이행을) 결정(resolve) 또는 거부(reject)하는 함수와함께 호출됩니다.
        function(resolve, reject) {
          rtVal.set("<h1> pending </h1>");
          Meteor.setTimeout(function () {
            var r = Math.random();
            if(r > 0.5) {
              resolve('ok : ' + r)
            }
            else {
              reject('error : ' + r)
            }

          },1000)
        }
      );

      p1.then(function (value) {
        rtVal.set('<h1>' + value + '</h1>')
      }).catch(function (reason) {
        rtVal.set('<h1>' + reason + '</h1>')
      })


    }
  }
);



Template.exam1.helpers({
  test() {
    return rtVal.get();
  }

});