console.time();
alert("hello");
let defualtName = "John Doe" 
let name = prompt("What\'s your name?", defualtName);
document.getElementById('welcome').innerHTML = `welcome ${name}`;
let learning = 'Learning JavaScript';
console.log(learning);
console.log([1, 2,3,4]);
let myInfo = { name: "juan", job: "Web developer" };
console.log( myInfo );
console.table( myInfo );
console.table([1, 2, 3, 4]);
for (i = 0; i < 100000; i++) {
  // some code
}
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.timeEnd();
