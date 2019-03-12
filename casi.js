// edge case that case is included in a describe and cannot come before the describe


function describe(desc, fn){
  console.log(`%c${desc}`, 'color: blue');
  fn();
};

function summary(desc, fn){
  describe(' ' + desc, fn);
};

function it(msg, fn){
  describe(' ' + msg, fn)
};

function expectEquality(provided, output){
  if(provided === output){
    console.log('%c  passed', "color: green");
  } else {
    console.log('%c  failed', "color: red");
  }
};

function expectError(provided, output){
  var errMsg
  try {
    provided()
  }
  catch(err) {
    errMsg = err.message;
  }
  expectEquality(errMsg, output)
}