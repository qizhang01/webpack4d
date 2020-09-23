import { RouteUri } from '@/router/config'

export interface IMenuNav {
    title: string
    uri?: RouteUri | string
    children?: IMenuNav[]
}

export const menuNav: IMenuNav[] = [
    {
        title: '权限控制',
        uri: RouteUri.Home,
    },
    {
        title: '赠险',
        children: [
            {
                title: '赠险配置',
                uri: RouteUri.PageSub1,
            },
            {
                title: '赠险二位码生成',
                uri: RouteUri.PageSub2,
            },
        ],
    },
    {
        title: '开发规范',
        uri: RouteUri.PageSub3,
    },
]
