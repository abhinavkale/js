
        //var age=prompt('Hello Enter age');

        
       //document.getElementById('someText').innerHTML=age;
       // var x=5;
      //  x++;
      //  console.log(x++);

     /* function greeting(yourName){
              var result='Hello '+yourName;
                console.log(result);
        }

      //  var name=prompt('Your name?');
      //  greeting(name);

     // function sumNumbers(num1,num2){
              var x=num1+num2;
              console.log(x);
      }

      sumNumbers(10,20);
      */

    /*  var x=0;
        while(x<100){
                x+=1;
                console.log(x);
        }
        */

       /* for(var x=1;x<=100;x++){
I                console.log(x);
        }
        */

        let fruit='banana';
        let moreFruit='banana\napple'; //new line
        console.log(moreFruit);
        console.log(fruit.length);
        console.log(moreFruit.length);
        console.log(fruit.indexOf('an'));
        console.log(fruit.slice(2,4));
        console.log(fruit.replace('ban','123'));
        console.log(fruit.toUpperCase());
        console.log(fruit.toLowerCase());
        console.log(fruit.charAt(3));
        console.log(fruit[3]);
        console.log(fruit.split(''));

let fruits=['banana','apple','orange','pineapples'];
console.log(fruits);
fruits=new Array('banana','apple','orange','pinrapples');
console.log(fruits);

for(let i=0;i<fruits.length;i++){
        console.log(fruits[i]);
}

console.log('to string',fruits.toString());
console.log(fruits.join('-'));
fruits.pop();
console.log(fruits);
fruits.push('backberries');
console.log(fruits);
console.log(fruits[4]);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables=['asparagus','tomato','broccoli'];
let allGroceries=fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(2,5));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers=[5,8,12,1,3,45,66,99,0,6];
console.log(someNumbers);
someNumbers.sort();
console.log(someNumbers);

console.log(someNumbers.sort(function(a,b){return a-b;}));
console.log(someNumbers.sort(function(a,b){return b-a;}));

/*let emptyArray=new Array();
for(let i=0;i<10;i++){
        emptyArray.push(i);
}
for(let i=0;i<emptyArray.length;i++){
        console.log(emptyArray);
}

*/
let emptyArray=new Array();
for(let i=5;i<15;i++){
        console.log(emptyArray.push(i));
}

let student={
        first:'Abhinav',
        last:'Kale',
        age:19,
        height:170,
        studentInfo:function(){
                return this.first+'\n'+this.last+'\n'+this.age;
        }
};

console.log(student.first);
student.first='Sourabh';
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

/*var age=prompt('Age?');
if(age>=18 && age<=35){
        status='Hello';
        console.log(status);
}
else{
        status='hi';
        console.log(status);
}
*/
var x=0;
var text;
switch(x){
        case 0 || 6: text='weekend';
                break;
        default: text='weekdays';
}
console.log(text);