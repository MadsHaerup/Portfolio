$(function () {
	//rammer alt inde i .items
	const slider = document.querySelector(".items");
	// isDown tjekker om der er et aktivt click
	let isDown = false;
	//giver den nuværende position på x-aksen, der hvor der senest blev klikket ned på musen
	let startX;
	let scrollLeft;
	//lytter efter et klik
	slider.addEventListener("mousedown", (e) => {
		isDown = true;
		slider.classList.add("active");
		//e.pageX giver den nye position på x-aksen
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	// når musen har forladt, skal den ikke længere være klikket ned og aktiv
	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	// lytter efter om et klik er blevet frigivet og fjerner aktiv, så den ikke længere bevæger sig
	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});

	slider.addEventListener("mousemove", (e) => {
		//gør at funktionen ikke kører, når isDown ikke er klikket
		if (!isDown) return;
		//forhindre browseren i at tro man vælger noget man ikke gør, fx hvis der var tekst inde i div'en
		e.preventDefault();
		//opdatere hvor musen er, hver gang den flyttes
		slider.scrollLeft = scrollLeft - (e.pageX - startX) * 2;
	});
});
