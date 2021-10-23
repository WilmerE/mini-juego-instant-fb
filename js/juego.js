/*=====================================================================================
============================ CONECTANDO CON FACEBOOK ==================================
=====================================================================================*/
//https://www.facebook.com/embed/instantgames/1939979822827419/player?game_url=https://localhost:8080
FBInstant.initializeAsync().then(function() {
		//load assets
		var progress = 0;
		
		var interval = setInterval(function(){
			progress+=3;
			FBInstant.setLoadingProgress(progress);
			if(progress > 95){
				clearInterval(interval)
				FBInstant.startGameAsync().then(function() {
						
						var playerName = FBInstant.player.getName();
						var playerPic = FBInstant.player.getPhoto();
						var playerId = FBInstant.player.getID();

						var y = new Date().getFullYear();
						document.querySelector(".name").textContent = playerName
						document.querySelector(".foto").setAttribute("src", playerPic)
						document.querySelector(".anio").textContent = y
					});
			}
		},100)
		console.log("loaded")
	}
);

/*=====================================================================================
========================= SELECCIONAR UNA META AL AZAR ================================
=====================================================================================*/

function metaAleatorio(metas){
	if(!Array.isArray(metas)){
		throw TypeError('El argumento debe ser un arreglo.');
	}

	if (!metas.length) {
		return null;
	}

	let indiceAleatorio = Math.floor(Math.random() * metas.length);

	return metas[indiceAleatorio];
}

window.addEventListener('DOMContentLoaded', (event) => {
	try {

		var metas = ["Graduarme de médico cirujano. Ser cirujano plástico para tunear a mis amix. Ser power ranger verde.",
		"Salir en una serie de Netflix, y ser un empresario reconocido. Conocer a Lady gaga. Lograr proyectos inclusivos y diversos.",
		"Graduarme de la universidad, irme del pais y comprar Venezuela.",
		"Estar siempre un paso adelante de las demás personas. Ser el millonario más jóven de Guatemala. Ayudar a mis papás en todo lo que pueda. Llegar a la tranquilidad sabiendo que la gente trabaja para mi.",
		"Graduarme de la universidad. Aprender a escribir. Casarme. Seguir siendo feliz.",
		"Ser piloto aviador, salir del tercer mundo. Casarme con una gringa, ver jugar a Messi.",
		"Graduarme de la universidad.",
		"Graduarme de la universidad, tener un empleo, tener una familia, lograr comprar un Porsche 911 carrera S.",
		"Vivir, existir y crecer.",
		"Viajar por el mundo, mudarme a un país de Europa, ser millonario(s), reunir a One Direction e ir a un concierto de ellos.",
		"Ser exitoso(a), vivir en LA, viajar y hacer hikes por todo el mundo. Conocer a Sophia Bush. Ir a un concierto de Ed Sheeran con Luis Ferardo. Casarme con Jesse Soffer.",
		"Tener harto dinero y poder gastarlo en lo que quiera. Alcanzar mi sueño de vivir de internet y ser famoso. Mantener siempre mi salud en buen estado. Tener un auto lujoso con print de monas chinas como Lil Uzi Vert.",
		"Crear mi propia empresa, comprar en exceso sin mirar el precio y viajar lo más posible.",
		"Tener dinero xd.", "Poderme graduar, poder sacar mi carrera e irme del país."]

		var year = new Date().getFullYear();
		document.querySelector(".anio").textContent = year
		
		document.getElementById("btn-iniciar").addEventListener("click", function() {
			document.querySelector(".metas-var").textContent = metaAleatorio(metas);
		});
		//console.log(metaAleatorio(metas));
	} catch (e) {
		console.log(`Error: ${e.message}`);
	}
});