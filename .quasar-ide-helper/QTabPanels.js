
/**
 * Quasar QTabPanels component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tab-panels|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTabPanels',
  props: {
    /**
     * Emitted when the component changes the model; This event _isn't_ fired if the model is changed externally; Is also used by v-model
     * @param {String|Number} value New current panel name 
     */      
    '@input': function (value) {},

    /**
     * Emitted before transitioning to a new panel
     * @param {String|Number} newVal Panel name towards transition is going 
     * @param {String|Number} oldVal Panel name from which transition is happening 
     */      
    '@before-transition': function (newVal,oldVal) {},

    /**
     * Emitted after component transitioned to a new panel
     * @param {String|Number} newVal Panel name towards transition has occurred 
     * @param {String|Number} oldVal Panel name from which transition has happened 
     */      
    '@transition': function (newVal,oldVal) {},
    /**
     * Model of the component defining the current panel's name; If a Number is used, it does not define the panel's index, but rather the panel's name which can also be an Integer; Either use this property (along with a listener for 'input' event) OR use the v-model directive.
     * @type {*}
     */
    value: {
    },
    /**
     * Equivalent to using Vue's native <keep-alive> component on the content
     * @type {Boolean}
     */
    keepAlive: {
      type: Boolean,
    },
    /**
     * Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names
     * @type {String|Array|RegExp}
     */
    keepAliveInclude: {
      type: [String,Array,RegExp],
    },
    /**
     * Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names
     * @type {String|Array|RegExp}
     */
    keepAliveExclude: {
      type: [String,Array,RegExp],
    },
    /**
     * Equivalent to using Vue's native max prop for <keep-alive>
     * @type {Number}
     */
    keepAliveMax: {
      type: Number,
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    animated: {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    infinite: {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    swipeable: {
      type: Boolean,
    },
    /**
     * Default transitions and swipe actions will be on the vertical axis
     * @type {Boolean}
     */
    vertical: {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionPrev: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionNext: {
      type: String,
    }
  }
}
