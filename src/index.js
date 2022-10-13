import './style.css';

const list = document.querySelector('.list');

const taskList = [
  {
    description: 'Setup Webpack',
    completed: true,
    index: 0,
  },
  {
    description: 'Creating new Repo',
    completed: true,
    index: 1,
  },
  {
    description: 'Request review',
    completed: false,
    index: 2,
  },
];

function addTask(taskList) {
  let tasks = '';
  taskList.forEach((item) => {
    tasks += `<li><input type="checkbox" class="check"><input type="text" class="input-list" value="${item.description}" disabled>
    <i class="fa fa-ellipsis-vertical"></i></li>`;
  });
  list.innerHTML = tasks;
}
addTask(taskList);