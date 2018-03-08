describe('bloomFilter', function(){
  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });
  it('should have insert and contains methods', function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.contains).to.be.a('function');
  });
  it('it should have a positive result for a value that has been inserted', function() {
    bloomFilter.insert('hi');
    expect(bloomFilter.contains('hi')).to.equal('maybe');
  });
  it('returns no for a value not in the set', function() {
    bloomFilter.insert('hi');
    bloomFilter.insert('hello');
    expect(bloomFilter.contains('bye')).to.be.false;
  });
});