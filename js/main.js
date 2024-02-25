import marks from "./utils.js";
import { name } from "./utils.js";

function display(tnum){
    var getData = name+ " got "
    getData += marks(tnum) +"%";
    document.getElementById("bodytext").innerHTML = getData ;
}
display(563);
