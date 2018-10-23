var i;
for (i = 1; i<101; i++)
if (i % 5 == 0 && i % 3 == 0) {console.log('FizzBuzz', i) }
else if (i % 5 == 0 && i % 13 == 0) {console.log('FezzBuzz', i)}
else if (i % 5 == 0) {console.log('Buzz', i)}
else if (i % 11 == 0) {console.log('Bong', i)}
else if (i % 7 == 0 && (i % 3 ==0 || i % 5 == 0)) {console.log('FizzBang', i)}
else if (i % 13 == 0) {console.log('Fezz', i)}