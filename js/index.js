var datebtn = document.getElementById("viewbtn");

datebtn.onclick = function display(){
    document.write(Date());  //It is only for testing purpose, when we use it it will replace all the html code
    console.log(Date()); //in console
    alert(Date()); //alert
}
