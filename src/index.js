import './style.css';
import {
  pop, modifyList, poptasks, clearAll,
} from './module/addAndRemove.js';

const clearAllBtn = document.querySelector('.btn');
clearAllBtn.addEventListener('click', clearAll);

pop();
modifyList();
poptasks();
