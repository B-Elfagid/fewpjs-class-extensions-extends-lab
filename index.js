// Your code here
class Polygon {
 constructor(array) {
     this.sides = array
 }

 get countSides() {
     return this.sides.length 
 }

 get perimeter() {
    const totalPerim = (total, current) => total + current 
    return (this.sides.reduce(totalPerim))
 }
}

class Triangle extends Polygon {
    get isValid() {
      return (this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0]
    }
}

class Square extends Polygon {
    get isValid() {
        return(this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3])
    }

    get area() {
        return this.sides[0]**2
    }
}

