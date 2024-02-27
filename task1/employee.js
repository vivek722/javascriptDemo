//insert data

function empSaveData(){

        let skillsItems = [];
        let id = document.getElementById("hiddenField").value
        let FiestName = document.getElementById("txtfirstname").value;
        let LastName = document.getElementById("txtlastname").value;
        let EmailId = document.getElementById("txtemail").value;
        let DOB = document.getElementById('DateOfBirth').value;
        let JoiningDate = document.getElementById('DateOfJoining').value;
        let Designation =document.getElementById('optDesignation').value; 
        let Description = document.getElementById('Description').value;
        let Gender = document.querySelector('input[name="rbtGender"]:checked').value;
        let img = document.getElementById('preview').attributes['src'].value;
        let skillList = document.getElementById('skills');
        let listItem = skillList.getElementsByTagName('li');
      
        for(i=0;i<listItem.length;i++)
        {
                skillsItems.push(listItem[i].innerText);
        }              
        const employee={
                
                firstname:FiestName,
                lastname:LastName,
                emailid:EmailId,
                gender:Gender,
                dateofbirth:DOB,
                dateofjoin:JoiningDate,
                designation:Designation,
                img:img,
                description:Description,
                Skills:skillsItems      
                }       
           
        if(hiddenField == "")
        {
           insertUserData(); 
           addEmployee(employee,0)     
        }
        else
        {   
                addEmployee(employee,id)
                insertUserData();   
        }          
       
        cleanData()
        empAllData()
}
//display
function empAllData(){
        
        let elist = getAllData();
        let html ="";
        elist.forEach(function(emp){
            html +='<tr>';
            html +="<td> <button type='button' class='btn' data-bs-toggle='collapse' data-bs-target='#detail"+emp.id+"' aria-expanded='false' aria-controls='detail"+emp.id+"'><i class='fa-solid fa-circle-plus' style='color: #000000;'></i></button></td>";
            html +='<td><img src="'+emp.img+'"alt="image" class="image--cover"></img></td>';
        //     html += "<td>"+emp.id+"</td>";
            html +="<td>"+emp.firstname + "  "+emp.lastname+"</td>";
            html +="<td>"+emp.emailid +"</td>";
            html +="<td>"+emp.designation +"</td>";
            html +="<td>"+emp.gender +"</td>";
            html +="<td>"+'<button class="btn" onclick="updateUserData('+emp.id+')" ><i class="fa-sharp fa-solid fa-pen" style="color: #fff700;"></i></button> <button class="btn"  id="btnDeleteUser" onclick="deleteUserData('+emp.id+')"><i class="fa-sharp fa-solid fa-trash" style="color: #ff0000; margin-left: 20px;"></i></button> '+"</td>";
            html +="</tr>"
            html += '<tr class="collapse" id="detail'+emp.id+'" style="width: 100%;">';
            html += "<td class='col-md-2'> Date Of Birth:-"+emp.dateofbirth+"</td>";
            html += "<td class='col-md-2'> Date Of Join:-"+emp.dateofjoin+"</td>";
            html += "<td class='col-md-2'> Description:-" +emp.description+"</td>";
            html += "<td class='col-md-2'> Skills:-" +emp.Skills+"</td>";
            html += "</tr>";

        }); 
        document.querySelector("#Crudtable tbody").innerHTML = html;
}   
//update 
function updateUserData(id){ 
        cleanData();
        let employee = getEmployeeById(id);
       
                document.getElementById("txtfirstname").value = employee.firstname;
                document.getElementById("txtlastname").value  = employee.lastname;
                document.getElementById("txtemail").value = employee.emailid;
                document.getElementById('DateOfBirth').value =employee.dateofbirth;
                document.getElementById('DateOfJoining').value = employee.dateofjoin;
                document.getElementById('optDesignation').value = employee.designation; 
                document.getElementById('Description').value = employee.description; 
                document.getElementById('hiddenField').value = employee.id;
                //img retrive
                let imagePreView = document.getElementById("preview")
                imagePreView.src = employee.img
                document.getElementById("preview").innerHTML = employee.img ;
        
                //gender
                if(employee.gender == "Male") 
                {
                       document.getElementById('rbtGenderMale').checked  = employee.gender;
                }
                else
                {
                       document.getElementById('rbtGenderFemale').checked  = employee.gender;
                } 
                let elments = document.querySelector('.text');
                let skill = [];
                skill = employee.Skills;
                for(i=0;i<skill.length;i++)
                { 
                let newElement = document.createElement("li");
                newElement.innerHTML=`${skill[i]} <i class="fa-solid fa-xmark" style="color: #000000;"></i>`;
                elments.appendChild(newElement);
                newElement.querySelector("i").addEventListener("click", remove);
                function remove(){
                newElement.remove();  
                } 
                }        
             
              
               
                document.getElementById("myModal").style.display = "block";
        }  
              
        
//delete
function deleteUserData(id){
     
        onDeleteDialog(id,empDeleteData)
}
function empDeleteData(id) { 

        deleteEmployee(id) 
        empAllData()  
}

//search data
function searchValue(){
        let searchValue = document.querySelector("#searchbar").value;
        searchEmployee(searchValue,finalSerch)
}
function finalSerch(sortedList)
{    
        let html ="";
        sortedList.forEach(function(emp){
            html +="<tr>";
            html +="<td> "+'<button class="btn"><i class="fa-solid fa-circle-plus" style="color: #000000;"></i></button>'+"</td>";
            html +='<td><img src="'+emp.img+'" alt="image" class="image--cover"></img></td>';
            html += "<td>"+emp.id+"</td>";
            html +="<td>"+emp.firstname + "  "+emp.lastname+"</td>";
            html +="<td>"+emp.emailid +"</td>";
            html +="<td>"+emp.designation +"</td>";
            html +="<td>"+emp.gender +"</td>";
            html +="<td>"+'<button class="btn" onclick="updateUserData('+emp.id+')" ><i class="fa-sharp fa-solid fa-pen" style="color: #fff700;"></i></button> <button class="btn"  id="btnDeleteUser" onclick="deleteUserData('+emp.id+')"><i class="fa-sharp fa-solid fa-trash" style="color: #ff0000; margin-left: 20px;"></i></button> '+"</td>";
            html +="</tr>";
        }); 
        document.querySelector("#Crudtable tbody").innerHTML = html;
}

//cleandata
function cleanData(){

        document.getElementById("txtfirstname").value = ""; 
        document.getElementById("txtlastname").value = ""
        document.getElementById("txtemail").value = "";
        document.getElementById('DateOfBirth').value = "";
        document.getElementById('DateOfJoining').value = "";
        document.getElementById('optDesignation').value = ""; 
        document.getElementById('Description').value = "";
        document.getElementById('rbtGenderMale').checked = false;
        document.getElementById('rbtGenderFemale').checked = false;   
        document.getElementById('skills').innerText = '';
}

