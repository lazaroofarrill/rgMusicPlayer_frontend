
/**
 * Quasar QDate component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/date|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QDate',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {String|Array|Object} value New model value 
     * @param {'add-day'|'remove-day'|'add-range'|'remove-range'|'mask'|'locale'|'year'|'month'} reason Reason of the user interaction (what was picked) 
     * @param {{year : Number, month : Number, day : Number, from : {year : Number, month : Number, day : Number}, to : {year : Number, month : Number, day : Number}, changed : Boolean}} details Object of properties on the new model 
     */      
    '@input': function (value,reason,details) {},

    /**
     * Emitted when user navigates to a different month or year (and even when the model changes from an outside source)
     * @param {{year : Number, month : Number}} view Definition of the current view (year, month) 
     */      
    '@navigation': function (view) {},

    /**
     * User has started a range selection
     * @param {{year : Number, month : Number, day : Number}} from Definition of date from where the range begins 
     */      
    '@range-start': function (from) {},

    /**
     * User has ended a range selection
     * @param {{from : {year : Number, month : Number, day : Number}, to : {year : Number, month : Number, day : Number}}} range Definition of the range 
     */      
    '@range-end': function (range) {},
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * Date(s) of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {String|Array|Object}
     */
    value: {
      type: [String,Array,Object],
      required: true
    },
    /**
     * Display the component in landscape mode
     * @type {Boolean}
     */
    landscape: {
      type: Boolean,
    },
    /**
     * Mask (formatting string) used for parsing and formatting value
     * @type {String}
     */
    mask: {
      type: String,
    },
    /**
     * Locale formatting options
     * @type {{days : Array, daysShort : Array, months : Array, monthsShort : Array}}
     */
    locale: {
      type: Object,
    },
    /**
     * Specify calendar type
     * @type {'gregorian'|'persian'}
     */
    calendar: {
      type: String,
    },
    /**
     * Specify calendar type
     * @type {'gregorian'|'persian'}
     */
    'calendar="gregorian"': {
      type: Boolean,
    },
    /**
     * Specify calendar type
     * @type {'gregorian'|'persian'}
     */
    'calendar="persian"': {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * When specified, it overrides the default header title; Makes sense when not in 'minimal' mode
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * When specified, it overrides the default header subtitle; Makes sense when not in 'minimal' mode
     * @type {String}
     */
    subtitle: {
      type: String,
    },
    /**
     * The default year and month to display (in YYYY/MM format) when model is unfilled (undefined or null); Please ensure it is within the navigation min/max year-month (if using them)
     * @type {String}
     */
    defaultYearMonth: {
      type: String,
    },
    /**
     * The view which will be displayed by default
     * @type {'Calendar'|'Months'|'Years'}
     */
    defaultView: {
      type: String,
    },
    /**
     * The view which will be displayed by default
     * @type {'Calendar'|'Months'|'Years'}
     */
    'defaultView="Calendar"': {
      type: Boolean,
    },
    /**
     * The view which will be displayed by default
     * @type {'Calendar'|'Months'|'Years'}
     */
    'defaultView="Months"': {
      type: Boolean,
    },
    /**
     * The view which will be displayed by default
     * @type {'Calendar'|'Months'|'Years'}
     */
    'defaultView="Years"': {
      type: Boolean,
    },
    /**
     * Show the years selector in months view
     * @type {Boolean}
     */
    yearsInMonthView: {
      type: Boolean,
    },
    /**
     * A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not); If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {Array|Function}
     */
    events: {
      type: [Array,Function],
    },
    /**
     * Color name (from the Quasar Color Palette); If using a function, it receives the date as a String and must return a String (color for the received date); If using a function then for best performance, reference it from your scope and do not define it inline
     * @type {String|Function}
     */
    eventColor: {
      type: [String,Function],
    },
    /**
     * Optionally configure the days that are selectable; If using a function, it receives the date as a String and must return a Boolean (is date acceptable or not); If using a function then for best performance, reference it from your scope and do not define it inline; Incompatible with 'range' prop
     * @type {Array|Function}
     */
    options: {
      type: [Array,Function],
    },
    /**
     * Lock user from navigating below a specific year+month (in YYYY/MM format); This prop is not used to correct the model; You might want to also use 'default-year-month' prop
     * @type {String}
     */
    navigationMinYearMonth: {
      type: String,
    },
    /**
     * Lock user from navigating above a specific year+month (in YYYY/MM format); This prop is not used to correct the model; You might want to also use 'default-year-month' prop
     * @type {String}
     */
    navigationMaxYearMonth: {
      type: String,
    },
    /**
     * Remove ability to unselect a date; It does not apply to selecting a range over already selected dates
     * @type {Boolean}
     */
    noUnset: {
      type: Boolean,
    },
    /**
     * Sets the day of the week that is considered the first day (0 - Sunday, 1 - Monday, ...); This day will show in the left-most column of the calendar
     * @type {String|Number}
     */
    firstDayOfWeek: {
      type: [String,Number],
    },
    /**
     * Display a button that selects the current day
     * @type {Boolean}
     */
    todayBtn: {
      type: Boolean,
    },
    /**
     * Don’t display the header
     * @type {Boolean}
     */
    minimal: {
      type: Boolean,
    },
    /**
     * Allow multiple selection; Model must be Array
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
    },
    /**
     * Allow range selection; Partial compatibility with 'options' prop: selected ranges might also include 'unselectable' days
     * @type {Boolean}
     */
    range: {
      type: Boolean,
    },
    /**
     * Emit model when user browses month and year too; ONLY for single selection (non-multiple, non-range)
     * @type {Boolean}
     */
    emitImmediately: {
      type: Boolean,
    }
  }
}
