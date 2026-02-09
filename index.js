class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}

let rect = new Rectangle(10, 5)
let nom = 'Kelig'

var c = 19;

function add(a, b) {
  return a + b + c
}

console.log(add(1, 2))
c = 4

console.log(add(1, 2))