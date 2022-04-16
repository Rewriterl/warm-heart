//框架核心配置
import ColorUI from '../mp-cu/main'

export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        footer: false,
        text: 1,
        tabBar: [
            {
                title: '',
                icon: 'my-logo',
                curIcon: 'my-logo',
                url: '/pages/index/index',
                type: 'tab'
            },
            {
                title: '购物',
                icon: 'cicon-store-2-o',
                curIcon: 'cicon-store-2-o',
                url: '/pages/shop/shop',
                type: 'tab'
            },
            {
                title: '动态',
                icon: 'cicon-upstage',
                curIcon: 'cicon-upstage',
                url: '/pages/moment/moment',
                type: 'tab'
            },
            {
                title: '消息',
                icon: 'cicon-chat-o',
                curIcon: 'cicon-chat-o',
                url: '/pages/message/message',
                type: 'tab'
            },
            {
                title: '我家',
                icon: 'cicon-home-o',
                curIcon: 'cicon-home-o',
                url: '/pages/home/home',
                type: 'tab'
            }],
    }
})
