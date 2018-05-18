/**
 * Create By lnden on 2018/4/19
 */

const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMBER_ANSWER = 'REMBER_ANSWER';
const DELETE_ANSWER = 'DELETE_ANSWER';
const INITIALIZE_DATA = 'INITIALIZE_DATA';


const mutations = {
    //点击进入下一题
    [ADD_ITEMNUM](state, num) {
        state.itemNum += num;
    },
    //记录答案信息
    [REMBER_ANSWER](state, item) {
        state.answerArr.push({id:item.topic_answer_id,title:item.answer_name,index:item.index});
        console.log(state.answerArr,22222222)
    },
    //删除记录答案信息
    [DELETE_ANSWER](state) {
        state.answerArr.pop({});
    },
    //进行初始化记录数据
    [INITIALIZE_DATA](state,data) {
        state.itemNum = 1;
        state.itemDetail = data;
        state.answerArr = [];
    }
};
export default mutations;