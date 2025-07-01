const translations = {
  rs:{
    "Travel Order": "Putni nalog",
    "Logout": "Odjava",
    "Vehicle": "Vozilo",
    "Vehicles": "Vozila",
    "Name": "Ime",
    "Average Consumption": "Prosecna potrosnja",
    "Update": "Izmeni",
    "Delete": "Izbrisi",
    "Add Vehicle": "Dodaj vozilo",
    "Add": "Dodaj",

    "Employee": "Zaposleni",
    "Employees": "Zaposleni",
    "Surname": "Prezime",
    "Position": "Pozicija",
    "Card ID Number": "Broj dokumenta",
    "SSN": "JMBG",
    "Add Employee": "Dodaj zaposlenog",

    "Organisation": "Organizacija",
    "Organisations": "Organizacije",
    "Responsible Person": "Odgovorno lice",
    "Seal": "Pecat",
    "Address": "Adresa",
    "Issuer": "Izdavalac",
    "Add Organisation": "Dodaj organizaciju",

    "Travel Orders": "Putni nalozi",
    "Start Date": "Pocetni datum",
    "End Date": "Krajnji datum",
    "Order Task": "Zadatak",
    "Location": "Lokacija",
    "Per Diem": "Dnevnica",
    "Report": "Izvestaj",
    "State": "Status",
    "Advance Payment": "Avans",
    "Vehicle Name": "Naziv vozila",
    "Organisation Name": "Naziv Organizacije",
    "Add Travel Order": "Dodaj putni nalog",

    "Travel Expence": "Putni trosak",
    "Travel Expences": "Putni troskovi",
    "Expence Type": "Vrsta troska",
    "Start Location": "Pocetna lokacija",
    "End Location": "Krajnja lokacija",
    "Distance": "Udaljenost",
    "Receipt": "Racun",
    "Price": "Cena",
    "Add Travel Expence": "Dodaj putni trosak",

    "Order-Employee": "Nalog-Zaposleni",
    "Add Order Employee": "Dodaj nalog-zaposlenog"
  }
}

window.onload = () => {
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang",srcLang);
  }
  localStorage.getItem("lang");
}

const srcLang = 'en';


function t(message, lang){
  if(lang === srcLang){
    return message;
  }else{
    return translations[lang][message] || message;
  }
}

function toggleLang(){
  if(localStorage.getItem("lang") === srcLang){
    localStorage.setItem("lang",'rs');
  }else{
    localStorage.setItem("lang", srcLang);
  }
  location.reload();
}