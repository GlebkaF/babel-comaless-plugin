var should = require('chai').should();

describe('commaless loader', () => {  
  const commaless = require('../src/index.js');   

  it('Should exist', function () {
    commaless.should.not.to.be.empty;
  });

  it('Should exec', function() {
    commaless();
  })

  it('Should add missed commas to array', function () {
    const code = `const arr = [1 2 3 4 5];`;
    const expectedOutput = `const arr = [1, 2, 3, 4, 5,];`
    const actualOutput = commaless(code);
    actualOutput.should.be.equal(expectedOutput);
  })

});
