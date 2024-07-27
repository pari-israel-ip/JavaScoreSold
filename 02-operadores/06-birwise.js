// bit: 0 1
// Byte: 8 bits
// Byte: 000000000 -> 0
// Byte: 000000001 -> 1
// Byte: 000000010 -> 2
// Byte: 000000011 -> 3
// Byte: 000000101 -> 4
// Byte: 000000110 -> 5

//Decimal: 0.1.2.3.4.5.6.7.8.9

console.log(    1|3  ); // 000000011 
console.log(    1|4  ); // 000000101
console.log(    3|5  ); // 000000111  

console.log(    1&3  ); // 000000001 
console.log(    1&4  ); // 000000000
console.log(    3&5  ); // 000000001  
