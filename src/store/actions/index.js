// start-import
import authAct from './authAct'
// end-import

/**
 * Vuex Store Actions
 *
 * @constant
 * @type {object}
 * @see {@link https://vuex.vuejs.org/en/actions.html|Vuex Actions}
 */

const actions = {
   // start-actions
   ...authAct
   // end-actions
};

export default actions;
