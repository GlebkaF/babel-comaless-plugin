var should = require('chai').should()

describe('Parser', () => {  
  const parse = require('./index.js') 

  it('Should exist', function () {
    parse.should.exist
  })

  it('Should exec', function() {
    parse.should.be.a('function')
  })

  describe("String parser", function() {  
    it("Should parse single quotes", function () {
      const code = `const a = '[1"';`
      const res = parse(code)
      res.childs.length.should.be.equal(1)
      res.should.has.property('childs',
        [
          "const a = ",
          {
            type: "string",
            indent: "single",
            content: '[1\"'
          },
          ";"
        ]
      )
    });

    it("Should parse double quotes", function () {
      const code = `const a = "[1'";`
      const res = parse(code)
      res.childs.length.should.be.equal(1)
      res.should.has.property('childs',
        [
          "const a = ",
          {
            type: "string",
            indent: "single",
            content: "[1'"
          },
          ";"
        ]
      )
    });

    it("Should parse backtick quotes", function () {
      const code = "const a = `[1'`";
      const res = parse(code)
      res.childs.length.should.be.equal(1)
      res.should.has.property('childs',
        [
          "const a = ",
          {
            type: "string",
            indent: "single",
            content: "[1'"
          },
          ";"
        ]
      )
    });
  })
})