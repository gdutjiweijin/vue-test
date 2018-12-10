import * as types from './mutation-types.js';
// new 获取个性化配置
export const getUerName = (context) => {
  // 可通过一步获取userName
  // 这里不做演示 就把userName 直接赋值为jiweijin了
  let userName = 'jiweijin'
  context.commit(types.MODIFY_USERNAME, userName);
};
