# Flowbite Datepicker - Built with Tailwind CSS

This project is a free and open source datepicker library which uses the utility-first classes from Tailwind and the JavaScript from another open source library called Vanilla JS Datepicker.

This [Tailwind CSS Datepicker](https://flowbite.com/docs/plugins/datepicker/) is part of a larger library of components and interactive elements called Flowbite. Although it can also be used independently from the main library, we encourage you to check out the whole [Tailwind components library from Flowbite](https://flowbite.com/docs/getting-started/introduction/).

<a href="https://flowbite.com/docs/plugins/datepicker/">
  <img src="https://flowbite.s3.amazonaws.com/tailwind-css-datepicker.png" alt="Tailwind CSS Datepicker">
</a> 

## Getting started

If you want to use the **Tailwind Datepicker** plugin using JavaScript you will need to include it into your project via NPM:

```bash
npm i flowbite-datepicker --save
```

After you've installed the NPM library, you will need to import the `Datepicker` module:

```javascript
import Datepicker from 'flowbite-datepicker/Datepicker';
```

Initialize a new element using the `Datepicker` constructor and optionally add custom options based on your needs:

```javascript
const datepickerEl = document.getElementById('datepickerId');
new Datepicker(datepickerEl, {
    // options
}); 
```

If you want to use the **Tailwind Date Range Picker** you have to import the `DateRangePicker` module:

```javascript
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
```

Then in the same fashion you can initialize a date range picker component by using the `DateRangePicker` constructor:

```javascript
const dateRangePickerEl = document.getElementById('dateRangePickerId');
new DateRangePicker(datepickerEl, {
    // options
}); 
```

## Documentation

Check out the official [Tailwind CSS Datepicker Documentation](https://flowbite.com/docs/plugins/datepicker/) page to learn how to get started by installing and then using this library in your project.

## Upgrade to pro

There is also a pro version of FlowBite available featuring more components, an application UI layout, marketing UI pages, e-commerce pages and also Figma design files.

Check it out here: [flowbite.com](https://flowbite.com)

## License

The Tailwind CSS Datepicker is open-source under the MIT License. Find out more by [clicking here](https://flowbite.com/docs/getting-started/license/).


### Donations

If you want to help support this project you can send us Bitcoin or Ethereum to the following addresses:

- Bitcoin address: **bc1qmxvck7jnvwmv0z9xv4lcjsf05dja973v2pn7f5**
- Ethereum address: **0xcb97e23EBc2262B2ba93bfC5d1e423e08420cAF6**

The money will be used to pay for the hosting plan and other costs that are included to maintain this project.
