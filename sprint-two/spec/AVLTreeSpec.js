describe('AVL Tree', function() {
  var avlTree;
  
  beforeEach(function() {
    avlTree = new AVLTree();
  });

  it('should have insert and contains methods', function() {
    expect(avlTree.insert).to.be.a('function');
    expect(avlTree.delete).to.be.a('function');
    expect(avlTree.contains).to.be.a('function');
  });
  
  it('should insert in binary tree style', function() {
    var values = [5, 7, 8, 6];
    values.forEach(value => avlTree.insert(value));
    expect(avlTree._root.right.value).to.equal(7);
    expect(avlTree._root.right.right.value).to.equal(8);
    expect(avlTree._root.right.left.value).to.equal(6);
  });

  xit('should have a working delete method', function() {
    var values = [5, 7, 8, 6];
    values.forEach(value => avlTree.insert(value));
    values.forEach(value => expect(avlTree.contains(value)).to.be.true);
  });

  xit('should have a working contains method', function() {
    var values = [5, 7, 8, 6];
    values.forEach(value => avlTree.insert(value));
    values.forEach(value => expect(avlTree.contains(value)).to.be.true);
  });    
  
  it.only('should implement a correct outer right rotation', function() {
    var values = [5, 6, 7];
    debugger;
    values.forEach(value => avlTree.insert(value));
    expect(avlTree._root.value).to.equal(6);
    expect(avlTree._root.left.value).to.equal(5);
    expect(avlTree._root.right.value).to.equal(7);
  });
  
  it('should implement a correct outer left rotation', function() {
    var values = [7, 6, 5];
    values.forEach(value => avlTree.insert(value));
    expect(avlTree._root.value).to.equal(6);
    expect(avlTree._root.left.value).to.equal(5);
    expect(avlTree._root.right.value).to.equal(7);
  });
  
  xit('should implement a correct inner right rotation', function() {
  });
  
  xit('should implement a correct inner left rotation', function() {
  });

});