// 참고 문헌 : https://guide.meteor.com/structure.html#intro-to-import-export
Template.exam_3_import.onCreated(function () {

  //var export_test = require('../../imports/test.js')

  import export_test from '../../imports/test'


  export_test.test()

  no_import_test();


})