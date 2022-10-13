const taskInput = document.querySelector('.add-task');
const taskList = document.querySelector('.list');
const form = document.querySelector('.task-form');
let tasks = [];
let todo;

const saveTasks = () => {
  const stringifyTasks = JSON.stringify(tasks);
  localStorage.setItem('ToDo', stringifyTasks);
};

const getSavedTasks = () => {
  tasks = JSON.parse(localStorage.getItem('ToDo'));
};

const store = () => {
  todo = {
    Description: taskInput.value,
    id: tasks.length + 1,
    completed: false,
  };
  tasks.push(todo);
  saveTasks();
};

const clear = () => {
  taskInput.value = '';
};

const completedTask = (status, index) => {
  tasks[index - 1].completed = status;
  saveTasks();
};

const removeTask = (id) => {
  tasks = tasks.filter((mytasks) => mytasks.id !== id);
  tasks.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTasks();
};

const addTask = (todo) => {
  const ul = document.createElement('div');
  ul.classList.add('todo-Item');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBox');

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.classList.add('newInput');
  newInput.value = todo.Description;

  checkBox.onclick = (e) => {
    completedTask(e.target.checked, todo.id);
    if (todo.completed === true) {
      newInput.classList.add('completed');
    } else {
      newInput.classList.remove('completed');
    }
  };

  if (todo.completed === true) {
    checkBox.checked = 'checked';
    newInput.classList.add('completed');
  }
  const deleteTask = document.createElement('i');
  deleteTask.classList.add('fa-solid');
  deleteTask.classList.add('fa-trash');
  deleteTask.classList.add('dots');

  ul.append(checkBox, newInput, deleteTask);
  taskList.append(ul);
  deleteTask.addEventListener('click', () => {
    deleteTask.parentElement.remove();
    removeTask(todo.id);
  });
};

tasks.forEach(addTask);
const modifyList = () => {
  const editTask = document.querySelectorAll('.newInput');
  editTask.forEach((edit, idx) => {
    edit.addEventListener('change', () => {
      tasks.forEach((task, index) => {
        if (idx === index) {
          task.Description = edit.value;
          localStorage.setItem('ToDo', JSON.stringify(tasks));
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
      addTask(todo);
      clear();
    }
  });
}

const poptasks = () => {
  if (localStorage.getItem('ToDo')) {
    getSavedTasks();
    tasks.map((todos) => {
      addTask(todos);
      return todos;
    });
  } else {
    tasks.map((todos) => {
      addTask(todos);
      return todos;
    });
  }
};

const clearAll = () => {
  tasks = tasks.filter((todos) => todos.completed !== true);
  tasks.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTasks();
  window.location.reload();
};

export {
  pop, modifyList, poptasks, clearAll,
};