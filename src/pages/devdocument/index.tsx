import React, { useState, useEffect, useCallback } from 'react'
import { Tree, Layout, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './index.less'
import commonFetch from '@/ajax/index'
import envConfig from '@/enum/env'

const { Content, Sider } = Layout

interface IDevelopRuls {
    pkRule: string
    language: number
    ruleName: string
}

interface IMemoObject {
    [key: string]: {
        ruleDesc: string
        solution: string
    }
}
let memo = {} as IMemoObject
let expandedKey = [] as string[]

const PageContext: React.FC = () => {
    const arr = [
        {
            title: '开发规范',
            key: '0',
            children: [] as any[],
        },
    ]

    const [content, setContent] = useState([] as any[])
    const [solution, setSolution] = useState([] as any[])
    const [treeData, setTreeData] = useState(arr)
    const [expandedKeys, setExpandedKeys] = useState(expandedKey)
    const [isFetching, setIsFetching] = useState(false)

    const onSelect = (selectedKeys: any, info: any) => {
        const { pkRule } = info.node
        if (memo[pkRule]) {
            parseRules(memo[pkRule])
        } else {
            fetchItemData(pkRule)
        }
    }

    const fetchItemData = async (pkRule: string) => {
        setIsFetching(true)
        const res = await commonFetch(`${envConfig.qax}/file/detail?pkRule=${pkRule}&language=9`)
        setIsFetching(false)
        const { ruleDesc, solution } = res.detail
        memo[pkRule] = { ruleDesc, solution }
        parseRules(memo[pkRule])
    }

    const parseRules = (d: any) => {
        const ruleDescArr = d.ruleDesc.split('\n').map((item: string, index: number) => (
            <div className="desc-content-item" key={index}>
                {item}
            </div>
        ))
        const solutionArr = d.solution.split('\n').map((item: string, index: number) => (
            <div className="desc-content-item" key={index}>
                {item}
            </div>
        ))
        setContent(ruleDescArr)
        setSolution(solutionArr)
    }

    const formatData = (result: any) => {
        let d = [
            {
                title: '开发规范',
                key: '0',
                children: [
                    {
                        title: 'java',
                        key: '0-0',
                        children: result.map((item: IDevelopRuls, index: number) => ({
                            title: item.ruleName,
                            key: `0-0-${index}`,
                            pkRule: item.pkRule,
                        })),
                    },
                ],
            },
        ]
        return d
    }

    async function fetchData() {
        const result = await commonFetch(`${envConfig.qax}/file/resolver?language=9`)
        console.log(result)
        let temp = formatData(result['language-9'])
        setTreeData(temp)
        setExpandedKeys(['0-0-0'])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            <Sider width={300} className="layout-aside-devdocument">
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={expandedKeys}
                    onSelect={onSelect}
                    treeData={treeData}
                />
            </Sider>
            <Content>
                {isFetching ? (
                    <LoadingOutlined style={{ fontSize: 36 }} spin />
                ) : (
                    <>
                        <h1>规则描述</h1>
                        <div className="desc-content">{content}</div>
                        <h1 style={{ marginTop: 20 }}>解决方案</h1>
                        <div className="desc-content">{solution}</div>
                    </>
                )}
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
