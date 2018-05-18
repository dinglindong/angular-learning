/**
 * Create By lnden on 2018/4/19
 */
const actions = {
    addNum({ commit, state }, item) {
        //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
        commit('REMBER_ANSWER', item);
        console.log('这是在actions里面输出的题目ID=> '+item.topic_answer_id,state.itemNum,state.itemDetail.length)
        if (state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM', 1);
        }
    },
    reduce({ commit }){
        commit('ADD_ITEMNUM', -1);
        commit('DELETE_ANSWER');
    },
    //初始化信息
    initializeData({ commit },data) {
        commit('INITIALIZE_DATA',data);
    }
};
export default actions;