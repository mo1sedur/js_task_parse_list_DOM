'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary);
}

function sortList(listok) {
    const items = Array.from(listok.querySelectorAll('li'));

    const sorted = items.sort((a, b) => getSalary(b) - getSalary(a));

    listok.append(...sorted);
}

function getEmployees(listok) {
  const items = Array.from(listok.querySelectorAll('li'));
  
  return items.map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}


sortList(list);
getEmployees(list);
