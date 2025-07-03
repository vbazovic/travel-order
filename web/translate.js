const translations = {
  rs:{
"Travel Order": "Putni nalog",
  "Logout": "Odjava",
  "Vehicle": "Vozilo",
  "Vehicles": "Vozila",
  "Name": "Ime",
  "Average Consumption": "Prosečna potrošnja",
  "Update": "Izmeni",
  "Delete": "Izbriši",
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
  "Seal": "Pečat",
  "Address": "Adresa",
  "Issuer": "Izdavalac",
  "Add Organisation": "Dodaj organizaciju",

  "Travel Orders": "Putni nalozi",
  "Start Date": "Početni datum",
  "End Date": "Krajnji datum",
  "Order Task": "Zadatak",
  "Location": "Lokacija",
  "Per Diem": "Dnevnica",
  "Report": "Izveštaj",
  "State": "Status",
  "Advance Payment": "Avans",
  "Vehicle Name": "Naziv vozila",
  "Organisation Name": "Naziv organizacije",
  "Add Travel Order": "Dodaj putni nalog",

  "Travel Expence": "Putni trošak",
  "Travel Expences": "Putni troškovi",
  "Expence Type": "Vrsta troška",
  "Start Location": "Početna lokacija",
  "End Location": "Krajnja lokacija",
  "Distance": "Udaljenost",
  "Receipt": "Račun",
  "Price": "Cena",
  "Add Travel Expence": "Dodaj putni trošak",

  "Order-Employee": "Nalog-zaposleni",
  "Add Order Employee": "Dodaj nalog-zaposlenog",

  "-- Select a state --": "-- Izaberi status --",
  "-- Select a vehicle --": "-- Izaberi vozilo --",
  "-- Select an organisation --": "-- Izaberi organizaciju --",
  "-- Select Expence Type --": "-- Izaberi tip troška --",
  "-- Select a Travel Order --": "-- Izaberi putni nalog --",
  "-- Select an Employee --": "-- Izaberi zaposlenog --",

  "Started": "Započeto",
  "Ended": "Završeno",
  "In proggress": "U toku",

  "Travel Costs": "Putni troškovi",
  "Food and Drinks": "Hrana i piće",
  "Other": "Ostalo",

  "From": "Od",
  "To": "Do",

  "Report": "Izveštaj"
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