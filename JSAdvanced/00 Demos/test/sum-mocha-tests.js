function sum(arr) {
  let sum = 0;
  for (num of arr)
    sum += Number(num);
  return sum;
}

function testSum() {
  if (sum([1, 2]) != 3) throw new Error("1+2 != 3");
  if (sum([-2]) != -2) throw Error("-2 != -2");
  if (sum([]) != 0) throw new Error("0 != 0");
  //console.log('tests finished');
}

//console.log(sum([1, 2]));
//console.log('boo');

//testSum();

let expect = require("chai").expect;

let test1 = function () {
  it("should return 3 for [1, 2] with chai", function () {
    expect(sum([1, 2])).to.be.equal(3);
  });
};



let test2 = function () {
  it("should return 3 for [1, 2] hybrid", function () {
    let expected = 3;
    let actual = sum([1, 2]);
    expect(sum([1, 2])).to.be.equal(3);
  })
};


let test3 = function () {
  it("should return 3 for [1, 2]", function () {
    let expected = 3;
    let actual = sum([1, 2]);
    if (expected !== actual) {
      throw new Error("3 != 1+2");
    }
  })
};


describe("sum(arr) with chai only", test1);
describe("sum(arr) with chai hybrid", test2);
describe("sum(arr) without chai", test3);


describe("all sum tests", function () {
  describe("group 1", function () {
    it('should 1', function () {
      expect(1).to.be.equal(1);
    })

    it("should 2", function () {
      expect(2).to.be.equal(2);
    })
  })

  describe("group 2", function () {
    it('should 3', function () {
      expect(3).to.be.equal(3);
    })

    it("should 4", function () {
      expect(4).to.be.equal(4);
    })
  })
})