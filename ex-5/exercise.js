function helloWorld() {
    lang = prompt("Choose a preferred language -en-, -es- or -it-")
    if(lang === "en"){
        window.alert("Hello Everyone")
    }else if(lang === "es"){
        window.alert("Hola a todos")
    } else if(lang === "it"){
        window.alert("Ciao Tutti")
    }
}
helloWorld()