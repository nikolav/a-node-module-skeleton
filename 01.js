
// var express = require('express');
// var app     = express();
// app.set('port', process.env.PORT || 3000);
// app.get('/', function (req, res) {
//   res.send('EXPRESS WORKS = true;');
// });
// app.listen(app.get('port'), function () {
//   console.log('express started; press Ctrl-C to terminate');
// });

;(function (exports, g, none) {
  
  // privates
  var cache = {};
  var pCtor;
  var bind   = Function.prototype.call.bind(Function.prototype.bind);
  var hasown = bind(Function.prototype.call, Object.prototype.hasOwnProperty);
  
  
  // module api port
  function Ctor () {
    
  }
  
  
  // export for node
  exports["ctor"] = Ctor;


  pCtor = Ctor.prototype;
  
  // public
  paste(pCtor, {
    "a1": f1
  , "a2": f2
  , "aN": fN
  });
  
  // static
  paste(Ctor, {

  });
  
  
  // api

  function f1 () {

  }

  function f2 () {

  }

  function fN () {

  }
  
  // helpers
  function paste (node, props) {
    for (var name in props) {
      if (hasown(props, name)) {
        node[name] = props[name];
      }
    }
  }

})(exports, this, null);


// eof
