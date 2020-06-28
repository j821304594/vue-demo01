import types from '@/store/types';

const authMut = {
   // start-mut
   [types.login]: function (state, param) {
      state.loginUser = param.user
   },
   [types.logout]: function (state, param) {
      state.loginUser = null
   }
   // end-mut
};

export default authMut;