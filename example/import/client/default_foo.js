

let foo = function () {

  let age,name,job

  return {
    get_name : function () {
      return name
    },
    set_name : function (_name) {
      name = _name
    }
  }
}

export default foo;