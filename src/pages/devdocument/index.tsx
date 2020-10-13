import React, { useState } from 'react'
import { Tree, Layout, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.less'
import Content1 from './sub1'
import html from './html/0-1'
const { Content, Sider } = Layout

const PageContext: React.FC = () => {
    const [content, setContent] = useState(html)

    const onSelect = (selectedKeys: any, info: any) => {
        console.log('selected', selectedKeys, info)
        setContent(html)
    }

    return (
        <Layout>
            <Sider width={300} className="layout-aside-devdocument">
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={['0-0-0']}
                    onSelect={onSelect}
                    treeData={[
                        {
                            title: '开发规范',
                            key: '0',
                            children: [
                                {
                                    title: 'java',
                                    key: '0-0',
                                    children: [
                                        {
                                            title: '奇安信规则',
                                            key: '0-0-0',
                                        },
                                        {
                                            title: 'leaf',
                                            key: '0-0-1',
                                        },
                                        {
                                            title: 'leaf',
                                            key: '0-0-2',
                                        },
                                    ],
                                },
                                {
                                    title: 'parent 1-1',
                                    key: '0-1',
                                    children: [
                                        {
                                            title: 'leaf',
                                            key: '0-1-0',
                                        },
                                    ],
                                },
                                {
                                    title: 'parent 1-2',
                                    key: '0-2',
                                    children: [
                                        {
                                            title: 'leaf',
                                            key: '0-2-0',
                                        },
                                        {
                                            title: 'leaf',
                                            key: '0-2-1',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                />
            </Sider>
            <Content>
                {/* <div className="layout-devdocument-content">{Com ? <Com /> : null}</div> */}
                <iframe className="layout-devdocument-content" srcDoc={content}></iframe>
                <Button
                    type="primary"
                    className="layout-return-button"
                    onClick={() => {
                        history.go(-1)
                    }}
                >
                    返回主页
                </Button>
            </Content>
        </Layout>
    )
}

export default PageContext
