let url_string: string = window.location.href; //Page actuel
let url: URL = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

//axios -> info -> HTML
import axios from "axios";
const api = "https://character-database.becode.xyz";

axios.get(`${api}/characters/${id}`).then(function(response: any) {
  const info = response.data;
  document.querySelector(".TitleUp")!.innerHTML = info.name;

  document.querySelector(".Name")!.innerHTML = `Mon nom est ${info.name}`;

  document.querySelector(".shortDescription")!.innerHTML =
    info.shortDescription;
  document.querySelector(".Description")!.innerHTML = info.description;
  (<HTMLImageElement>(
    document.querySelector(".Image")
  )).src = `data:image/png;base64,${info.image}`;
});
