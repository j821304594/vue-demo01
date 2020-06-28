import types from '@/store/types';

const authAct = {
   // start-act
   [types.login]: async function ({ state, commit }, params) {
      // something...
       if(params.values.username == 'admin' && params.values.password == 'admin') {
          params.that.$router.push({'path':'/home'})
       }
      commit(types.login, params)
   },
   [types.logout]: async function ({ state, commit }, prams) {
      // something...
      commit(types.logout, null)
   }
   // end-act
};

export default authAct;