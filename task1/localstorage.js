
//add employee data in localstorage
function addEmployee(employee,id){
    let employees = getDataFromLocalStorage()
   

    if(id == 0){
        employee.id = getMaxId();
        employees.push(employee);
        setDataToLocalStorage(employees); 
    }
    else 
    {
        let empList = getAllData()
        for(i=0;i<empList.length;i++)
        {
            if(empList[i].id == id)
            {
                employee.id = id;
                empList[i]=employee;
            }
        }
        setDataToLocalStorage(empList)
    }
}

//SET DATA IN LOCAL storage
function setDataToLocalStorage(employees)
{
    localStorage.setItem('EmpData',JSON.stringify(employees))
    
}

//get DATA IN LOCAL storage
function getDataFromLocalStorage()
{
    const employees = localStorage.getItem('EmpData')
    return employees ? JSON.parse(employees) : [];
}   

//edit employee data in localstorage
function editEmployee(){
    getDataFromLocalStorage()
}

//display all employee data in localstorage
function getAllData(){
    const employees = localStorage.getItem('EmpData')
    return employees ? JSON.parse(employees) : [];
}
//display specific  employee data in localstorage
function getEmployeeById(id){
    let empList = getAllData();
   return empList.find(x => x.id == id);
}

//delete employee data in localstorage
function deleteEmployee(id){
    let empList = getAllData()
    let index = empList.findIndex(function(emp){
        return emp.id == id;
    })

    empList.splice(index,1);
    localStorage.setItem('EmpData',JSON.stringify(empList));
}
    
//search employee data in localstorage
function searchEmployee(searchValue,serchcallback){
    let searchEmp = searchValue
    let serchList = JSON.parse(localStorage.getItem('EmpData'));
    let sortedList = [];

    for(i=0;i<serchList.length;i++)
    {
        let FirstName = serchList[i].firstname;
        let LastName = serchList[i].lastname;
        let EmailId = serchList[i].emailid;

        if(searchEmp.includes(FirstName) || searchEmp.includes(LastName) ||searchEmp.includes(EmailId))
        {
            sortedList.push(serchList[i])
        }
        // let filter = searchValue.toLowerCase()
    }
    serchcallback(sortedList);
}

//genrate id autoincrement
function getMaxId(){
    const employees =  getAllData()
   const EmpIds= employees.map((emp)=>{
       return emp.id;
    });

    if(EmpIds.length == 0)
    {
        return 1;
    }
    else
    {     
        return  Math.max.apply(null,EmpIds) + 1;   
    }
}