webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(88);var r=t(14)(t(48),t(96),"data-v-647e008b",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-35c047fd",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-22ce9519",null);n.exports=r.exports},44:function(n,e,t){t(87);var r=t(14)(t(47),t(95),"data-v-53c8d54c",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),a=t.n(i),s=t(24),u=t.n(s),c=t(42),l=t.n(c),d=t(41),h=t.n(d),p=t(40);t.n(p);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:h.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是南方。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"南方\n====\n\n坐标：湖南长沙。\n\n资深软件工程师，资深产品经理，高级项目经理。现为自由职业。\n\n[下载离线简历](http://www.sitexa.org/anires/static/resume.pdf)\n\n技能\n====\n\n数据库设计\n----\n  - 结构化数据库设计\n  - noSQL设计\n\n后端开发\n----\n  - 用户管理\n  - 单点登录\n  - 第三方登录\n  - 权限管理\n  - 交易系统\n  - 支付系统\n  - 社区系统\n  - 博客系统\n  - 公众号开发\n  - 小程序开发\n  - API接口开发\n\n前端开发\n----\n  - Web前端开发\n  - 移动终端(Native App, Hybrid App)\n\n产品设计\n----\n  - 智慧旅游项目\n  - 运动健康云平台\n  - 社区支持农业O2O项目\n  - 省级环境监控平台\n  - 高速公路异地处罚系统\n  - 环保局办公自动化系统\n  - 保险公司数据迁移项目\n  - 啤酒厂供应链项目\n  - 货运代理系统\n  - 集装箱管理系统\n  - 滞期费管理项目\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n工作经历\n====\n\n1. 湖南融耀健康管理有限公司\n2. 湖南三英特旅游智能技术有限公司\n3. 合肥蓝盾科技有限公司\n4. 上海易保网络有限公司\n5. 厦门海环计算机软件有限公司\n\n教育经历\n====\n\n1. 华东理工大学 环境工程学士\n2. 厦门大学 系统工程硕士\n\n文章\n====\n\n* [故土难离（我的父亲母亲）](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [油腻腻的中年（小诗）](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [生命（老四们的蝼蚁人生）](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [大健康商业模式](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [社区社交商业模型](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n链接\n====\n\n* [GitHub](https://github.com/sitexa)\n* [技术博客](http://www.sitexa.org)\n* [南方时代](http://www.sitexa.net)\n* [神秘湘鄂西](http://www.sitexa.cn)\n\n联系方式\n====\n\n* 电话：18673107430\n* 微信：18673107430\n* 邮箱：xnpeng@163.com\n\n离线简历\n----\n\n[下载简历](http://www.sitexa.org/anires/static/resume.pdf)\n\n鸣谢\n====\n\n* 五一节结束了，我借此页面跟大家说一声感谢。\n* 这段时间，我有些诚煌诚恐，无地自容。我的经历都是一些小公司的软件开发，做着做着就成了Team leader，做过架构、产品、管理，做了好几个行业，技术栈全而不深。\n* 到底适合做什么岗位，我也不好定位，其实也没得选择。除了美工不会做，其他的都会点。近几年，主要在JVM平台上做开发，特别是自(shi)由(ye)之后，我主要学习了Kotlin和NodeJS相关技术，同时也玩玩Python和GoLang。\n* 自认为学习能力强，追求完美，不管是商业模式，还是产品设计，或者技术架构，以及代码开发，都追求优美。但都被残酷的现实挤压得很骨感。\n* 一直以来，我对社交和电商很感兴趣，伴随着QQ和微信的成长、体验着阿里和京东的发展，见证了美团和大众点评的成功，思考过Facebook、twitter、YouTube、Snapchat、Whatsapp、Medium为什么在国外能够斗争发展，对一些新模式新技术比如共享单车、区块链有些关注，因为自由嘛，不受约束地接触各种技术（玩具）。\n* 在社交领域，腾讯独霸天下20年，在电商领域，毫无疑问，是阿里的天下，虽有京东、苏宁等后起之秀，但都没有革命性的模式或产品。美团在团购领域的成功，既迎合了中国消费者的心理，也强化了这种心理。这些公司和老板都是我无比崇拜的IT英雄！\n* 社交是一种形式，电商是变现模式，将二者结合起来会是一个什么样子呢？很多探索者已经在理论上和实践上做过很多尝试，有人号称社交电商，我不知对不对。\n* 我的思考是这样的，陌生社交和熟人社交之间有一个巨大的中间地带，即半生不熟的社区社交（园区社交），目前QQ群和微信群在承担这个工作，实际上不能满足现实需求。\n* 阿里电商（单中心）和微商（无中心）电商之间存在着一个巨大的中间地带，即社区电商（多中心），虽然有很多个创业团队做过多年的尝试，比如小区无忧，社区001，国安社区等等，都投入了大量资金，但我看不到什么革命性的模式。\n* 我的想法是用社交带来流量，通过电商变现。我是不是有点异想天开？\n* 有很多企业向我发出了面试邀请，有很多创业团队向我伸出了橄榄枝，一些朋友给我提出非常好的建议，还有很多同行同学们希望跟我进行技术交流，甚至有些企业问我能否承接外包业务。\n* 在此，我要对所有的所有，说一声谢谢，谢谢你们对我的关心和支持！有你们的存在，让我对明天充满希望，对未来充满信心！不管有没有找到合适的工作，我认识了一群朋友，我非常满意！\n* 我回复了一些朋友的信息，还有很多朋友的信息我没能及时回复，在此，我表示深深的歉意！\n\n感谢名单（不完全）\n====\n- 北京肿瘤康复会\n- 珠海紫鸳无人机\n- 腾讯大燕网\n- 广州游戏团队JacobyTong\n- 长沙领路教育\n- 京东项目组\n- 北京拉勾网\n- 北京神策大数据\n- 深圳珍爱网\n- 北京途家(类似airbnb 项目)\n- 北京嘉楠捷思区块链\n- 成都muslog(玩音乐)团队\n- 深圳某游戏公司\n- 广州某游戏公司\n- 上海某广告公司\n- 中通快运\n- 今日头条\n- 福州肆壹壹科技\n- 河南某科技公司\n- 青岛某智能电视公司\n- 上海某直播公司\n- 衡阳某广告公司(腾讯广告)\n- 上海某芯片公司\n- 长沙某机械公司\n- 北京美甲帮\n- 深圳某新零售公司\n- 阿里钉钉\n- 搜狗推广\n- 苏州某互联网公司\n- 北京中华万年历\n- 上海优客工场\n- 长沙超G名片\n- 上海化时信息技术\n- 长沙快智科技\n- 长沙机械之家\n- 长沙奥联\n- 广州神马优选\n- 上海复星集团\n- 北京永洪科技\n- 个推公司\n- 安徽国药医疗科技\n- 昆山某区块链公司\n- 中山某文化传媒公司\n- 脉脉公司\n- 深圳声博士\n- 北京亲见\n- 奇点金服\n- 米柚生活\n- 大众点评\n- 邯郸某农产品电商公司\n- 图灵出版\n- 北京牛顿区块链\n- 深圳际客国际\n- 某智慧旅游公司\n- 厦大粤港澳青创会\n- 北汽集团\n- 成都某社交产品\n- 北京swie.io工业4.0\n- 掘金团队\n- 饿了么华南地区\n- 世联行\n- 阿里电商SaaS平台\n- 上海fordeal出海电商\n- 北京某互联网保险\n- 上海艾比特\n- 北京船运帮\n- 蚂蚁金服\n- 上海高校配餐\n- 有赞商城\n- 上海airwallex\n- 上海唯柚商城\n- 京东某项目\n- 北京海唐新媒\n- 上海好贷网\n- 北京弥财\n- 广州某区块链和人工智能团队\n- 云鸟科技\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(a.a.mark(function e(){var r,s,u,c,l,d=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=s-r.length,this.currentStyle.length<s?(c=this.currentStyle.length-u,l=r.substring(c,c+1)||" ",this.currentStyle+=l,"\n"===r.substring(c-1,c)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),a=t.n(i),s=t(24),u=t.n(s),c=t(42),l=t.n(c),d=t(41),h=t.n(d),p=t(40);t.n(p);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:h.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是南方。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"南方\n====\n坐标：湖南长沙。\n\n资深软件工程师，资深产品经理，高级项目经理。现为自由职业。\n\n[下载离线简历](http://www.sitexa.org/anires/static/resume.pdf)\n\n技能\n====\n\n数据库设计\n----\n  - 结构化数据库设计\n  - noSQL设计\n\n后端开发\n----\n  - 用户管理\n  - 单点登录\n  - 第三方登录\n  - 权限管理\n  - 交易系统\n  - 支付系统\n  - 社区系统\n  - 博客系统\n  - 公众号开发\n  - 小程序开发\n  - API接口\n\n前端开发\n----\n  - Web前端开发\n  - 移动终端(Native App, Hybrid App)\n\n产品设计\n----\n  - 智慧旅游项目\n  - 运动健康云平台\n  - 社区支持农业O2O项目\n  - 省级环境监控平台\n  - 高速公路异地处罚系统\n  - 环保局办公自动化系统\n  - 保险公司数据迁移项目\n  - 啤酒厂供应链项目\n  - 货运代理系统\n  - 集装箱管理系统\n  - 滞期费管理项目\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n工作经历\n====\n\n1. 湖南融耀健康管理有限公司\n2. 湖南三英特旅游智能技术有限公司\n3. 合肥蓝盾科技有限公司\n4. 上海易保网络有限公司\n5. 厦门海环计算机软件有限公司\n\n教育经历\n====\n\n1. 华东理工大学 环境工程学士\n2. 厦门大学 系统工程硕士\n\n文章\n====\n\n* [故土难离（我的父亲母亲）](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [油腻腻的中年（小诗）](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [生命（老四们的蝼蚁人生）](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [大健康商业模式](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [社区社交商业模型](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n链接\n====\n\n* [GitHub](https://github.com/sitexa)\n* [技术博客](http://www.sitexa.org)\n* [南方时代](http://www.sitexa.net)\n* [神秘湘鄂西](http://www.sitexa.cn)\n\n联系方式\n====\n\n* 电话：18673107430\n* 微信：18673107430\n* 邮箱：xnpeng@163.com\n\n离线简历\n----\n\n[下载简历](http://www.sitexa.org/anires/static/resume.pdf)\n\n鸣谢\n====\n\n* 五一节结束了，我借此页面跟大家说一声感谢。\n* 这段时间，我有些诚煌诚恐，无地自容。我的经历都是一些小公司的软件开发，做着做着就成了Team leader，做过架构、产品、管理，做了好几个行业，技术栈全而不深。\n* 到底适合做什么岗位，我也不好定位，其实也没得选择。除了美工不会做，其他的都会点。近几年，主要在JVM平台上做开发，特别是自(shi)由(ye)之后，我主要学习了Kotlin和NodeJS相关技术，同时也玩玩Python和GoLang。\n* 自认为学习能力强，追求完美，不管是商业模式，还是产品设计，或者技术架构，以及代码开发，都追求优美。但都被残酷的现实挤压得很骨感。\n* 一直以来，我对社交和电商很感兴趣，伴随着QQ和微信的成长、体验着阿里和京东的发展，见证了美团和大众点评的成功，思考过Facebook、twitter、YouTube、Snapchat、Whatsapp、Medium为什么在国外能够斗争发展，对一些新模式新技术比如共享单车、区块链有些关注，因为自由嘛，不受约束地接触各种技术（玩具）。\n* 在社交领域，腾讯独霸天下20年，在电商领域，毫无疑问，是阿里的天下，虽有京东、苏宁等后起之秀，但都没有革命性的模式或产品。美团在团购领域的成功，既迎合了中国消费者的心理，也强化了这种心理。这些公司和老板都是我无比崇拜的IT英雄！\n* 社交是一种形式，电商是变现模式，将二者结合起来会是一个什么样子呢？很多探索者已经在理论上和实践上做过很多尝试，有人号称社交电商，我不知对不对。\n* 我的思考是这样的，陌生社交和熟人社交之间有一个巨大的中间地带，即半生不熟的社区社交（园区社交），目前QQ群和微信群在承担这个工作，实际上不能满足现实需求。\n* 阿里电商（单中心）和微商（无中心）电商之间存在着一个巨大的中间地带，即社区电商（多中心），虽然有很多个创业团队做过多年的尝试，比如小区无忧，社区001，国安社区等等，都投入了大量资金，但我看不到什么革命性的模式。\n* 我的想法是用社交带来流量，通过电商变现。我是不是有点异想天开？\n* 有很多企业向我发出了面试邀请，有很多创业团队向我伸出了橄榄枝，一些朋友给我提出非常好的建议，还有很多同行同学们希望跟我进行技术交流，甚至有些企业问我能否承接外包业务。\n* 在此，我要对所有的所有，说一声谢谢，谢谢你们对我的关心和支持！有你们的存在，让我对明天充满希望，对未来充满信心！不管有没有找到合适的工作，我认识了一群朋友，我非常满意！\n* 我回复了一些朋友的信息，还有很多朋友的信息我没能及时回复，在此，我表示深深的歉意！\n\n感谢名单（不完全）\n====\n- 北京肿瘤康复会\n- 珠海紫鸳无人机\n- 腾讯大燕网\n- 广州游戏团队JacobyTong\n- 长沙领路教育\n- 京东项目组\n- 北京拉勾网\n- 北京神策大数据\n- 深圳珍爱网\n- 北京途家(类似airbnb 项目)\n- 北京嘉楠捷思区块链\n- 成都muslog(玩音乐)团队\n- 深圳某游戏公司\n- 广州某游戏公司\n- 上海某广告公司\n- 中通快运\n- 今日头条\n- 福州肆壹壹科技\n- 河南某科技公司\n- 青岛某智能电视公司\n- 上海某直播公司\n- 衡阳某广告公司(腾讯广告)\n- 上海某芯片公司\n- 长沙某机械公司\n- 北京美甲帮\n- 深圳某新零售公司\n- 阿里钉钉\n- 搜狗推广\n- 苏州某互联网公司\n- 北京中华万年历\n- 上海优客工场\n- 长沙超G名片\n- 上海化时信息技术\n- 长沙快智科技\n- 长沙机械之家\n- 长沙奥联\n- 广州神马优选\n- 上海复星集团\n- 北京永洪科技\n- 个推公司\n- 安徽国药医疗科技\n- 昆山某区块链公司\n- 中山某文化传媒公司\n- 脉脉公司\n- 深圳声博士\n- 北京亲见\n- 奇点金服\n- 米柚生活\n- 大众点评\n- 邯郸某农产品电商公司\n- 图灵出版\n- 北京牛顿区块链\n- 深圳际客国际\n- 某智慧旅游公司\n- 厦大粤港澳青创会\n- 北汽集团\n- 成都某社交产品\n- 北京swie.io工业4.0\n- 掘金团队\n- 饿了么华南地区\n- 世联行\n- 阿里电商SaaS平台\n- 上海fordeal出海电商\n- 北京某互联网保险\n- 上海艾比特\n- 北京船运帮\n- 蚂蚁金服\n- 上海高校配餐\n- 有赞商城\n- 上海airwallex\n- 上海唯柚商城\n- 京东某项目\n- 北京海唐新媒\n- 上海好贷网\n- 北京弥财\n- 广州某区块链和人工智能团队\n- 云鸟科技\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(a.a.mark(function e(){var r,s,u,c,l,d=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:s=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=s-r.length,this.currentStyle.length<s?(c=this.currentStyle.length-u,l=r.substring(c,c+1)||" ",this.currentStyle+=l,"\n"===r.substring(c-1,c)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),a=t(44),s=t.n(a),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:s.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.9d99cd45c85fabfa8258.js.map