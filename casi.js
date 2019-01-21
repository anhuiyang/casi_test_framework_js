// edge case that case is included in a describe and cannot come before the describe


function describe(desc, fn){
  console.log(desc);
  fn();
};

function summary(desc, fn){
  console.log(desc);
  fn();
};

function it(msg, fn){
  describe(msg, fn)
};

function expectEquality(provided, output){
  if(provided === output){
    console.log('passed');
  } else {
    console.log('failed');
  }
};
