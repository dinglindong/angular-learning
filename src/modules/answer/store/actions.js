/**
 * Create By DingLindong on 2018/4/19
 */
const actions = {
    addNum({ commit, state }, id) {
        //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
        commit('REMBER_ANSWER', id);
        if (state.itemNum < state.itemDetail.length) {
            console.log(11111111111111)
            commit('ADD_ITEMNUM', 1);
        }
    },
};
export default actions;