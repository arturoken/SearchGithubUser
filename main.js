var boton = document.getElementById("form");
var input = document.getElementById("input");
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



