var a="Agaram";
var b=5;
var c=true;
var d=5.4;
console.log(typeof(d))



// Array

let weekdays=["sunday","Monday","Tuesday"]
console.log(weekdays[3]);
console.log(weekdays.length);
console.log(weekdays[weekdays.length-1]);

weekdays.pop()
console.log(weekdays)

weekdays[2]="thursday"
console.log(weekdays)

weekdays.push("saturday")
console.log(weekdays)

// Object

details={
    name:"murugeswari",
    age:20
}
details.gender="female"
console.log(details)

details.age=21
console.log(details)

var name="murugeswari"
function getname(a){
    console.log(a)
}
getname(name)

for(var i=0;i<5;i++){
    console.log(i)
}
for(var i=0;i>-10;i--){
    console.log(i)
}

var a=["sunday","monday","tuesday","wednesday"]
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
let detail=[{
    name:"gayu",
    age:20,

},
{
    name:"karthika",
    age:18,
}

]
for(var i=0;i<detail.length;i++){
    console.log(detail[i].name)
}

// MY RESUME
// console.log(my_resume.edu_details[0].city="vadasery");
// console.log(my_resume)

// console.log(my_resume.personal_details.address.push("Nagercoil"))
// console.log(my_resume)


var my_resume={
    name:"P.Murugeswari",
    email:"gayathrikarthi102@gmail.com",
    mob_no:9629604674,
    skills:["Teamwork","Communication skill"],
    hobbies:["Gardening","Drawing"],
    projects:["A study on consumer buying behaviour of cosmetics","A study on entrepreneurship idea of Murugeswari"],
    edu_details:[
        {
            level:"S.S.L.C",
            ins_name:"S.M.R.V",
            passout_year:2017,
            mark_percentage:97
        },
        {
            level:"H.S.C",
            ins_name:"S.M.R.V",
            passout_year:2019,
            mark_percentage:87
        },
        {   
            level:"B.COM",
            ins_name:"P.K.C",
            passout_year:2022,
            mark_percentage:80
        }],
    experience:[
        {
            company_name:"SPNN Private ltd",
            job_role:"Outbound team",
            experience:0.6
        },
        {
            company_name:"AVT Jewellers",
            job_role:"Accounts",
            experience:1
    }],
    personal_details:
        {
        father_name:"Ponnaiah",
        father_occupation:"Carpenter",
        dob:"18/11/2001",
        gender:"Female",
        marital_status:"Single",
        address:[180,"Near periya pillaiyarcoil street","Krishnancoil"]
}}

function education(a){
    for(var i=0;i<a.length;i++)
    console.log((i+1)+"."+a[i].level)
}
education(my_resume.edu_details)

function education(x){
    for(let i=x.length-1;i>=0;i--)
    console.log(x[i].level)
}
education(my_resume.edu_details)

localStorage.setItem("name",true);


var m=localStorage.getItem("name")
console.log(typeof(m))

var list=["a","b","c"]
var stringList=JSON.stringify(list);
localStorage.setItem("ages",stringList)


var list_1=localStorage.getItem("ages");
var clist=JSON.parse(list_1);
console.log(clist[1])







