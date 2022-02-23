/*
There are two types of data type.
Primitive and object
Object:Array,Object,function
*/
// let a="";
// let b=9/'b';
// console.log(a);
// console.log(typeof(a));
// console.log(typeof(b),b);
// let c,a=1;
// c=a;
// console.log(c);
// c=3;
// console.log(c);
// var s = Number("g");
// if(!Number.isNaN(s) == false)
// {
//     console.log("yes");
// }
// else
// {
//     console.log("no");
// }
// console.log(isNaN());
// console.log(!2==2);
// let yourName=0;

// while(!yourName==1){
//     console.log("no")
//     break;
// };
// var x,y,z,s,Area;
// function triangle(x,y,z)
// {
// s=(x+y+z)/2;
// Area=Math.sqrt(s*((s-x)*(s-y)*(s-z)));
// console.log(Area);
// }

// triangle(5,6,7);


let str="sheikhSayeed"

let txt="";
let i= str.length;
// console.log(str.length);
while(str[i-1])
{   i--;
    txt+=str[i];
   
}
console.log(txt);