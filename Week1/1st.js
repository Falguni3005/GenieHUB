 /*//Functions.
function myfunction(x,y)
{
      return x*y;
}
console.log(myfunction(5,9));

const x = function displaysum(a,b) { return a+b};  //Function Expression & Anonymous
console.log(x(9,15));


(function()
{
    console.log("Hiii There!!!");
})();                                              //Function calling itself.

let p = myfunction(81,6);              //Function used as values
console.log(p);

const z = (g,h=10) => g*h;            //Arrow Function with default parameter.
console.log(z(9));*/


/*function sumofnumbers(...nums)                //Rest parameters.
{
    let sum = 0;
    for (let num of nums)
    {
        sum += num;
    }
    return sum;
}
console.log(sumofnumbers(12,4,6,7,56,32,19));*/


//Object.
/*let obj = {
    name : "Falguni",
    age : 22,
    func: function walk(nm)
    {
        console.log(nm + " can walk");
    }
}
console.log(obj.func(obj.name));*/


//Get Method
/*const song = {
    name : "Watermelon Sugar" , 
    Singer : "Harry Styles" , 
    Album : "Fineline",
get WhoSangwhat() { 
    return this.Singer + " sang " + this.name;
}
}
console.log(song.WhoSangwhat);*/


//Set Method
/*const song = {
    name : "History",
    Album : "MITAM",
    Singer : "" ,
    set SingerofSong(sin)
    {
        this.Singer = sin;
    }
}
song.SingerofSong = "One Direction";
console.log(song.Singer)*/


//Defining Object Property using Getter and Setter Methods.
/*const obj = {counter : 0};
Object.defineProperty(obj,"reset",{get : function() {this.counter=0;}});
Object.defineProperty(obj,"add",{set : function(value) {this.counter+=value;}});
Object.defineProperty(obj,"substract",{set : function(value) {this.counter-=value;}});
Object.defineProperty(obj,"increment",{get : function() {this.counter++;}});
Object.defineProperty(obj,"decrement",{get : function() {this.counter--;}});
obj.reset;
obj.add=10;
obj.increment;
obj.substract=5;
obj.decrement;
console.log(obj.counter);*/


//Callback Function.
/*const arr = [23,5,-8,0,84,-49,-15];
const posnumber = removeneg(arr, (x) => x>=0);
function removeneg(numbers, mycallback)
{
    const arr1 = [];
    for(const x of numbers)
    {
        if(mycallback(x))
        {
            arr1.push(x);
        }
    }
    return arr1;
}
console.log(posnumber);*/


//Asynchronous Function.
/*setTimeout(function() { myfunc("Hiii there") }, 4000);
function myfunc(value)
{
    console.log(value);
}*/


//Promise Function
/*let myprom = new Promise(function(myresolve, myreject)
{
  let x = (y) => y%2==0;
  if(x(7))
  {
    myresolve("Even:)");
  }
  else
  {
    myreject("Error:(");
  }
});
myprom.then(
function(value){console.log(value);},
function(error){console.log(error);}
);*/




























