import React, { useState } from 'react'
import {
    Form,
    Select,
    Input,
    InputNumber,
    Switch,
    Radio,
    Button,
    Upload,
    Checkbox,
    DatePicker,
    Row,
    Col,
} from 'antd'
import { MinusCircleOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons'
import { Panel } from '@/components/Panel'
import province from '@/enum/province'
import cardType from '@/enum/cardType'
const { Option } = Select

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
}
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
}
const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
        return e
    }
    return e && e.fileList
}

const PageSub1: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    return (
        <Panel>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    ['input-number']: 3,
                    ['checkbox-group']: ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <Form.Item
                    name="title"
                    label="险种名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入赠险险种名称',
                        },
                    ]}
                >
                    <Input placeholder="请输入赠险险种名称" />
                </Form.Item>

                <Form.Item
                    name="planName"
                    label="计划名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入赠险计划名称',
                        },
                    ]}
                >
                    <Input placeholder="请输入赠险计划名称" />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="险种编码"
                    rules={[
                        {
                            required: true,
                            message: '请输入险种编码',
                        },
                    ]}
                >
                    <Input placeholder="请输入险种编码" />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="计划编码"
                    rules={[
                        {
                            required: true,
                            message: '请输入产品计划编码',
                        },
                    ]}
                >
                    <Input placeholder="请输入产品计划编码" />
                </Form.Item>

                <Form.Item
                    name="period"
                    label="保障期限"
                    rules={[
                        {
                            required: true,
                            message: '请输入保障期限',
                        },
                    ]}
                >
                    <Input placeholder="请输入保障期限, 比如1年 90天等" />
                </Form.Item>

                <Form.Item
                    name="ageSection"
                    label="承保年龄"
                    rules={[
                        {
                            required: true,
                            message: '请输入承保年龄',
                        },
                    ]}
                >
                    <Input placeholder="请输入承保年龄" />
                </Form.Item>

                <Form.Item name="contorgin" label="子渠道">
                    <InputNumber min={1} placeholder="请输入子渠道" />
                </Form.Item>

                <Form.Item label="主渠道来源" name="channel">
                    <InputNumber min={1} placeholder="请输入主渠道来源" />
                </Form.Item>

                <Form.Item name="maxNumber" label="限领分数(不填默认为一份)">
                    <Input placeholder="请输入限领分数" />
                </Form.Item>

                <Form.Item name="activityNum" label="活动总份数">
                    <Input placeholder="请输入活动总份数" />
                </Form.Item>
                {/* <Form.List name="names">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0
                                            ? formItemLayout
                                            : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? 'Passengers' : ''}
                                        required={false}
                                        key={field.key}
                                    >
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message: '请输入',
                                                },
                                            ]}
                                            noStyle
                                        >
                                            <Input
                                                placeholder="passenger name"
                                                style={{ width: '60%' }}
                                            />
                                        </Form.Item>
                                        {fields.length > 1 ? (
                                            <MinusCircleOutlined
                                                className="dynamic-delete-button"
                                                style={{ margin: '0 8px' }}
                                                onClick={() => {
                                                    remove(field.name)
                                                }}
                                            />
                                        ) : null}
                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add()
                                        }}
                                        style={{ width: '60%' }}
                                    >
                                        <PlusOutlined /> Add field
                                    </Button>
                                </Form.Item>
                            </div>
                        )
                    }}
                </Form.List> */}

                <div style={{ marginTop: 50 }}>
                    <Form.Item wrapperCol={{ span: 3, offset: 9 }}>
                        <Button type="primary" htmlType="submit" block>
                            完成提交
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Panel>
    )
}
export default PageSub1
