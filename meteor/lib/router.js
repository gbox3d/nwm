FlowRouter.route('/', {
  name:'index',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "index"
    });
  }
});


FlowRouter.route('/exam-1', {
  name:'exam-1',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "exam1"
    });
  }
});

FlowRouter.route('/exam-2', {
  name:'exam-2',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "exam2"
    });
  }
});