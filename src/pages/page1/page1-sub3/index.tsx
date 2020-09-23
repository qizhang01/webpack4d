import * as React from 'react'
import { PageChild } from '@/pages/page1/page1-sub3/page-child'
import { SizeContext } from './size-context'

const { useState } = React

const PageContext: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <SizeContext.Provider value={{ count, setCount }}>相关规范</SizeContext.Provider>
        </>
    )
}

export default PageContext
