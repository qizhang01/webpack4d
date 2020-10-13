import { RouteUri } from '@/router/config'

export interface IMenuNav {
    title: string
    uri?: RouteUri | string
    children?: IMenuNav[]
}

export const menuNav: IMenuNav[] = [
    {
        title: '赠险相关',
        children: [
            {
                title: '中台赠险配置',
                uri: RouteUri.PageSub1,
            },
            {
                title: '个性化赠险配置',
                uri: RouteUri.PageSub3,
            },
            {
                title: '赠险二位码生成',
                uri: RouteUri.PageSub2,
            },
            {
                title: '配置查询',
                uri: RouteUri.PageSub4,
            },
        ],
    },
    {
        title: '开发规范',
        uri: RouteUri.devDocument,
    },
    {
        title: '睿康相关',
        children: [
            {
                title: '睿康配置',
                uri: RouteUri.rkConfig,
            },
        ],
    },
    {
        title: '权限控制',
        uri: RouteUri.Home,
    },
]
