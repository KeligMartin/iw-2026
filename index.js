import { Task } from './task/task.js';

const button = document.getElementById("btn1")

function handleClick() {
  const task = new Task('toto', 'tata', 1, 10, {firstname: 'titi', lastname: 'tutu'})
  console.log(task)
}

button.addEventListener('click', handleClick)