describe('Square class', function(){
  summary('It has dimension', function() {
    it('has a length', function() {
      s = new Square(10);
      expectEquality(s.size, 10);
    });
    it('has an area', function() {
      s = new Square(10);
      expectEquality(s.area(), 100);
    });
  summary('Error message', function() {
    it('will throw error if the argument is nan', function() {
      var s = function() {
        new Square("ghj")
      }
      expectError(s, "argument is not a number");
    })
    it('will throw error if the argument is nagative', function() {
      var s = function() {
        new Square(7)
      }
      expectError(s, "size should be a positive number");
    })
  })
  });
});
