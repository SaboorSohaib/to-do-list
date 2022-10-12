const taskInput = document.querySelector('.add-task');
const taskList = document.querySelector('.list');
const form = document.querySelector('.task-form');
let task;
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const store = () => {
  task = {
    Description: taskInput.value,
    id: todos.length + 1,
    completed: false,
  };
  todos.push(task);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const clear = () => {
  taskInput.value = '';
};

const removeTask = (id) => {
  todos = todos.filter((tasks) => tasks.id !== id);
  todos.forEach((task, id) => {
    task.id = id + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addTask = (task) => {
  const ul = document.createElement('div');
  ul.classList.add('todo-Item');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBox');

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.classList.add('newInput');
  newInput.value = task.Description;

  const deleteTask = document.createElement('i');
  deleteTask.classList.add('fa-solid');
  deleteTask.classList.add('fa-trash');
  deleteTask.classList.add('dots');

  ul.append(checkBox, newInput, deleteTask);
  taskList.append(ul);
  deleteTask.addEventListener('click', () => {
    deleteTask.parentElement.remove();
    removeTask(task.id);
  });
};

todos.forEach(addTask);
const modifyList = () => {
  const editTask = document.querySelectorAll('.newInput');
  editTask.forEach((edit, idx) => {
    edit.addEventListener('change', () => {
      todos.forEach((task, index) => {
        if (idx === index) {
          task.Description = edit.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
    });
  });
};
modifyList();

function pop() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value !== '') {
      store();
      addTask(task);
      clear();
    }
  });
}

export { pop, modifyList };