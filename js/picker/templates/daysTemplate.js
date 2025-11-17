import {createTagRepeat, optimizeTemplateHTML} from '../../lib/utils.js';

const daysTemplate = optimizeTemplateHTML(`<div class="days">
  <div class="days-of-week grid grid-cols-7 mb-1">${createTagRepeat('span', 7, {class: 'dow block flex-1 leading-9 border-0 rounded-base cursor-default text-center text-body font-medium text-sm'})}</div>
  <div class="datepicker-grid w-64 grid grid-cols-7">${createTagRepeat('span', 42 , {class: 'block flex-1 leading-9 border-0 rounded-base cursor-default text-center text-body font-medium text-sm h-6 leading-6 text-sm font-medium text-fg-disabled'})}</div>
</div>`);

export default daysTemplate;
