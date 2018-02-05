Template.exam2.onCreated(function () {
  console.log('on create')
})

Template.exam2.onDestroyed(function () {
  console.log('on destroy')
})

Template.exam2.helpers(
  {
    hello_msg() {
      return "hello nwm ... it is Blaze Template basic exam"

    }
  }
);