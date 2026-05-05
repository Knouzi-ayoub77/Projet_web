import "./Hero.css";

export default function Hero() {
  return (
 	<>
		<main style={{left:0}}>
		<div className="main-title" style={{alignItems:"center",display:"block"}}>
			<h2>La gestion inclusive des espaces sportifs de la
			 préfecture des arrondissements
			
			</h2>
			<br/>
			<br/>
			<h5>
				Préparez-vous à vivre des moments intenses avec notre système de réservation en ligne.
			</h5>
		</div>
		
		<div className="reservation-button" style={{display:"block"}}>
			<button id="reservation-button">
				<a href="hh2.html">
					<h4>	Réserver maintenant</h4>
				</a>
			</button>
		</div>
	</main>
	</>
  );
}