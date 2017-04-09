var should = require('chai').should();

describe('Traverse', () => {  
  const traverse = require('./index.js');   

  it('Should exist', function () {
    traverse.should.exist;
  });

  it('Should exec', function() {
    traverse.should.be.a('function');
  });

});
