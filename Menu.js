 const facts = [
  "Tina y Mati estuvieron en la casa de trenes un 2 de Abril del año 2023 y se encontraron al tren del maní en la salida",
  "Tina y Mati se conocieron en la banca frente a la cruz verde 💕",
  " Cada vez que Tina escucha a Mati nombrarla, su corazón se pausa por un milisegundo",
  "Tina jamás tuvo en sus planes enamorarse de Mati, por eso él es tan especial para ella",
 "La primera vez que Tina se durmió en llamada con Mati, ella lo sintió como algo tan intimo y especial que luego ya no quería dormir si no era así. (si, es como rarita)",
 "Tina piensa en Mati cada vez que escucha Wonderful Tonight de Eric Clapton",
 "Tina se robó el oro de Mati en el servidor de Pancho Alberto y nadie jamás lo sospecho",
 "Tina se acuerda de Mati cada vez que ve algo bonito",
 "Si Tina fuera El Rich, Mati sería su tridente con Riptide",
 "A Tina le cuesta menos expresarse en tercera persona",
 "Mati está presente en cada cosa que le gusta a Tina",
 "Tina ama ir en aventuras con Mati",
 "Me hace muy feliz poder estar haciendo esto para tí, te aprecio más que a cualquier otra cosa mati chan :33"


];

function showLoveFact() {
  const box = document.getElementById("loveFactBox");
  const fact = facts[Math.floor(Math.random() * facts.length)];
  box.innerText = fact;
}

// Set up the love day counter
const anniversaryDate = new Date("2025-02-19"); // Change if needed!
const today = new Date();
const diffTime = Math.abs(today - anniversaryDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("dayCounter").innerText = `He tenido el placer de ser tu novia por ${diffDays} días ૮꒰˵• ﻌ •˵꒱ა`;
