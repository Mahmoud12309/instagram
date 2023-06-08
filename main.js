let image = document.querySelector(".image");
let i = document.querySelector(".container i");
let it = document.querySelector(".content i");
let color = "#d7d7d7a1";
image.ondblclick = (e) =>{
	i.classList.add("active");
	color = "#d50707f7";
	it.style.color = color; 
	let set = setTimeout(() => {
		i.classList.remove("active");
	},800);
	console.log(e);
}

it.addEventListener('click',() => {
if(color !== "#d50707f7"){
    color = "#d50707f7";
	i.classList.add("active");
		it.style.color = color; 
	setTimeout(() => {
		i.classList.remove("active");
	},800);
  }else{
	   color = "#d7d7d7a1";
   }
   console.log(color);
   it.style.color = color;
});