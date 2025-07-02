function a() {
  return 123
}
function b() {
  return {
    x: 1
  }
}
const obj = b()
console.log(obj.x) // 1
console.log(b().x) // 1

function c() {
  return [7, 8, 9]
}
console.log(c()[2]) // 9
