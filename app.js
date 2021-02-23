// FUNCIONES PARA SLIDESHOW
addEventListener(`DOMContentLoaded`, ()=> {
    let imagenes = ["images/banner_principal/img1.jpg", "images/banner_principal/img2.jpg", "images/banner_principal/img3.jpg", "images/banner_principal/img4.jpg", "images/banner_principal/img5.jpg" ];

    let indiceImagen = 1
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let divIndicadores = document.getElementById("indicadores");


    for (let i = 0; i < imagenes.length; i++) {
        const div = document.createElement("div");
        div.classList.add("circles");
        div.id = i;
        div.addEventListener("click", () => verEstaImagen(i))
        divIndicadores.appendChild(div);
    }

    function verEstaImagen(i){
        img1.src = imagenes[i];
        circuloActual = Array.from(circulos).find(Element => Element.id == i);
        Array.from(circulos).forEach(cir => cir.classList.remove("resaltado"));
        circuloActual.classList.add("resaltado");
        indiceImagen = i + 1;
        if (indiceImagen == imagenes.length){
            indiceImagen = 0;
        }
        
       
    }

    img1.src = imagenes[0];
    let circulos = document.getElementsByClassName("circles");
    circulos[0].classList.add("resaltado");

    function slideshow(){
        img2.src = imagenes[indiceImagen];
        // El metodo array.from lo uso para recorrer el array y encontrar el elemento cuyo id sea el mismo que el indice del array imagenes
        // Y asi saber cual de los indicadores es el actual. luego, recorre nuevamente el array y elimino el resaltado de todos para solo agregarselo al indicador actual 
        let circuloActual = Array.from(circulos).find(Element => Element.id == indiceImagen);
        Array.from(circulos).forEach(cir => cir.classList.remove("resaltado"));
        circuloActual.classList.add("resaltado");

        img2.classList.add("active");
        indiceImagen++
        
        if (indiceImagen == imagenes.length){
            indiceImagen = 0;
        }

        setTimeout(() => {
            img1.src = img2.src;
            img2.classList.remove("active");
        }, 1000);
    }

    setInterval(slideshow, 4000);

})

// FUNCION MENU DROPDONW DEL NAVBAR
function desplegarMenu(){
    document.getElementById("dropdonwOpciones").classList.toggle("block");
    let dropdonwArrowDonw = document.getElementById("dropdonwArrowDonw");
    if (dropdonwArrowDonw.classList[1] === "fa-sort-down"){
        dropdonwArrowDonw.classList.remove("fa-sort-down");
        dropdonwArrowDonw.classList.add("fa-sort-up");
    }
    else{
        dropdonwArrowDonw.classList.remove("fa-sort-up");
        dropdonwArrowDonw.classList.add("fa-sort-down");
    };
    
}
document.getElementById("dropdonw").addEventListener(`click`, desplegarMenu);


