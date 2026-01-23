// default parameter

const greet = (name)=>{
    if (name === undefined){
        return "Hello, Guest!"
    }else{
        return `Hello, ${name}`
    }
    
}

console.log(greet("dino"));

const course ={
title:"Javascript",
mentor:"",
duration:"5",
}
const  {title,mentor, duration} = course

console.log(course)

