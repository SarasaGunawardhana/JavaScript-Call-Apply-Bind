
  var object1 = {

    price : 100
  };

  var addvalues = function (v1,v2,v3) {

    return "Result : "+(this.price + v1+v2+v3);
  };

  var bindFunc = addvalues.bind(object1)
  console.log(bindFunc(100,200,100));
