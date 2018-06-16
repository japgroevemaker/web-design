# web-design - opdracht 1
[Live demo](https://japgroevemaker.github.io/web-design/index.html)
Ik heb bij de eerste opdracht van web-design gekozen voor de foto-slider.
De gebruiker ziet een overzicht van allerlei foto's en kan daar doorheen scrollen.
Als de gebruiker op een foto klikt vergroot de foto en kan er info worden gelezen.

## Als eerst
Ik wilde mijzelf uitdagen door foto's uit een ```api``` in te laden op mijn pagina.
Ik heb dit gedaan met de ```api``` van [pixabay](https://pixabay.com).

## Het bouwen
Toen ik de foto's met een ```api``` had ingeladen, moest ik er voor gaan zorgen dat er een slider ingebouwd werd. Dit heb ik zo gedaan: iedere keer als een gebruiker op een foto klikt worden er een ```section``` aangemaakt. In die ```section``` wordt ook een ```img``` element toegevoegd. De ```src``` van deze foto wordt bepaald door de foto waar de gebruiker op heeft geklikt. Vervolgens maak ik ook nog 2 elementen aan waarmee de gebruiker vanuit de overlay door kan klikken naar de volgende foto.

## Testen

## Principles of user interface design
* **1 Clarity** - Het is op deze pagina meteen duidelijk wat je er mee kan doen.
* **3 Conserve attetion at all costs** - Als de gebruiker op de foto klikt, verschijnt er een overlay die het hele scherm bedekt en ervoor zorgt dat je de foto optimaal kan bekijken en niet wordt afgeleidt door andere dingen.
* **6 One primary action per screen** - Als je op de overzichtspagina komt is er een duidelijk doel, op de foto klikken.
* **11 Strong visual hierarchies work best** - De titel boven de foto gallery is het eerste wat opvalt, dit vertelt meteen waar de website over gaat. Binnen de overlay is dit ook zo, de foto valt als eerst op omdat deze uitvergroot is, daarna vallen pas de close button en next en previous buttons op.
