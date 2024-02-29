//your JS code here. If required.
let age;
let name;
const form = document.querySelector('.form');
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	age = form.age.value;
	name = form.name.value;

	promiseCreater(name,age).then((data)=>{
	alert(data)
}).catch((error)=>{
	alert(error)
})
})
function promiseCreater(name,age){
	return new Promise((resolve,reject)=>{
		if(age>18){
			resolve(`Welcome, ${name}. You can vote.`)
		}else{
			reject(`Oh sorry ${name}. You aren't old enough.`)
		}
	})
}








