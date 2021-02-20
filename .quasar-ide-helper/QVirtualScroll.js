
/**
 * Quasar QVirtualScroll component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/virtual-scroll|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QVirtualScroll',
  props: {
    /**
     * Emitted when the virtual scroll occurs
     * @param {{index : Number, from : Number, to : Number, direction : 'increase'|'decrease', ref : Object}} details Object of properties on the new scroll position 
     */      
    '@virtual-scroll': function (details) {},
    /**
     * Make virtual list work in horizontal mode
     * @type {Boolean}
     */
    virtualScrollHorizontal: {
      type: Boolean,
    },
    /**
     * Minimum number of items to render in the virtual list
     * @type {Number|String}
     */
    virtualScrollSliceSize: {
      type: [Number,String],
    },
    /**
     * Ratio of number of items in visible zone to render before it
     * @type {Number|String}
     */
    virtualScrollSliceRatioBefore: {
      type: [Number,String],
    },
    /**
     * Ratio of number of items in visible zone to render after it
     * @type {Number|String}
     */
    virtualScrollSliceRatioAfter: {
      type: [Number,String],
    },
    /**
     * Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item
     * @type {Number|String}
     */
    virtualScrollItemSize: {
      type: [Number,String],
    },
    /**
     * Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision
     * @type {Number|String}
     */
    virtualScrollStickySizeStart: {
      type: [Number,String],
    },
    /**
     * Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision
     * @type {Number|String}
     */
    virtualScrollStickySizeEnd: {
      type: [Number,String],
    },
    /**
     * The number of columns in the table (you need this if you use table-layout: fixed)
     * @type {Number|String}
     */
    tableColspan: {
      type: [Number,String],
    },
    /**
     * The type of content: list (default) or table
     * @type {'list'|'table'}
     */
    type: {
      type: String,
    },
    /**
     * The type of content: list (default) or table
     * @type {'list'|'table'}
     */
    'type="list"': {
      type: Boolean,
    },
    /**
     * The type of content: list (default) or table
     * @type {'list'|'table'}
     */
    'type="table"': {
      type: Boolean,
    },
    /**
     * Available list items that will be passed to the scoped slot; For best performance freeze the list of items; Required if 'itemsFn' is not supplied
     * @type {Array}
     */
    items: {
      type: Array,
    },
    /**
     * Number of available items in the list; Required and used only if 'itemsFn' is provided
     * @type {Number}
     */
    itemsSize: {
      type: Number,
    },
    /**
     * Function to return the scope for the items to be displayed; Should return an array for items starting from 'from' index for size length; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    itemsFn: {
      type: Function,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    }
  }
}
