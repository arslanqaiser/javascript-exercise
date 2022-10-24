// q2
 const name='Eric';
 console.log(`Hello  ${name} , would you like to learn some python today?`);

// q3
let name1=`arslan qaiser`;
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
let titlecase=function titlecase(){
    let step1= name1.split(' ');
    let step2= step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    let step3= step2.join(' ');
    console.log(step3);
}
titlecase(name1);
// q4
console.log(`Albeert Einstein Once Said, "A person who never made a mistake never tried anything new."`);


// q5
 let famous_person = "Albert Einstein";
 let message = "A person who never made a mistake never tried anything new.";

 console.log(`${famous_person} once said, ${message}`);

//  q6
let strip_name = "arslan qaiser \n\t";
console.log(strip_name);
console.log(strip_name.trim());

// q7
console.log(16 / 2);
console.log(4 + 4);
console.log(8 * 1);
console.log(10 - 2);

// q8
console.log(`___________________________________________`);
console.log(5 + 3);
console.log(16 / 2);
console.log(4 + 4);
console.log(8 * 1);
console.log(10 - 2);
console.log(`___________________________________________`);

// q9
let num = 666;
console.log(`${num} is your favouritr number`);

// q10
// let name1=`arslan qaiser`;
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// let titlecase=function titlecase(){
    // let step1= name1.split(' ');
    // let step2= step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLOwerCase());
    // let step3= step2.join(' ');
    // console.log(step3);

    // q11
    let names = ["ali","ahmad","bilal"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// q12
let freind_names = ["ali","ahmad","bilal"];
for (let i = 0; i < freind_names.length; i++) {
  console.log(freind_names[i] +" " + "a personalized message for you");
}
// q13
let fav_car = [`civic`,`g-63`,`fortuner`];
for(let i = 0; i <= fav_car.length;i++){
  console.log("I would like to own a " + fav_car[i] )
}
// q14
let invite_friend = [`ali`,`ahmad`,`hamza`];
for(let i=0;i<invite_friend.length;i++){
  console.log(`${invite_friend[i]}, I would like to invite you to dinner`)
}
// q15
console.log(invite_friend[2] +` ` + `will not come`);
invite_friend[2] = `arslan`;
for(let i = 0;i<invite_friend.length;i++){
    console.log(`${invite_friend[i]}, I would like to invite you to dinner`)
}
// q16
for(let i = 0;i<invite_friend.length;i++){
  console.log(`hello  ${invite_friend[i]},  i found a big dinning table`);
  }
  
  invite_friend.unshift('asim');
  invite_friend.splice(1,0,`janjua`);
  invite_friend.push(`ashir`)
  for(let i = 0;i<invite_friend.length;i++){
      console.log(`${invite_friend[i]}, I would like to invite you to dinner`)
  }
  // q17
  console.log(invite_friend);
  console.log(`your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.`)
  console.log(`Sorry, i can only invite two friends`)
  for(let i = invite_friend.length - 1 ;i>=2;i--){
    console.log(`sorry ${invite_friend[i]},  i cannot invite you to dinner`,invite_friend.pop());
    }
    for(let i = 0; i <invite_friend.length; i++){
  console.log(`${invite_friend[i]}, You are still invited`)
}
invite_friend.splice(0);
console.log(invite_friend);
// q18
let fav_place = [`KSA`,`DUBAI`,`RUSSIA`,`SWITZERLAND`,`CANADA`];
console.log(fav_place);
let alphabetical = [...fav_place].sort();
console.log(alphabetical);
console.log(`_____________________________________________`)
console.log(fav_place);
let reverseAlpha = alphabetical.sort().reverse();
console.log(reverseAlpha);
console.log(`_____________________________________________`)
console.log(fav_place);
let reverse = [...fav_place].reverse();
console.log(reverse);
console.log(`_____________________________________________`)
let original = reverse.reverse();
console.log(original);
console.log(fav_place.sort());
console.log(fav_place.sort().reverse());
// q19
 console.log(`I have  invited ${invite_friend} members`);
//  20
let mountains = [`k2`,`everst`,`nanga parbat`];
console.log(mountains);
let rivers = [`jehlum`,`chenab`,`ravi`];
console.log(rivers);
let countries = [`pakistan`,`india`,`afghanistan`];
console.log(countries);
let cities = [`sialkot`,`islamabad`,`rawalpindi`];
console.log(cities);
let languages = [`urdu`,`english`,`punjabi`];
console.log(languages);
// q21
let intro = {
  name : `Arslan Qaiser`,
  address: `g/10`,
  citi: `islambad`

}
console.log(intro)
// q22
let array=[`ali`,`ahmad`,`hamza`,`arslan`];
let arr=array[4];
console.log(arr);

let arr1=array[3];
console.log(arr1);
// q23
let a ="arslan";
 if(a == "arslan"?
console.log("true"):console.log("false"));
if(a == "ARSLAN"? 
console.log("true"):console.log("false"));
if(a == 66?
console.log("true"):console.log("false"));
if(a.length == 45?
console.log("true"):console.log("false"));
if(a.length == 6?
console.log("true"):console.log("false"));
let b = 10;
if(b== 10?
console.log("true"):console.log("false"));
if(b.length == 2?
console.log("true"):console.log("false"));
if(b.length == 1?
console.log("true"):console.log("false"));
// q24
string4.toLowerCase();
  console.log(string3 == string4)
  let num0 = 66;
  let num1= 666;
  if(num0 == num1?
  console.log("true"):console.log("false"));
  if (num0 > num1?
  console.log("true"):console.log("false"));
  if (num0 < num1?
  console.log("true"):console.log("false"));
  if (num0 >= num1?
  console.log("true"):console.log("false"));
if (num0 <= num1?
  console.log("true"):console.log("false"));
  if(string.length==6 && string2 ==6?
 console.log("true"):console.log("false"));
 if(string.length==6 || string2 ==6?
 console.log("true"):console.log("false"));
 let arrr=[`ali`,`ahmad`,`arslan`]
 console.log(arrr.includes("ali"))
 console.log(arrr.includes(0))
//  q25
let alien_color = "green";
if(alien_color == "green"){
    console.log("player earned 5 points")
}else{
    console.log(" ")
}
// q26
alien_color = "green";
if(alien_color == "green"){
    console.log("player earned 5 points")
}else{
    console.log(" ")}
    alien_color = "red";
    if(alien_color == "green"){
        console.log("player earned 5 points")
    }else{
        console.log("player just earned 10 poimts ")}
//  q27
alien_color = "green";
if(alien_color == "green"){
    console.log("player earned 5 points")
}else{
    console.log(" ")}
    alien_color = "yellow";
    if(alien_color == "green"){
        console.log("player earned 5 points")
    }else{
        console.log("player just earned 10 points")}
    alien_color = "red";
    if(alien_color == "red"){
        console.log("player just earned 15 poinnts")
    }else{
        console.log(" ")
    }
//  q28
let age = 15;
if(age <2){
    console.log("person is a baby")
}else if(age>=2 && age<4){
    console.log("person is a toddler")
}else if(age>=4 && age<13){
    console.log("person is a kid")
}else if(age>=13 && age<20){
    console.log("person is a teenager")
}else if(age>=20 && age<65){
    console.log("person is a adult")
}else if(age>=65){
    console.log("person is an elder")
}
// q29
let fav_fruit = [`banana`, `apple`,`grapes`]
 if(fav_fruit.includes(`banana`)){
     console.log(`i really like banana`)
 } if(fav_fruit.includes(`apple`)){
     console.log(`i really like apple`)
 } if(fav_fruit.includes(`grapes`)){
     console.log(`i really like grapes`)
 } if(fav_fruit.includes(`mango`)){
     console.log(`i really like mango`)
 } if(fav_fruit.includes(`orange`)){
     console.log(`i really like orange`)
 }
//  q30
let user = [`ali`,`ahmad`,`arslan`,`ashir`,`admin`];
 let user_name = `admin`;
 
 for(let i = 0;i<user.length;i++){
     if(user_name ==user[i]){
     console.log(`hello ${user[i]}, would you like to see a status report`)
 }else{
   console.log(`hello ${user[i]}, thank you for login`)
 }
 }
//  q31
 user = [`ali`,`ahmad`,`arslan`,`ashir`,`admin`];
 user_name = `admin`;
 
 for(let i = 0;i<user.length;i++){
     if(user_name ==user[i]){
     console.log(`hello ${user[i]}, would you like to see a status report`)
 }else{
   console.log(`hello ${user[i]}, thank you for login`)
 }
 }
 console.log("Length of usernames array is  =  ",user.length);
 user.splice(0)
 console.log(`we need to find more users`)
//  q32
let current_users = [`ali`,`ahmad`,`asim`,`mushtaq`,`imran`];
let new_users = [`ali`,`ahmad`,`faizan`,`hamza`,`sohaib`];
for (let i = 0;i<new_users.length;i++){
    for(let j = 0;j<current_users.length; j++){
        if(new_users[i]==current_users[j]){
            console.log(`hello the name ${new_users[i]} is alreay used.you need a new username`)
        }else{
            console.log(`${new_users[j]} is available`)
        }
        
    }
    
}
// q33
num = [1,2,3,4,5,6,7,8,9];
for (i=0;i<num.length;i++){
if(num[i] == 1){
    console.log(num[i]+`st`)
}else if(num[i] == 2){
    console.log(num[i]+`nd`)
}else if(num[i] == 3){
    console.log(num[i]+`rd`)
}else if(num[i] == 4){
    console.log(num[i]+`th`)
}else if(num[i] == 5){
    console.log(num[i]+`th`)
}else if(num[i] == 6){
    console.log(num[i]+`th`)
}else if(num[i] == 7){
    console.log(num[i]+`th`)
}else if(num[i] == 8){
    console.log(num[i]+`th`)
}else if(num[i] == 9){
    console.log(num[i]+`th`)
}
}
// q34
let pizza = [`fajita`,`tikka`,`tandoori`];
for (let i = 0;i<pizza.length;i++){
    console.log(pizza[i])
}
for (i = 0;i<pizza.length; i++){
    console.log(`i really love ${pizza[i]} pizza`)
}
// q35
let animal = [`cat`,`dog`,`goat`];
for (let i = 0;i<animal.length;i++){
    console.log(animal[i])
    console.log(animal[i] + ` would be a great pet`)
}
console.log(animal+ ` are great pet `)
// q36
function t_shirt(size,message){
  return console.log(size,message)
}
t_shirt('Small','Outfiter');
t_shirt('Medium','Gucci');
t_shirt('Large','Versace');
t_shirt('XL',`Nike`);
// q37
function t_shirt(size,message = `I Love Javascript`){
  return console.log(size,message)
}
t_shirt('Small','Outfiter');
t_shirt('Medium','Gucci');
t_shirt('Large','Versace');
t_shirt('XL');
// q38
function  city_country(city,country){
  return console.log(city+` is in ` +country)
} 
city_country(`Islamabad`,`Pakistan`)
city_country(`Toronto`,`Canada`)
city_country(`California`,`USA`)
// q39
function city_country(city,country){
  return console.log(city,country)
}
city_country('Islamabad','Pakistan');
city_country('Toronto','CAnada');
city_country('California','USA');
// q40
function make_album(artist_name,album_title,number_of_tracks){
  return console.log(artist_name,album_title,number_of_tracks
)
}
make_album('MC STAN','INSAAN',11)
make_album(`TAIMUR BAIG`,`AZAL`,12);
make_album('SMW','MOOSETAPE',32);
// q41
let magician_name = [`arslan`,`arslan`,`arslan`];
function show_magicians(magician_names){
    for(let i = 0; i< magician_name.length;i++){
        console.log(magician_name[i]);
    }
}
show_magicians();
// q42
 magician_name = [`arslan`,`arslan`,`arslan`];
function show_magicians(magician_names){
    for(let i = 0; i< magician_name.length;i++){
        console.log(magician_name[i]);
    }
}
show_magicians();
function make_great(magicians_names)
{
for(i=0;i<magician_name.length;i++)
console.log("The Great",magician_name[i]);

}
make_great();
// q43
let new_arr =[magician_name];
show_magicians(new_arr);
make_great(new_arr);
// q44
let sandwich = [{
    item1 : `mayo`,
    item2 : `ketchup`,
    item3 : `chicken`,
    },
    {
    item1 : `chicken`,
    item2 : `mayo sauce`,
    item3 : `spicy sauce`,
    },
    {
    item1 : `bbq chicken`,
    item2 : `tomato sauce`,
    item3 : `veges`,
    }]
const MyFunction=(items)=>{
    return(
        sandwich
        )
};

MyFunction(console.log("summary of sandwich is", sandwich[0]));
MyFunction(console.log("summary of sandwich is", sandwich[1]));
MyFunction(console.log("summary of sandwich is", sandwich[2]));
// q45
let car = {
    manufacturer : ``,
    modelName : ``,
    color : ``,
    info:function(manufacturer,modelName,color){
        console.log(manufacturer,modelName,color)
    }
}
car.info('Cadillac','Escalade','White');
car.info('Mercedes','Maybach',`Black`);
car.info('Mercedes','G-63',`Black`);
