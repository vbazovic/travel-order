const translations = {
  rs:{
    "Logout": "Odjava"
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
    localStorage.setItem("lang",srcLang);
  }
}