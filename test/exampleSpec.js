let sinon = require('sinon');
let chai = require('chai');
let should = chai.should(), expect = chai.expect;


describe("examples", function() {

  it("simple equality", function() {
    let stuff = 25;
    expect(stuff).to.equal(25);
    expect(stuff).not.to.equal(30);
  });

  it("object equality", function() {
    let stuff = {
      thing: "a"
    };

    expect(stuff).not.to.equal({ thing: "a" });
    expect(stuff).to.deep.equal({ thing: "a" });
  });

  it("boolean equality", function() {
    let stuff = true;
    expect(stuff).to.be.true
    expect(stuff).not.to.be.false;
  });

  it("existance", function() {
    let stuff = {
      a: 123
    };

    should.exist(stuff.a);
    should.not.exist(stuff.b);
  });

  it("length", function() {
    let stuff = {
      a: "ABC"
    };

    stuff.a.should.have.length(3)
  });

  describe("stubs", function() {

    it("return values", function() {
      let stub = sinon.stub();
      stub.returns(10);

      let result = stub();

      expect(result).to.equal(10);
    });

    it("return values for specific arguments", function() {
      let stub = sinon.stub();
      stub.withArgs(1, 2, 3).returns(10);

      let result = stub(1, 2, 3);

      expect(result).to.equal(10);
    });


  });

  describe("expecting calls", function() {

    it("verifying calls", function() {
      let spy = sinon.spy();
      spy();

      expect(spy.called).to.be.true;
    });

    it("expecting a specific number of calls", function() {
      let spy = sinon.spy();
      spy();
      spy()

      expect(spy.calledOnce).to.be.false;
      expect(spy.calledTwice).to.be.true;
      expect(spy.callCount).to.equal(2);
    });

    it("verifying call with specific arguments", function() {
      let spy = sinon.spy();
      spy(55);

      expect(spy.withArgs(55).called).to.be.true;
    });

  });

});
