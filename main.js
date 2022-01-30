var boton = document.getElementById("form");
var input = document.getElementById("input");
var barra = document.getElementById("barra");
var swap = document.getElementById("swap");
boton.addEventListener('submit',function(e){


	if(input.value == ""){

		console.log("Esta vacio");
		e.preventDefault();




	}else{



		console.log(input.value);
		apiGitHub();
		e.preventDefault();




	}

});

barra.addEventListener("click",function(){

	if(swap.className == "swap"){

		swap.classList.add("move");
		document.documentElement.style.setProperty("--fondoBody", "#f4f6f7");
		document.documentElement.style.setProperty("--colorBarra", "white");
		document.documentElement.style.setProperty("--sombra", "#e5e7e9");
		document.documentElement.style.setProperty("--barraCen", "#e5e7e9");
		document.documentElement.style.setProperty("--texto", "black");
		document.documentElement.style.setProperty("--barraCan", "#d6dbdf");









	}else{

		swap.classList.remove("move");
		document.documentElement.style.setProperty("--fondoBody", "#001030");
		document.documentElement.style.setProperty("--colorBarra", "#182B50");
		document.documentElement.style.setProperty("--sombra", "none");
		document.documentElement.style.setProperty("--barraCen", "#001030");
		document.documentElement.style.setProperty("--texto", "white");
		document.documentElement.style.setProperty("--barraCan", "#182B50");
		










	}

})



const apiGitHub = async() => {


	try{

		document.getElementById("content").innerHTML = "";
		const respuesta = await fetch('https://api.github.com/users/'+input.value);
		console.log(respuesta);
		const datos = await respuesta.json();
		const name = datos.name;
		const usser = datos.login;
		const img = datos.avatar_url;
		const repo = datos.public_repos ;
		const seguidores = datos.followers;
		const seguidos = datos.following;
		const create = datos.created_at;
		document.getElementById("content").innerHTML +=


		`
		<div class="content-img">
			<div>
				<img src="${img}" width="100px">
			</div>
			<div class="text-content">
				<h1>${name}</h1>
				<p>${usser}</p>
				<h2>${create}</h2>
			</div>
		</div>
		<div class="content-barra">
			<div><p>Repositorios</p><p>${repo}</p></div>
			<div><p>Seguidores</p>${seguidores}</div>
			<div><p>Seguidos</p>${seguidos}</div>			
		</div>
		<div class="content-links">
			
		</div>

		`



	}catch(error){
		console.log("error");
	}





}



