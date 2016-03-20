/**
 * Created by freeman on 16-3-20.
 */
const key = 'VUE-CHAT-v1';

if (!localStorage.getItem(key)) {
    let now = new Date();

    let data = {
        //user
        user: {
            id: 1,
            name: 'Zidaneaa',
            img: 'dist/images/1.jpg'
        },
        userList: [
            {
                id: 2,
                name: '示例介绍',
                img: 'dist/images/2.png'
            },
            {
                id: 3,
                name: 'webpack',
                img: 'dist/images/3.jpg'
            }
        ],
        sessionList:[
            {
                userId: 2,
                messages: [
                    {
                        text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
                        date: now
                    },
                    {
                        text: '项目地址: https://github.com/zidaneaa/chat',
                        date: now
                    }
                ]
            },
            {
                userId: 3,
                messages: []
            }
        ]
    };
    localStorage.setItem(key,JSON.stringify(data));
}

export default{
    fetch(){
        return JSON.parse(localStorage.getItem(key));
    },
    save(store){
        localStorage.setItem(key,JSON.stringify(store));
    }
}