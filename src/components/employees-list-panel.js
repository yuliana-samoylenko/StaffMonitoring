export const createEmployeesListPanelTemplate = (employeesList) => `<section class="employee-information-panel js-employee-information-panel">
<div class="employees-panel">

  <header class="employees-panel__header list-header">
    <h2 class="list-header__text">Список сотрудников</h2>
    <button class="list-header__button-close button-close" type="button" title="Закрыть">&#10006;</button>
  </header>

  <div class="employees-panel__body employees-list">
    <ul class="employees-list__container js-employees-list__container">
      ${employeesList}
    </ul>
  </div>

  <footer class="employees-panel__footer footer-list">
    <button class="footer-list__button-open-add" type="button" title="Добавить сотрудика"></button>
  </footer>
</div>
</section>`;

export const createEmployeeListItemTemplate = (employees) => `<li class="employees-list__item employee">
<div class="employee__container">
  <span class="employee__name">${employees.id}) ${employees.name}</span>
  <button class="employee__button-open-edit" type="button" title="Редактировать">
  </button>
</div>
</li>`;

export const createTemplateForOpenEmployeeListButton = () => `<button class="button button-open-list" type="button" title="Список сотрудников">
</button>`;