/**
  * api接口的统一出口
  */
// 文章模块接口
import article from '@/api/article';
// 其他模块的接口……

// 导出接口
export default {
    article,
    // ……
}



// 栗子

// methods: {
//     onLoad(id) {
//         this.$api.article.articleDetail(id, {
//             params: 123
//         }).then(res=> {
//             // 执行某些操作
//         })
//     }
// }
