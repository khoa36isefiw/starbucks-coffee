function defaultGeneri<T = string>(value?: T): T | undefined {
    // type T or undefined
    return value;
}

console.log(defaultGeneri()); // Output: undefined (vì không có giá trị truyền vào)
console.log(defaultGeneri(10)); // Output: 10
console.log(defaultGeneri('Hello')); // Output: Hello
