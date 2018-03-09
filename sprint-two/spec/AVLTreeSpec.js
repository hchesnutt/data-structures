Descibe('AVL Tree', function() {
  BeforeEach(function() {
    let avlTree = new AVLTree(20);
  });

  it('should have insert and contains methods', function() {
    expect(avlTree.insert).to.be.a('function');
    expect(avlTree.contains).to.be.a('function');
  });
  it('should insert in binary tree style', function() {
    let values = [5, 7, 8, 6];
    values.forEach(value => avlTree.insert(value));
    expect(avlTree._root.right.value).to.equal(7);
    expect(avlTree._root.right.right.value).to.equal(8);
    expect(avlTree._root.right.left.value).to.equal(6);
  });

  it('should have a working contains method', function() {
    let values = [5, 7, 8, 6];
    values.forEach(value => avlTree.insert(value));
    values.forEach(value => expect(avlTree.contains(value)).to.be.true);
  });
  
  it('should implement a correct outer right rotation', function() {
    let values = [5, 6, 7];
    values.forEach(value => avlTree.insert(value));
    expect(avlTree._root.value).to.equal(6);
    expect(avlTree._root.left.value).to.equal(5);
    expect(avlTree._root.right.value).to.equal(7);
  });
  
  it('should implement a correct outer left rotation', function() {
    let values = [7, 6, 5];
    values.forEach(value => avlTree.insert(value));
    expect(avlTree._root.value).to.equal(7);
    expect(avlTree._root.left.value).to.equal(5);
    expect(avlTree._root.right.value).to.equal(8);
  });
  
  xit('should implement a correct inner right rotation', function() {
  });
  
  xit('should implement a correct inner left rotation', function() {
  });

});