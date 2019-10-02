let url_string: string = window.location.href; //Page actuel
let url: URL = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

//axios -> info -> HTML
import axios from "axios";
const api = "https://character-database.becode.xyz";

axios.get(`${api}/characters/${id}`).then(response: any){
    
};
