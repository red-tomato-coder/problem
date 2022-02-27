let n = prompt();
let k = prompt();
let b = prompt();
let nn = Number(n);
let kn = Number(k);
let bn = Number(b);
let a;
let res;

a = kn * bn;

res = nn - a;
if (res <0){
    console.error("0"); //Shows like error
}
else{
    console.log(res);
}