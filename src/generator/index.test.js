var should = require('chai').should();

describe('Generator', () => {  
  const generator = require('./index.js');   

  it('Should exist', function () {
    generator.should.exist;
  });

  it('Should exec', function() {
    generator.should.be.a('function');
  });

});
