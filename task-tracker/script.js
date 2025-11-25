let containerList = document.querySelector('.container-list');
let buttonCreateTask = document.querySelector('.button-create-task')
let inputCreateTask = document.querySelector('.create-task');

let  taskList = [
    {
        description:"New Task is created and added to the list",
        status:{
            completed:false
        },
    },
    {
        description:"Clicking the checkbox toggles the completeness",
        status:{
            completed:true
        },
    },
    {
        description:"Delete button will delete from the list",
        status:{
            completed:false
        },
    },
    {
        description:"Complete tasks show at the end  with strikethrough",
        status:{
            completed:false
        },
    },   
    {
        description:"Marking in complete will put it back in pending list",
        status:{
            completed:false
        },
    }
];


taskList.forEach((task)=>{
    createContainerListTask(task);
})


buttonCreateTask.addEventListener("click",()=>{

    newTask = {
        description: inputCreateTask.value,
        status: {
            completed:false
        },
    }

    Array(listTask).push(newTask)
    createContainerListTask(newTask)
})


function createContainerListTask(task){
    let containerListTask = document.createElement('div')
    let newCheckbox = document.createElement('input')
    let newTask = document.createElement('p')
    let newIcon = document.createElement('i')
    let statusTaskCompleted = task.status.completed
    
    containerListTask.classList.add('container-list-task')
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('grown-checkbox')
    newTask.innerText = task.description;
    newIcon.classList.add('bi-trash-fill','delete-button')

    if(statusTaskCompleted == true){
        newTask.classList.add('completed-task');
        newCheckbox.setAttribute('checked','checked')
    }
    // console.log(inputCreateTask.value)
    containerListTask.appendChild(newCheckbox);
    containerListTask.appendChild(newTask);
    containerListTask.appendChild(newIcon);

    containerList.appendChild(containerListTask);
}


listTask = containerList.children;

for(let i = 0; i <= listTask.length - 1; i++){
    listTask[i].lastChild.addEventListener("click", (event)=>{
    // remover este elemento de la lista 
    containerList.removeChild(listTask[i])
   })
}

for(let i = 0; i <= listTask.length - 1; i++){
    listTask[i].firstChild.addEventListener("click", (event =>{
        taskText = listTask[i].children[1]
        if(!taskText.classList.contains('completed-task')){
            taskText.classList.add('completed-task')
            console.log(listTask[i])
            // taskList[i].firstChild.setAttribute('checked','checked')
        }else{
            taskText.classList.remove('completed-task')
        }
        // console.log(taskText)
    }))
}
