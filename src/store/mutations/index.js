// start-import
import authMut from './authMut'
// end-import

/**
 * Vuex Store Mutations
 *
 * @constant
 * @type {object}
 * @see {@link https://vuex.vuejs.org/en/mutations.html|Vuex Mutations}
 */

const mutations = {
   /**
      * Saves the initial state for the redo/undo functionality
      */
   initializeState: function (state) {
      console.debug('Base state saved');
   },

   // start-mutations
   ...authMut
   // end-mutations
};

export default mutations;
