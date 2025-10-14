let containerList = document.querySelector('.container-list');
let buttonCreateTask = document.querySelector('.button-create-task')
let inputCreateTask = document.querySelector('.create-task');

let  taskList = [
    {
        destription:"New Task is created and added to the list",
        status:{
            completed:false
        },
    },
    {
        destription:"Clicking the checkbox toggles the completeness",
        status:{
            completed:false
        },
    },
    {
        destription:"Delete button will delete from the list",
        status:{
            completed:false
        },
    },
    {
        destription:"Complete tasks show at the end  with strikethrough",
        status:{
            completed:false
        },
    },   
    {
        destription:"Marking in complete will put it back in pending list",
        status:{
            completed:false
        },
    }
];


taskList.forEach((task)=>{
    createContainerListTask(task.destription);
})


buttonCreateTask.addEventListener("click",()=>{
    newTaskName = inputCreateTask.value
    createContainerListTask(newTaskName)
})


function createContainerListTask(name){
    let containerListTask = document.createElement('div')
    let newCheckbox = document.createElement('input')
    let newTask = document.createElement('p')
    let newIcon = document.createElement('i')
    
    containerListTask.classList.add('container-list-task')
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('grown-checkbox')
    newTask.innerText = name;
    newIcon.classList.add('bi-trash-fill','delete-button')
    // console.log(inputCreateTask.value)
    containerListTask.appendChild(newCheckbox);
    containerListTask.appendChild(newTask);
    containerListTask.appendChild(newIcon);

    containerList.appendChild(containerListTask);
}



// console.log(containerList.children)

listTask = containerList.children;

for(let i = 0; i < listTask.length; i++){
    console.log(listTask[i].lastChild)
    listTask[i].lastChild.addEventListener("click", ()=>{
    // remover este elemento de la lista 
    console.log('click');
   })

}