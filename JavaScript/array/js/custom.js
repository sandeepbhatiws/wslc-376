
var names = ['Nishant','Divya','Anugrah','Nidhi'];

names.push('Divyanshu','Kajal');

console.log(names.push('Yogesh','Sumit'));   // 6 length

console.log(names);  //   ['Nishant', 'Divya', 'Anugrah', 'Nidhi', 'Divyanshu']


// latest value in array 
// ['Nishant', 'Divya', 'Anugrah', 'Nidhi', 'Divyanshu', 'Kajal', 'Yogesh', 'Sumit']

console.log(names.pop());  // sumit

console.log(names);   // ['Nishant', 'Divya', 'Anugrah', 'Nidhi', 'Divyanshu', 'Kajal', 'Yogesh']

names.pop();

console.log(names);   // ['Nishant', 'Divya', 'Anugrah', 'Nidhi', 'Divyanshu', 'Kajal']

console.log(names.length)   // 6

console.log(names[3]);  //  Nidhi

var newNames = names.toString();

console.log(newNames);



for(var i = 0; i < names.length; i++ ){
    document.writeln(names[i]+'<br>');
}