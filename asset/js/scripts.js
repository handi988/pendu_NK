
				var motSecret;
				
				var now=new Date();			// Date d'aujourd'hui
				var tableauMot= [];	// Le tableau qui contient les lettres du mot � trouver
						// Le tableau qui contient tous les mots possibles
				
				var tailleMot;				// Le nombre de lettres du mot � trouver
				var coupsManques=0;			// Le nombre de lettres fausses essay�es
				var lettresTrouvees=0;		// Le nombre de lettres trouv�es
				var fini=false;				// true si le jeu est termin�
				
			
				// On prend un mot au hasard en fonction de la seconde en cours
				motSecret=mots[now.getSeconds() % mots.length];
				tailleMot=motSecret.length;
				
				// Permet de changer la couleur des touches du clavier
				function changeCouleur(element,couleur){
					element.style.backgroundColor=couleur;
				}
				
				// Gere tous les traitements et faire lorsqu'on appuie sur une touche
				function proposer(element){
					
					// Si la couleur de fond est lightgreen, c'est qu'on a déja essayé - on quitte la fonction
					if(element.style.backgroundColor=="lightGreen" ||fini) return;
					
					// On récupere la lettre du clavier et on met la touche en lightgreen (pour signaler qu'elle est cliqu�e)
					var lettre=element.innerHTML;
					changeCouleur(element,"lightGrey");
					
					// On met la variable trouve false;
					var trouve=false;
					
					// On parcours chaque lettre du mot, on cherche si on trouve la lettre s�l�ectionn�e au clavier
					for(var i=0; i<tailleMot; i++) {
						
						// Si c'est le cas :
						if(tableauMot[i].innerHTML==lettre) {
							tableauMot[i].style.visibility='visible';	// On affiche la lettre
							trouve=true;
							lettresTrouvees++;
						}
						
					}
					
					// Si la lettre n'est pas présente, trouve vaut toujours false :
					if(!trouve){
						coupsManques++;
						document.images['pendu'].src="asset/image/pendu_"+coupsManques+".jpg"; // On change l'image du pendu
						
						// Si on a rate 9 fois :
						if(coupsManques==8){
							alert("Vous avez perdu !");
							for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
							fini=true;
							// on affiche le mot, on fini le jeu
						}
					}
					if(lettresTrouvees==tailleMot){
						alert("Bravo ! Vous avez découvert le mot secret !");
						fini=true;
					}
				}
				for(var i=0; i<tailleMot; i++) $("#motSecret").append("<td> <p id=\""+i+"\">"+motSecret.charAt(i)+"</p></td>");
				for(var i=0; i<tailleMot; i++) tableauMot[i]=document.getElementById(i);