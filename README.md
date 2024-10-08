# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Lantijn Bergman

  #### Je startniveau:
  Blauw / Rood

  #### Je focus:
  Responsive
 
</details>





## Je website

<details open>
  <summary>Youtube.com</summary>

  ### Je opdracht:
  Ik ga Youtube namaken met HTML, CSS en JavaScript. Het is de bedoeling dat mijn site nagenoeg identiek is aan het orgineel. Mijn focus ligt op het responsive maken van de website, zodat de site op verschillende devices te gebruiken is. 

  #### Screenshot(s) van de eerste pagina (small screen): 
  Youtube homepage
  
  <img src="readme-images/youtube_front_mobiel.jpg" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Youtube videoplayer
  
  <img src="readme-images/youtube_video_mobiel.jpg" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
Youtube is erg toegankelijk voor gebruikers met een handicap. Ik heb niet heel veel ervaring met een screenreader maar naar mijn mening is youtube er prima mee te gebruiken. Er zijn nog een paar HTML elementen die verbeterd kunnen worden zoals lists gebruiken voor een aantal elementen en headings geven. Maar over het algemeen zijn er niet echt verbeteringen om te maken qua toegankelijkheid maar zal ik het gewoon goed namaken. Ik heb foto's van mijn toegankelijksheidstestformulier bij Toegankelijkheidstest 2/2 (week 4) geplaatst.
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/HTML_ontleding.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/hamburger_gif.gif" width="375px" alt="breakdown van een dynamisch deel">
  Nav veranderd van display:none naar display:block

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
 Het lukte me goed om de basis HTML te verwerken en heb al en goed idee over hoe ik het wil gaan stylen met CSS. Ik weet alleen nog niet precies hoe ik een grid gebruik om mijn video's te laten zien. Ook heb ik geen idee over hoe ik de header mooi ga krijgen. Ik heb ook alle icoontjes in illustrator gemaakt.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik ga de grid opdracht maken daarmee kan ik leren hoe ik mijn videomain kan maken
  - Gebruik SVG inplaats van PNG voor de iconen
  - Gebruik een aside en een form voor de header inplaats van een div
  - Maak veel meer gebruik van li voor dingen die eigenlijk in een lijst staan

    Hier kan je zien hoe ik gebruik maak van containers en display:flex om mijn pagina te stijlen. Om dingen naast elkaar te zetten staat de flex-direction op row en om dingen onder elkaar te zetten gebruik flex-direction: column

    
<img src="readme-images/Flex_ontleding.png" width="375px" alt="ontleding van hoe ik flexboxes gebruik">


</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
 Het gaat goed met de website. De HTML is voor het grootste deel af en ik ben lekker bezig met de CSS. Dingen als grid en flexbox heb ik begrepen om daarmee de website vorm te geven. Sommige dingen lukken nog niet maar daar maak ik een lijstje met vragen voor in de les.


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Het is gelukt om de nav in de main te zetten en in dezelfde grid als de video's zo neemt het altijd dezelfde ruimte in en blijft het responsive als je de site kleiner maakt.
  - Header moet op position: fixed om bovenaan te blijven tijdens het scrollen
  - Overflow-X gebruiken om categoriën horizontaal te laten scrollen
  - Ik moet mediaquery gebruiken voor mobiel formaat
  - Custom properties gebruiken voor de kleuren 


    Hier kan je zien hoe ik gebruik heb gemaakt van een grid om de homepage te stijlen

    
    <img src="readme-images/videomain_grid.png" width="375px" alt="foto van grid">

    

    Dit is hoe de header eruit ziet en ik hier gebruik gemaakt van een aside, form en een ul

    
    <img src="readme-images/youtube_banner.png" width="675px" alt="foto van header">

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

Toegankelijkheidstest pagina 1
  
  <img src="readme-images/Toegankelijkheidstest_1.jpg" width="375px" alt="Toegankelijkheidstest pagina 1">

  Toegankelijkheidstest pagina 2

  <img src="readme-images/Toegankelijkheidstest_2.jpg" width="375px" alt="Toegankelijkheidstest pagina 2">

  Toegankelijkheidstest pagina 3

  <img src="readme-images/Toegankelijkheidstest_3.jpg" width="375px" alt="Toegankelijkheidstest pagina 3">

  Toegankelijkheidstest pagina 4

  <img src="readme-images/Toegankelijkheidstest_4.jpg" width="375px" alt="Toegankelijkheidstest pagina 4">

  Toegankelijkheidstest pagina 5

  <img src="readme-images/Toegankelijkheidstest_5.jpg" width="375px" alt="Toegankelijkheidstest pagina 5">

  ### Bevindingen
  Aangezien Youtube al toegankelijk is heb ik niet perse verbeteringen aangebracht aan de toegankelijkheid, de code kon wel semantischer geschreven worden dus dat heb ik gedaan. Mijn HTML is semantisch en ik heb headings gebruikt waar dat nodig is. Ik op de homepage ook een h1 gebruikt maar onzichtbaar gemaakt, zodat het voor een screenreader wel werkt maar niet afleid voor gebruikers die wel kunnen zien. Ik heb doormiddel van de juiste attributen de toegankelijkheid verbeterd. Ik heb gebruik gemaakt van section, article, headings, form, aside, a en ul's om het zo semantisch mogelijk te houden en heb alleen voor de vormgeving af en toe een div gebruikt, ik heb ook zo min mogelijk class gebruikt.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  De website oogt indentiek aan de orginele Youtube, dus dat gaat erg goed. Ik heb nog een paar dingen die ik moet fixen, zoals een werkend hamburger menu, hoe ik de nav onderaan krijg met mediaquerry en wat responsive dingetjes zoals dat de iconen en de video goed meeschalen.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - nav flex-direction row geven, position fixed en bottom 0, bij een bepaalde max-width. Zo gaat de nav onderaan staan op mobiel formaat
  - Hamburger menu werkt met JavaScript, ik zet het menu normaal op display none en met JavaScript als je erop klikt veranderd het naar display block
  - Geef de video width 100% met een mediaquerry 
  - Gebruik justify-content: space around om bepaalde elementen netjes te centreren en goed responsive te maken, zoals de nav en de header.
  - Met mediaquerry kan je veel dingen doen, ik heb bijvoorbeeld een mobiel formaat gemaakt door alle mobiele elementen op display: none te zetten en vanaf een bepaalde width zet ik ze op display block en dan zet ik de desktop elementen op display none

    Hier kan je zien hoe ik mediaquerries heb gebruikt om de website naar mobiel formaat aan te laten passen. Zo gaat bijvoorbeeld de nav onderaan in het midden staan, wordt het youtube logo kleiner en veranderderen de drie icoontjes rechtboven naar een uitklapmenutje.

    <img src="readme-images/Youtube_front_mobiel_def.png" width="375px" alt="Homepage mobiel formaat">


  Hier kan je zien hoe alle sections onder elkaar schuiven als de pagina op mobiel formaat staat, d.m.v mediaquerry
  
  <img src="readme-images/Youtube_video_mobiel_def.png" width="375px" alt="Videoplayer mobiel formaat">

  Hier laat ik zien hoe mijn hamburger menu werkt:
  
 <img src="readme-images/mijnhamburger_gif.gif" width="375px" alt="Videoplayer mobiel formaat"> 

  

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Homepage desktop formaat
  
  <img src="readme-images/Youtube_front_desktop_def.png" width="375px" alt="Homepage desktopformaat">
  
  Videoplayer desktop formaat
  
  <img src="readme-images/Youtube_player_dekstop_def.png" width="375px" alt="Videoplayer desktopformaat">

  Homepage mobiel formaat
  
  <img src="readme-images/Youtube_front_mobiel_def.png" width="375px" alt="Homepage mobiel formaat">  
  
  Videoplayer mobiel formaat
  
  <img src="readme-images/Youtube_video_mobiel_def.png" width="375px" alt="Videoplayer mobiel formaat">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  Ik heb goed geleerd om een website responsive te maken. Dit heb ik gedaan doormiddel van display:grid, display: flex en mediaquerry. Voor dit vak zou ik alles vormgeven met margin, paddings en width, maar dat werkt maar voor één beeldschermformaat. Ik vind het leuk om dit geleerd te hebben want ik had altijd heel veel moeite met een website responsive krijgen, daarom heb ik ook voor deze challenge gekozen.

   Gifje van hoe mijn website responsive is:
   
   <img src="readme-images/youtube_gif.gif" width="375px" alt="GIFje van responsive Youtube">


  Hier laat ik zien hoe mijn flexboxen werken:
  
   <img src="readme-images/Flex_ontleding.png" width="375px" alt="ontleding van hoe ik flexboxes gebruik">
   


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

Ik vond het vooral lastig om de fouten in mijn eigen code te zien. Soms wou ik iets op een bepaalde manier vormgeven maar dan wist ik niet welke code ik daarvoor nodig had, bijvoorbeeld justify-content:space-around, inplaats van dat ik margin gebruik voor ruimte tussen elementen. Hierbij heeft feedback van de docent en studentenassistenen heel goed geholpen en heb door ook goed gebruik van gemaakt. Ik heb hier helaas geen foto''s van. Er is niet iets wat niet gelukt is.

Wat jammer is, is dat ik me niet gerealiseerd heb dat ik een reflectie bij moest houden dus heb ik deze achteraf gemaakt. In mijn reflectie staat mijn proces goed beschreven, maar ik heb jammer genoeg geen screenshots van eerdere versies van mijn website dus die ontbreken. In de toekomst zal ik dit meenemen en er op letten, zodat ik ook screenshots van eerdere versies van mijn website heb.
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Youtube tutorial over mediaquerries gekeken https://www.youtube.com/watch?v=yU7jJ3NbPdA&ab_channel=WebDevSimplified
  2. Ik heb soms ChatGPT gebruikt om problemen in mijn code op te sporen als ik die niet zelf kon vinden.
 

</details>
