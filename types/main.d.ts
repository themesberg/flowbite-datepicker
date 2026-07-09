/**
 * TypeScript declarations for flowbite-datepicker
 * @version 1.3.0
 */

export interface DatepickerLocale {
  days: string[];
  daysShort: string[];
  daysMin: string[];
  months: string[];
  monthsShort: string[];
  today: string;
  clear: string;
  titleFormat: string;
}

export interface CustomFormat {
  toDisplay?: (date: Date, format: CustomFormat, locale: DatepickerLocale) => string;
  toValue?: (dateStr: string, format: CustomFormat, locale: DatepickerLocale) => Date | number;
}

export type DateFormat = string | CustomFormat;

export interface BeforeShowDayResult {
  enabled?: boolean;
  classes?: string;
  tooltip?: string;
}

export interface BeforeShowMonthResult {
  enabled?: boolean;
  classes?: string;
}

export interface BeforeShowYearResult {
  enabled?: boolean;
  classes?: string;
}

export interface BeforeShowDecadeResult {
  enabled?: boolean;
  classes?: string;
}

export interface DatepickerOptions {
  /** Whether to hide the date picker immediately after a date is selected */
  autohide?: boolean;
  /** Function to customize the appearance of days */
  beforeShowDay?: (date: Date) => BeforeShowDayResult | undefined;
  /** Function to customize the appearance of decades */
  beforeShowDecade?: (date: Date) => BeforeShowDecadeResult | undefined;
  /** Function to customize the appearance of months */
  beforeShowMonth?: (date: Date) => BeforeShowMonthResult | undefined;
  /** Function to customize the appearance of years */
  beforeShowYear?: (date: Date) => BeforeShowYearResult | undefined;
  /** CSS class for buttons */
  buttonClass?: string;
  /** Whether to show calendar week numbers */
  calendarWeeks?: boolean;
  /** Whether to show a clear button */
  clearBtn?: boolean;
  /** Container element for the picker */
  container?: HTMLElement | string;
  /** Delimiter for multiple dates */
  dateDelimiter?: string;
  /** Array of disabled dates */
  datesDisabled?: (Date | number | string)[];
  /** Array of disabled days of the week (0=Sunday, 6=Saturday) */
  daysOfWeekDisabled?: number[];
  /** Array of highlighted days of the week (0=Sunday, 6=Saturday) */
  daysOfWeekHighlighted?: number[];
  /** Default view date when no date is selected */
  defaultViewDate?: Date | number | string;
  /** Whether to disable the touch keyboard on mobile */
  disableTouchKeyboard?: boolean;
  /** Date format */
  format?: DateFormat;
  /** Language code for localization */
  language?: string;
  /** Maximum selectable date */
  maxDate?: Date | number | string | null;
  /** Maximum number of dates that can be selected */
  maxNumberOfDates?: number;
  /** Maximum view level (0=days, 1=months, 2=years, 3=decades) */
  maxView?: number;
  /** Minimum selectable date */
  minDate?: Date | number | string | null;
  /** Whether to enable multidate selection */
  multidate?: boolean;
  /** HTML for the next arrow */
  nextArrow?: string;
  /** Picker orientation */
  orientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Pick level (0=day, 1=month, 2=year) */
  pickLevel?: number;
  /** HTML for the previous arrow */
  prevArrow?: string;
  /** Whether to show days of the week header */
  showDaysOfWeek?: boolean;
  /** Whether to show picker on click */
  showOnClick?: boolean;
  /** Whether to show picker on focus */
  showOnFocus?: boolean;
  /** Starting view (0=days, 1=months, 2=years, 3=decades) */
  startView?: number;
  /** Title for the picker */
  title?: string;
  /** Whether to show today button */
  todayBtn?: boolean;
  /** Today button mode (0=focus, 1=select) */
  todayBtnMode?: number;
  /** Whether to highlight today */
  todayHighlight?: boolean;
  /** Whether to update on blur */
  updateOnBlur?: boolean;
  /** First day of the week (0=Sunday, 6=Saturday) */
  weekStart?: number;
}

export interface DateRangePickerOptions extends Omit<DatepickerOptions, 'multidate' | 'maxNumberOfDates'> {
  /** Input elements for the date range */
  inputs?: HTMLInputElement[];
  /** Whether to allow one-sided ranges */
  allowOneSidedRange?: boolean;
}

export interface DatepickerEventDetail {
  date: Date | Date[] | undefined;
  viewDate: Date;
  viewId: number;
  datepicker: Datepicker;
}

export interface DatepickerEvent extends CustomEvent<DatepickerEventDetail> {
  detail: DatepickerEventDetail;
}

export interface SetDateOptions {
  /** Whether to clear existing selection */
  clear?: boolean;
  /** Whether to re-render the picker */
  render?: boolean;
  /** Whether to auto-hide after setting */
  autohide?: boolean;
}

export interface UpdateOptions {
  /** Whether to auto-hide after update */
  autohide?: boolean;
}

export interface ExitEditModeOptions extends UpdateOptions {
  /** Whether to update the date from input field */
  update?: boolean;
}

/**
 * Date picker class
 */
export declare class Datepicker {
  /** The HTML element the datepicker is bound to */
  readonly element: HTMLElement;
  
  /** The input field element (undefined for inline pickers) */
  readonly inputField?: HTMLInputElement;
  
  /** Whether this is an inline picker */
  readonly inline: boolean;
  
  /** Configuration options */
  readonly config: Required<DatepickerOptions>;
  
  /** Currently selected dates as timestamps */
  dates: number[];
  
  /** The picker instance */
  readonly picker: any;
  
  /** Associated DateRangePicker instance (if any) */
  readonly rangepicker?: DateRangePicker;

  /**
   * Create a date picker
   * @param element - Element to bind the date picker to
   * @param options - Configuration options
   * @param rangepicker - DateRangePicker instance (internal use)
   */
  constructor(element: HTMLElement, options?: DatepickerOptions, rangepicker?: DateRangePicker);

  /**
   * Whether the picker is currently shown
   */
  get active(): boolean;

  /**
   * The picker DOM element
   */
  get pickerElement(): HTMLDivElement | undefined;

  /**
   * Format a date using the specified format and locale
   * @param date - Date to format
   * @param format - Format string or custom formatter
   * @param lang - Language code
   * @returns Formatted date string
   */
  static formatDate(date: Date | number, format: DateFormat, lang?: string): string;

  /**
   * Parse a date string using the specified format and locale
   * @param dateStr - Date string to parse
   * @param format - Format string or custom parser
   * @param lang - Language code
   * @returns Parsed date timestamp
   */
  static parseDate(dateStr: string | Date | number, format: DateFormat, lang?: string): number;

  /**
   * Available locales
   */
  static get locales(): { [key: string]: DatepickerLocale };

  /**
   * Update configuration options
   * @param options - Options to update
   */
  setOptions(options: Partial<DatepickerOptions>): void;

  /**
   * Show the picker
   */
  show(): void;

  /**
   * Hide the picker (not available for inline pickers)
   */
  hide(): void;

  /**
   * Destroy the datepicker instance
   * @returns The destroyed instance
   */
  destroy(): this;

  /**
   * Get the selected date(s)
   * @param format - Optional format string
   * @returns Selected date(s) or undefined if none selected
   */
  getDate(): Date | undefined;
  getDate(format: string): string | undefined;
  getDate<T extends boolean>(format: undefined): T extends true ? Date[] : Date | undefined;

  /**
   * Set selected date(s)
   * @param dates - Dates to select
   * @param options - Set date options
   */
  setDate(...args: [...(Date | number | string | Date[] | number[] | string[]), SetDateOptions?]): void;

  /**
   * Update dates from input field value (not available for inline pickers)
   * @param options - Update options
   */
  update(options?: UpdateOptions): void;

  /**
   * Refresh the picker display
   * @param target - Target to refresh ('picker', 'input', or both)
   * @param forceRender - Whether to force re-render
   */
  refresh(target?: string | boolean, forceRender?: boolean): void;

  /**
   * Enter edit mode (not available for inline pickers)
   */
  enterEditMode(): void;

  /**
   * Exit edit mode (not available for inline pickers)
   * @param options - Exit options
   */
  exitEditMode(options?: ExitEditModeOptions): void;
}

/**
 * Date range picker class
 */
export declare class DateRangePicker {
  /** The HTML element the date range picker is bound to */
  readonly element: HTMLElement;
  
  /** The input elements for start and end dates */
  readonly inputs: [HTMLInputElement, HTMLInputElement];
  
  /** The datepicker instances for start and end dates */
  readonly datepickers: [Datepicker, Datepicker];
  
  /** Whether to allow one-sided ranges */
  allowOneSidedRange: boolean;

  /**
   * Create a date range picker
   * @param element - Element containing the input fields
   * @param options - Configuration options
   */
  constructor(element: HTMLElement, options?: DateRangePickerOptions);

  /**
   * Get the selected date range
   */
  get dates(): [number | undefined, number | undefined] | undefined;

  /**
   * Update configuration options
   * @param options - Options to update
   */
  setOptions(options: Partial<DateRangePickerOptions>): void;

  /**
   * Destroy the date range picker instance
   * @returns The destroyed instance
   */
  destroy(): this;

  /**
   * Get the start and end dates
   * @param format - Optional format string
   * @returns Array with start and end dates
   */
  getDates(): [Date | undefined, Date | undefined];
  getDates(format: string): [string | undefined, string | undefined];

  /**
   * Set the start and end dates
   * @param rangeStart - Start date or clear option
   * @param rangeEnd - End date or clear option
   */
  setDates(
    rangeStart: Date | number | string | { clear: true },
    rangeEnd: Date | number | string | { clear: true }
  ): void;
}

// Event type declarations for better TypeScript support
declare global {
  interface HTMLElementEventMap {
    'changeDate': DatepickerEvent;
    'show': DatepickerEvent;
    'hide': DatepickerEvent;
  }
}

export { Datepicker, DateRangePicker };
