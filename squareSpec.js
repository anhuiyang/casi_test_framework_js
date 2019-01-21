describe('Square class', function(){
  case('It has dimension', function(){
    it('has a length', function(){
      s = new Square();
      expectEquality(s.size(10), 10);
    });
    it('has an area', function(){
      s = new Square();
      expectEquality(s.area(10), 100);
    });
  });
});
