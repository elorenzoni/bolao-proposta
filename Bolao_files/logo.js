
function team2logo(team) {
	var teams = {
		 // Brazil
		 "Atlético-MG" : "https://www.resultados.com/res/image/data/WbSJHDh5-lWKKdTEe.png",
		 "Chapecoense" : "https://www.resultados.com/res/image/data/v9EKoUeM-t25AHKOe.png",
		 "Cruzeiro"    : "https://www.resultados.com/res/image/data/QDS2MvBr-0rn95JMc.png",
		 "Vasco"       : "https://www.resultados.com/res/image/data/nX0WxQg5-ptTI6fcH.png",
		 "Corinthians" : "https://www.resultados.com/res/image/data/jgHv8MEa-OWRM5ECN.png",
		 "Santos"      : "https://www.resultados.com/res/image/data/rJGaKUhl-2NQQ4YRT.png",

		 "América-RJ"  : "https://ssl.gstatic.com/onebox/media/sports/logos/vjP7h1IHBp0qnEQIKkawNg_96x96.png",
		 "Macaé"       : "https://ssl.gstatic.com/onebox/media/sports/logos/wzyz1LNr2N_vI8zlLVDTPw_96x96.png",
		 "Américano"   : "https://ssl.gstatic.com/onebox/media/sports/logos/KY6-3L7Skab1GJKSrxT2bw_96x96.png",
		 "Nova Iguaçu" : "https://ssl.gstatic.com/onebox/media/sports/logos/Ta0_AAIJCX__vMelaeXcFA_96x96.png",
		 "Resende"     : "https://ssl.gstatic.com/onebox/media/sports/logos/KGNOwUaOyvfHwFKz7tIjcw_96x96.png",
		 "Goytacaz"    : "https://ssl.gstatic.com/onebox/media/sports/logos/fcQdJCe-V4xLez7fr4gFQQ_96x96.png",

		//Countries
		"Germany"      : "https://www.resultados.com/res/image/data/zP226aXg-02AFhOqC.png",
		"Netherlands"  : "https://www.resultados.com/res/image/data/bieizLjl-neUmUb9G.png", 
		"Brazil" : "https://upload.wikimedia.org/wikipedia/pt/thumb/2/28/Confedera%C3%A7%C3%A3o_Brasileira_de_Futebol.svg/775px-Confedera%C3%A7%C3%A3o_Brasileira_de_Futebol.svg.png",
		"Brasil" : "https://upload.wikimedia.org/wikipedia/pt/thumb/2/28/Confedera%C3%A7%C3%A3o_Brasileira_de_Futebol.svg/775px-Confedera%C3%A7%C3%A3o_Brasileira_de_Futebol.svg.png",

		//LaLiga
		"Barcelona"    : "https://www.resultados.com/res/image/data/8dhw5vxS-trs0hqL9.png",
		"Real Madrid"  : "https://www.resultados.com/res/image/data/A7kHoxZA-2irdgP53.png",
		"Valladolid"   : "https://www.resultados.com/res/image/data/8SnqB3EG-xGwCks5S.png",
		"Vallecano"    : "https://www.resultados.com/res/image/data/jqaha0f5-SCAy65MC.png",

		//English
		"Manchester Utd"  : "https://www.resultados.com/res/image/data/nwSRlyWg-rBodzytr.png",
		"Chelsea"         : "https://www.resultados.com/res/image/data/GMmvDEdM-2B0QucIK.png",
		"Everton"         : "https://www.resultados.com/res/image/data/EwJqZUZA-Onr593up.png",
		"Arsenal"         : "https://www.resultados.com/res/image/data/pfchdCg5-pU2IsJm8.png",
		"Liverpool"       : "https://www.resultados.com/res/image/data/vwC9RGhl-2B0QucIK.png",

		//Serie A
		"Juventus"              : "https://www.resultados.com/res/image/data/MybdvNGG-ja9Wx4TE.png",
		"Internazionale Milano" : "https://www.resultados.com/res/image/data/888s5CCa-0IrgnKLD.png",
		"Inter"                 : "https://www.resultados.com/res/image/data/888s5CCa-0IrgnKLD.png",
		"Napoli"                : "https://www.resultados.com/res/image/data/lhPsgJWg-zyNNicC8.png",

		//France
		"PSG"  : "https://www.resultados.com/res/image/data/EskJufg5-lIDJVsTo.png",

	};

	if (team in teams)
		 return teams[team]; 
	else 
		 return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgGXzx5JysBWLDoc-3g_EWdx7eEotkoC5KjUxGha-zrvVy0lAoQ";
}

function logoInit() {
   $(".teamlogo").each(function( index ) {
      $(this).attr("src", team2logo($(this).attr("team")));
   }); 
}

