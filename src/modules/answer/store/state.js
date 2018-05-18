/**
 * Create By lnden on 2018/4/19
 */
const state = {
    itemNum: 1, // *第几题
    level: '第一周', //活动周数
    allTime: 0,  //总共用时
    timer: '', //定时器
    itemDetail: [
        {
        "topic_id": 20,
        "active_topic_id": 4,
        "type": "ONE",
        "topic_name": "题目一",
        "active_id": 1,
        "active_title": "请选择：图中XXX是一级股性关节炎？",
        "active_img": "http://img1.imgtn.bdimg.com/it/u=3020063939,1371374340&fm=27&gp=0.jpg",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 1,
            "topic_id": 20,
            "answer_name": "第一题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 2,
            "topic_id": 20,
            "answer_name": "正确答案一",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 3,
            "topic_id": 20,
            "answer_name": "第一题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 4,
            "topic_id": 20,
            "answer_name": "第一题答题选项",
            "is_standard_answer": 1
        }]
    },
        {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目二",
        "active_id": 1,
        "active_title": "请选择：图中XXX是二级股性关节炎？",
        "active_img": "http://img.zcool.cn/community/01da6d5824435ea84a0e282b675582.jpg",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 5,
            "topic_id": 21,
            "answer_name": "第二题答题选项",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 6,
            "topic_id": 21,
            "answer_name": "正确答案二",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 7,
            "topic_id": 21,
            "answer_name": "第二题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 8,
            "topic_id": 21,
            "answer_name": "第二题答题选项",
            "is_standard_answer": 0
        }]
    },
        {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目三",
        "active_id": 1,
        "active_title": "请选择：图中XXX是三级股性关节炎？",
        "active_img": "http://img.zcool.cn/community/014b0458101bf1a84a0e282b4f4c1c.jpg",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 9,
            "topic_id": 21,
            "answer_name": "第三题答题选项",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 10,
            "topic_id": 21,
            "answer_name": "第三题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 11,
            "topic_id": 21,
            "answer_name": "第三题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 12,
            "topic_id": 21,
            "answer_name": "正确答案三",
            "is_standard_answer": 0
        }]
    },
        {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目四",
        "active_id": 1,
        "active_title": "请选择：图中XXX是四级股性关节炎？",
        "active_img": "http://img.zcool.cn/community/0120ce572ad2d232f875a3995fe697.jpg",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 13,
            "topic_id": 21,
            "answer_name": "正确答案四",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 14,
            "topic_id": 21,
            "answer_name": "第四题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 15,
            "topic_id": 21,
            "answer_name": "第四题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 16,
            "topic_id": 21,
            "answer_name": "第四题答题选项",
            "is_standard_answer": 0
        }]
    },
        {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目五",
        "active_id": 1,
        "active_title": "请选择：图中XXX是五级股性关节炎？",
        "active_img": "http://img.zcool.cn/community/01a0a859b7fe5aa801207534e6f7fc.jpg@2o.jpg",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 17,
            "topic_id": 21,
            "answer_name": "第五题答题选项",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 18,
            "topic_id": 21,
            "answer_name": "正确答案五",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 19,
            "topic_id": 21,
            "answer_name": "第五题答题选项",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 20,
            "topic_id": 21,
            "answer_name": "第五题答题选项",
            "is_standard_answer": 0
        }]
    },
        {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五",
            "active_id": 1,
            "active_title": "请选择：图中XXX是六级股性关节炎？",
            "active_img": "http://img.zcool.cn/community/01cb7c59a7fceea801211d255588d3.png@2o.jpg",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 21,
                "topic_id": 21,
                "answer_name": "第六题答题选项",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 22,
                "topic_id": 21,
                "answer_name": "正确答案六",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 23,
                "topic_id": 21,
                "answer_name": "第六题答题选项",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 24,
                "topic_id": 21,
                "answer_name": "第六题答题选项",
                "is_standard_answer": 0
            }]
        },
        {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五",
            "active_id": 1,
            "active_title": "请选择：图中XXX是七级股性关节炎？",
            "active_img": "http://img.zcool.cn/community/01a37059a8c927a801211d25c0cd3b.jpg",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 25,
                "topic_id": 21,
                "answer_name": "第七题答题选项",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 26,
                "topic_id": 21,
                "answer_name": "第八题答题选项",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 27,
                "topic_id": 21,
                "answer_name": "第七题答题选项",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 28,
                "topic_id": 21,
                "answer_name": "正确答案七",
                "is_standard_answer": 0
            }]
        },
        {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五",
            "active_id": 1,
            "active_title": "请选择：图中XXX是八级股性关节炎？",
            "active_img": "http://img0.imgtn.bdimg.com/it/u=3725111314,3204839544&fm=27&gp=0.jpg",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 29,
                "topic_id": 21,
                "answer_name": "第八题答题选项",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 30,
                "topic_id": 21,
                "answer_name": "第八题答题选项",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 31,
                "topic_id": 21,
                "answer_name": "正确答案八",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 32,
                "topic_id": 21,
                "answer_name": "第八题答题选项",
                "is_standard_answer": 0
            }]
        },
        {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五",
            "active_id": 1,
            "active_title": "请选择：图中XXX是九级股性关节炎？",
            "active_img": "http://img.zcool.cn/community/0189ca5a3b15eca801201a1f9e93ed.jpg@2o.jpg",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 33,
                "topic_id": 21,
                "answer_name": "第九题答题选项",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 34,
                "topic_id": 21,
                "answer_name": "正确答案九",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 35,
                "topic_id": 21,
                "answer_name": "第九题答题选项",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 36,
                "topic_id": 21,
                "answer_name": "第九题答题选项",
                "is_standard_answer": 0
            }]
        },
        {
            "topic_id": 21,
            "active_topic_id": 4,
            "type": "MORE",
            "topic_name": "题目五",
            "active_id": 1,
            "active_title": "请选择：图中XXX是十级股性关节炎？",
            "active_img": "http://img.zcool.cn/community/0115c759a8c8e9a8012028a9208dda.jpg@1280w_1l_2o_100sh.png",
            "active_topic_phase": "第一周",
            "active_start_time": "1479139200",
            "active_end_time": "1482163200",
            "topic_answer": [{
                "topic_answer_id": 37,
                "topic_id": 21,
                "answer_name": "第十题答题选项",
                "is_standard_answer": 1
            }, {
                "topic_answer_id": 38,
                "topic_id": 21,
                "answer_name": "正确答案十",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 39,
                "topic_id": 21,
                "answer_name": "第十题答题选项",
                "is_standard_answer": 0
            }, {
                "topic_answer_id": 40,
                "topic_id": 21,
                "answer_name": "第十题答题选项",
                "is_standard_answer": 0
            }]
        }
    ],
    answerArr: [], //答案id*
};

export default state