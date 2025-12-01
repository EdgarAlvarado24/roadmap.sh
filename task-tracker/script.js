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

    taskList.push(newTask)
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

    // <-- echo con ia -->
    newIcon.addEventListener("click", () => {
        containerListTask.remove();
        // Opcional: también puedes eliminarlo del array 'taskList' si lo necesitas
    });
     // <-- echo con ia -->
    newCheckbox.addEventListener("click", () => {
        newTask.classList.toggle('completed-task');
        task.status.completed = !task.status.completed;
        // Opcional: puedes mover el elemento al final de la lista si está completado
    });
     // <-- echo con ia -->

    containerListTask.appendChild(newCheckbox);
    containerListTask.appendChild(newTask);
    containerListTask.appendChild(newIcon);

    containerList.appendChild(containerListTask);
}
