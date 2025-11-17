import {createTagRepeat, optimizeTemplateHTML} from '../../lib/utils.js';

const calendarWeeksTemplate = optimizeTemplateHTML(`<div class="calendar-weeks">
  <div class="days-of-week flex"><span class="dow h-6 leading-6 text-sm font-medium text-fg-disabled"></span></div>
  <div class="weeks">${createTagRepeat('span', 6, {class: 'week block flex-1 leading-9 border-0 rounded-base cursor-default text-center text-body font-medium text-sm'})}</div>
</div>`);

export default calendarWeeksTemplate;
