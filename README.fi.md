# Budjettilaskuri-tehtävä
Tee budjettilaskuri sovellus React:lla ja TypeScript:llä. Tämä tehtävä sisältää useita vaiheita (osatehtäviä), jotka on jaettu useille viikoille.

## Vaihe 1
Ensimmäisen vaiheen voi aloittaa, kun TodoList-esimerkki on toteutettu.

### Luo uusi komponentti: `BudgetTracker`.

Toteuta tähän komponenttiin lomake, jonka avulla käyttäjä voi lisätä budjetin rivejä seuraavilla kentillä:
- Description (string)
- Amount (number)
- Type: arvo voi olla joko "Income" tai "Expense"
- Date (string)
  
Lisää "Add"-painke. Kun painiketta klikataan, tallenetaan syötetty meno tai tulo taulukko muotoiseen state:en. Jos valittu Type on "Expense", määrä (amount) tallennetaan negatiivisena arvona.

Lisää validointi:
- Kaikki kentät on täytettävä.
- Määrän on oltava kelvollinen numero (ei tyhjä, negatiivinen tai NaN).
- Jos validoinnin ehdot ei täyty, näytetään käyttäjälle viesti ja syötettyjä arvoja ei tallenneta.

### Luo uusi komponentti: `BudgetItems`.

Tämä komponentti vastaa budjetin rivien näyttämisestä taulukkona. Näytä kunkin rivin kuvaus, määrä ja päivämäärä taulukossa.

Lisää "Delete"-painike jokaiselle riville, jolla voi poistaa rivin listasta.

Lähetä lista (state, johon tiedot on tallennettu) ja poisto-funktio props:ien kautta `BudgetTracker`-komponentilta `BudgetItems` komponentille.
Lopuksi näytä `BudgetTracker`-komponentti `App`-komponentissa.

### Esimerkkikuvat
- Syötä kuvaus, määrä, päivämäärä ja valitse tyyppi (Income tai Expense).
- Klikkaa "Add"-painiketta lisätäksesi rivin taulukkoon.
- Näet kaikki budjetin rivit alla olevassa taulukossa. Käytä "Delete"-painiketta rivin poistamiseen.
  
<img src="./src/assets/screenshot.png" alt="Budjettilaskuri" style="width: 70%" />

**Bonus**
- Näytä nykyinen saldo (kokonaissumma) sivulla, laskettuna kaikkien rivien määrien summana.
- Kuukausiraja ja hälytys.

## Vaihe 2: Material UI
Toisen vaiheen voi aloittaa, kun kurssilla on opiskeltu Material UI. Tässä vaiheessa parannat budjettilaskuria käyttämällä Material UI:n komponentteja.

### Material UI -komponentit
- Luo sovellukselle app bar, jossa näkyy otsikkoteksti Budget Tracker.
- Korvaa sovelluksessa käytetyt `input`- ja `button`-elementit sopivilla Material UI -komponenteilla.
- Syöttökentät ja painike tulee asettaa vaakasuoraan sekä lisätä sopivat välit ja marginaalit, jotta käyttöliittymä on käyttäjäystävällinen.

<img src="./src/assets/screenshot_materialui.png" alt="Material UI -komponentit" style="width: 70%" />

**Date Picker**
- Korvaa sovelluksen nykyinen päivämääräkenttä MUI-X Date Picker komponentilla (https://mui.com/x/react-date-pickers/date-picker/).
- Taulukossa, jossa menot ja kulut näytetään, esitä päivämäärä muodossa vvvv-kk-pp.

## Vaihe 3: Datagrid
Tämän vaiheen voi aloittaa, kun kurssilla on opiskeltu MUI-X DataGrid. Tässä vaiheessa päivität budjetin rivien näytön korvaamalla perinteisen HTML-taulukon MUI-X:n DataGrid-komponentilla paremman toiminnallisuuden vuoksi. Poista käytössä oleva HTML-taulukko `BudgetItems` komponentista.

Toteuta MUI-X:n DataGrid-komponentti datan esittämiseen.
- Määritä datagrid:in sarakkeet.
- Ota käyttöön hyödyllisiä toimintoja kuten lajittelu, suodatus ja sivutus paremman käyttökokemuksen takaamiseksi.

<img src="./src/assets/screenshot_muigrid.png" alt="MUI-X datagrid" style="width: 70%" />

**Bonus**
- Näytä määrä 🔴 punaisella, jos kyseessä on meno, ja 🟢 vihreällä, jos kyseessä on tulo.
- Järjestä DataGridin rivit tyypin mukaan, ryhmitellen tulot ja menot omiin kategorioihinsa.

## Vaihe 4: Routing
Tämän vaiheen voi aloittaa, kun kurssilla on opiskeltu React Router.

- Asenna React Router projektiin.
 
### Toteuta kaksi uutta komponenttia:
- `Home`: Näyttää tervetuloviestin käyttäjälle.
- `Statistics`: Näyttää kokonaistulot, kokonaismenot ja saldon.

### Toteuta navigointi ja reititys komponenttien välillä.
- Toteuta reititys, jossa käyttäjä voi navigoida `Home`, `BudgetTracker` ja `Statistics` komponenttien välillä. 

> [!TIP] Jos huomaat, että menot ja tulot katoavat sivujen välillä navigoidessa, se johtuu todennäköisesti siitä, että data säilytetään komponentissa
> , joka "unmountataan" reitin vaihtuessa. Kun komponentti "mountataan" uudelleen, luodaan uusi instanssi state:sta ja tiedot katoavat.
>
> Korjaa tämä nostamalla state ylemmälle komponenttitasolle: Siirrä budjetin sisältävä tila ylemmälle komponentille, kuten `App`, jotta se pysyy muistissa sivujen välillä. > Välitä state propsina niille komponenteille, jotka sitä tarvitsevat.
>
>Lue lisää tilan nostamisesta [React dokumentaatiosta](https://react.dev/learn/sharing-state-between-components)


Esimerkit:
Kotisivu:

<img src="./src/assets/budget_home.png" alt="Kotisivu" style="width: 50%" />

Budjetti-sivu:

<img src="./src/assets/budget_budget.png" alt="Budjetti-sivu" style="width: 50%" />

Tilastot-sivu:

<img src="./src/assets/budget_statistics.png" alt="Tilastot-sivu" style="width: 50%" />
