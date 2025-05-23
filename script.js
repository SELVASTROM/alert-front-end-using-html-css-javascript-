function showAlert(){
    alert("Hi Guys welcome to my website");
}
function showConfirm(){
    let result= confirm("Do you want to continue");
    if(result){
        alert("You clicked it ok!");
    }else{
        alert("You clicked it cancel  are you sure about that ?")
    }
}
function showPromt(){
    const name=prompt("What is your sweet  name dear sir/mam ?");
    if(name){
        alert("welcome to my website "+name+" ! ");
    }else{
        alert("are you going to trick me !");
    }
}