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

FlowRouter.route('/exam-3', {
  name:'exam-3',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "exam_3_import"
    });
  }
});

FlowRouter.route('/exam-4', {
  name:'exam-4',
  action: function () {
    BlazeLayout.render('layout',{
      layout : "exam_4_canvas"
    });
  }
});