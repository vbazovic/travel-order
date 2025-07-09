const translations = {
  rs: {
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

    "Report": "Izveštaj",

    "Organization Name": "Naziv organizacije",
    "Report for Order ID": "Izveštaj za Nalog ID",
    "OFFICIAL TRAVEL ORDER": "NALOG ZA SLUŽBENO PUTOVANJE",
    "Employee": "Radnik",
    "in position": "na poziciji",
    "is assigned on official travel": "upućuje se na službeni put",
    "On date": "Dana",
    "with task": "sa zadatkom",
    "Means of transportation used on official travel": "Na službenom putu se koristi prevozno sredstvo",
    "Per diem amount is": "Dnevnica iznosi",
    "Travel lasts at most until": "Put traje najduže do",
    "Travel expenses are charged to": "Troškovi putovanja padaju na teret",
    "Approved advance payment": "Odobrena akontacija",
    "Authorizer": "Nalogodavac",
    "Based on the previous order, official travel was completed and I submit the following": "Na osnovu prednjeg naloga je izvršeno službeno putovanje i podnosim sledeći",
    "TRAVEL EXPENSE REPORT": "PUTNI RAČUN",
    "Departure date": "Dan odlaska",
    "Return date": "Dan povratka",
    "Number of days": "Broj dana",
    "Per": "Po",
    "Total": "Svega",
    "Transport from": "Prevoz od",
    "to": "do",
    "Expense type": "Tip troška",
    "Received advance payment": "Primljena akontacija",
    "Remaining for payment/refund": "Ostaje za uplatu/isplatu",
    "In": "U",
    "date (day)": "dana",
    "Request submitter": "Podnosilac zahteva",
    "I confirm the travel was completed according to this order and approve the payment of the travel report amounting to": "Potvrđujem da je putovanje izvršeno prema ovom nalogu i odobravam isplatu putnog računa od",
    "charged to": "teret",
    "Invoice": "Račun",
    "Invoice submitter": "Podnosilac računa",
    "OFFICIAL TRAVEL REPORT": "IZVEŠTAJ SA SLUŽBENOG PUTA",

    "User": "Korisnik",
    "Users": "Korisnici",
    "Username": "Korisničko ime",
    "Password": "Lozinka",
    "Privilege level": "Nivo privilegija",
    "Add User": "Dodaj korisnika"
  }
}

window.onload = () => {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", srcLang);
  }
  localStorage.getItem("lang");
}

const srcLang = 'en';


function t(message, lang) {
  if (lang === srcLang) {
    return message;
  } else {
    return translations[lang][message] || message;
  }
}

function toggleLang() {
  if (localStorage.getItem("lang") === srcLang) {
    localStorage.setItem("lang", 'rs');
  } else {
    localStorage.setItem("lang", srcLang);
  }
  location.reload();
}