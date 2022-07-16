import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

const db=getDatabase();



var namev ,emailv,text;


/*document.getElementById("btn").onclick=function(event){
  console.log("btn clicked");
  event.preventDefault();
readform();

set(ref(db, "student/" + namev), {
  email: emailv,
  name: namev,
  massage:text,
  
})
  .then(() => {
    alert("Data Stored Successfully");
  })
  .catch((error) => {
    alert("Unsccussful", error);
  });
}*/
document.getElementById("btn").ondblclick=function(event){
  console.log("btn doubleclicked");
  event.preventDefault();
  const dbref=ref(db);
  get(child(dbref,"student/"+namev)).then((snapshot)=>{
    if(snapshot.exists()){
      name.value=snapshot.val().name;
      email.value=snapshot.val().email;
      massage.value=snapshot.val().massage;
    }
    else{
      alert("no data found");
    }
  }).catch((error)=>{
    alert("unsuccessful data read,error");
  })
}
function readform(){
emailv=document.getElementById("email").value;
  namev=document.getElementById("name").value;
text=document.getElementById("massege").value;
  console.log(namev);
  
}