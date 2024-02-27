
//open and close model
 function onHideOrShow(hideOrShow){
  
  document.getElementById("myModal").style.display = hideOrShow;
  document.getElementById("submit").style.display = "block";
  cleanData();
 } 

//image preview
function previewImage(event) {
   var input = event.target;
   var image = document.getElementById('preview');
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
         image.src = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
   }
}

//insert data success msg
function insertUserData(){
Swal.fire({
   title: "Good job!",
   text: "Your Data is Insert SuccessFully!",
   icon: "success"
 });

}


//delete data data confrim msg
function onDeleteDialog(index,callback){
Swal.fire({
   title: "Are you sure?",
   text: "You won't be able to revert this!",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Yes, delete it!"
 }).then((result) => {
   if (result.isConfirmed) {
     Swal.fire({
       title: "Deleted!",
       text: "Your file has been deleted.",
       icon: "success"
     });
     callback(index)
   }
 });  
}

//datalist
function addDataInDataList() {
    let inputValue = document.getElementById('txtAddDataList').value;
    let elments = document.querySelector('.text');
  
    let newElement = document.createElement("li");
    newElement.innerHTML=`${inputValue} <i class="fa-solid fa-xmark" style="color: #000000;"></i>`;
    elments.appendChild(newElement);
   
    document.getElementById('txtAddDataList').value ="";
    newElement.querySelector("i").addEventListener("click", remove);
function remove(){
    newElement.remove();
}
return newElement;

}


// function paigenation(){
//   $('#demo').pagination({
//     dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 100],
//     pageSize: 5,
//     showPrevious: false,
//     showNext: false,
//     callback: function(data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         dataContainer.html(html);
//     }
// })
// }
//insert validation
// function validation(){
//         const error = document.getElementById("error");
//         error.innerHTML = "";
//         const fiestname = document.getElementById("firstname").value;
//         const latname = document.getElementById("lastname").value;
//         const email = document.getElementById("email").value;
//         const male = document.querySelector('.male');
//         const female = document.querySelector('.female');

//         try {          
//          if (fiestname=="") throw "**enter your first name";
//          if (latname=="") throw "**enter your last name";
//          if (email=="") throw "**enter your email name";
//          if(!male.checked && !female.checked){
//             throw "**Please choose your Gender: Male or Female ";
//          }
//        } catch (err) {
//          error.innerHTML = err;
//        }
// } 

//update alert
// function updateData(){
//   Swal.fire({
//     title: "Do you want to save the changes?",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Save",
//     denyButtonText: `Don't save`
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire("Saved!", "", "success");
//       // updateUserData()
//     } else if (result.isDenied) {
//       Swal.fire("Changes are not saved", "", "info");
//     }
//   });
// }

//colspan
 //         let table = document.querySelectorAll('.__table')[0];
        
        //         let parents = table.querySelectorAll('.parent');
        //         console.clear();
        //         parents.forEach((p) => {
                
        //          p.addEventListener('click', (el) => {
        //         let classname =  p.getAttribute("data-child");
        //         let children = table.querySelectorAll('.'+ classname);
        //          children.forEach((c) => {
        //          if(c.className.search("hidden") > -1) {
        //                 c.className = c.className.replace("hidden", " ");  
        //         }else {
        //                 c.className = c.className + ' hidden';
        //          }
        //     })
        //   })
        // }) 

//edit datalist
    // let elments = document.querySelector('.text');
                // let skill = [];
                // skill = employee.Skills;
                // for(i=0;i<skill.length;i++){ 
                // let newElement = document.createElement("li");
                // newElement.innerHTML=`${skill[i]} <i class="fa-solid fa-xmark" style="color: #000000;"></i>`;
                // elments.appendChild(newElement);
                // newElement.querySelector("i").addEventListener("click", remove);
                // function remove(){
                // newElement.remove();  
                // } 
                // }  

