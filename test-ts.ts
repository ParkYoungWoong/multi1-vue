//// # 명시적으로 타입을 작성해야 함!
// 변수: 타입 = 값
// const a: string = 10
// console.log(a)

//// # 타입 추론 => 타입을 생략할 수 있다!
// const b = true
// console.log(b)

//// # 배열 타입
// // 빈 배열일 경우, 추론이 X / 그래서 빈 배열은 타입을 명시해야 함!
// const c = ['1', '2', '3']
// const d: number[] = []

//// # 클래스를 타입으로 사용할 수 있다!
// class Person {}
// const person: Person = new Person()
// const inputEl = new HTMLInputElement()

//// # 제네릭 (타입변수)
// function add<T>(a: T, b: T) {
//   return a + b
// }
// add<number>(1, 34)
// add<string>('a', 'Xy')
// add(1, 7)

//// # 타입 단언(Assertion)
// const el = document.querySelector('main')

// console.log(el!.textContent) // Non-null 연산자
// console.log((el as HTMLElement).textContent)

// # 인터페이스
// interface User {
//   name: string
//   age: number
//   isValid?: boolean
// }
// const userA: User = {
//   name: 'Neo',
//   age: 22,
//   isValid: false
// }
// const userB: User = {
//   name: 'Evan',
//   age: 99
// }
// console.log(userA)
// console.log(userB)

//// # 인터페이스 - 인덱싱 가능 타입
// interface User {
//   [key: string]: number
// }
// const user: User = { a: 1, b: 2, c: 3 }
// console.log(user['b']) // 2

// interface Status {
//   [key: number]: string
// }
// const asyncStatus: Status = {
//   0: 'pending', // 대기
//   1: 'fulfilled', // 이행
//   2: 'rejected' // 거부
// }
// console.log(asyncStatus[1]) // 'fulfilled'

// const networkStatus: Status = {
//   200: 'Success',
//   401: 'Unauthorized',
//   404: 'Not Found',
//   500: 'Internal Server Error'
// }
// console.log(networkStatus[404]) // 'Not Found'

//// # 인터페이스 - 병합
// interface User {
//   name: string
// }
// interface User {
//   age: number
// }
// const user: User = {
//   name: 'Neo',
//   age: 123
// }
// console.log(user)

//// # keyof, typeof
// interface A {
//   x: number
//   y: string
//   z: boolean
// }
// const c: keyof A = 'a'
// const d: 'x' | 'y' | 'z' = 'a'

// console.log(c, d)
