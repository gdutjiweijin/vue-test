import * as types from './mutation-types.js';

export default {
  // 添加用户名
  [types.MODIFY_USERNAME](state, userName) {
    state.userName = userName;
  }
};
