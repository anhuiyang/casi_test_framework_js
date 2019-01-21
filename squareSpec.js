describe('Square class', function(){
  summary('It has dimension', function(){
    it('has a length', function(){
      s = new Square(10);
      expectEquality(s.size, 10);
    });
    it('has an area', function(){
      s = new Square(10);
      expectEquality(s.area(), 100);
    });
  });
});
