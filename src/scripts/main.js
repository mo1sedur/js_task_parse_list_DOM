'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary);
}

function sortList(list) {
    const items = Array.from(list.querySelectorAll('li'));

    const sorted = items.sort((a, b) => getSalary(b) - getSalary(a));

    list.append(...sorted);
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));
  
  return items.map(item => ({
    name: item.textContent.trim(),
    salary: getSalary(item)
  }));
}


sortList(list);
getEmployees(list);
