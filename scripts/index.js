class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title= title
        this.description = description
        this.imgUrl = imgUrl
    }
}   

class Repository{

    constructor(){
        this.activities = []
        this.id = 0
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        this.id++;
        const activity = new Activity(this.id, title, description, imgUrl);
        console.log(activity);
        this.activities.push(activity);
        console.log(`Actividad creada: ${JSON.stringify(activity)}`);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
        console.log(`Actividad con Id ${id} eliminada.`);
    }
}

const repository = new Repository()

console.log(repository)

//armo el secction
const seccion = document.createElement("section")
seccion.id = "section5"

//armo las columnas para las actividades
const row = document.createElement("div");
seccion.appendChild(row)
row.className = "row"

//inicializo las variables
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const imgUrl = document.querySelector("#imgUrl")
const submit = document.querySelector("#agregar");

console.log("card: ", seccion)     

//evento del boton submit
submit.addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault();
    repository.createActivity(titulo.value, descripcion.value, imgUrl.value)

     // Limpiar el contenido existente dentro de la fila
    while (row.firstChild) {
        row.removeChild(row.firstChild);
    }

    repository.getAllActivities().forEach(activity => {

        const column = document.createElement("div");
        row.appendChild(column)
        column.className = "column"
        column.id = "actividades"

        //creo los elementos que iran dento de la columna
        const cardTitulo = document.createElement("h4");
        const cardDescripcion = document.createElement("p");
        const cardImgUrl = document.createElement("img")
        cardImgUrl.className = "imgActividades"

        //agrego los elementos a las columnas
        column.appendChild(cardTitulo);
        column.appendChild(cardDescripcion);
        column.appendChild(cardImgUrl);

        cardTitulo.innerText =  activity.title;
        cardDescripcion.innerText = activity.description
        cardImgUrl.src = activity.imgUrl;
        
        document.body.appendChild(seccion)
        console.log(seccion)
    });
    
    console.log(repository.getAllActivities())
});


module.exports = {Activity, Repository}