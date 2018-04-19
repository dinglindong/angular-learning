/**
 * Create By DingLindong on 2018/4/19
 */
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMBER_ANSWER = 'REMBER_ANSWER';
const mutations = {
    //点击进入下一题
    [ADD_ITEMNUM](state, num) {
        state.itemNum += num;
    },
    //记录答案
    [REMBER_ANSWER](state, id) {
        state.answerid.push(id);
    }
};
export default mutations;