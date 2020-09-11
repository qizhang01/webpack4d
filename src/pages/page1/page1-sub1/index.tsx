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
    Row,
    Col,
} from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import { Panel } from '@/components/Panel'
import province from '@/enum/province'

const { Option } = Select

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
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
                    name="name"
                    label="赠险产品名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入赠险产品名称',
                        },
                    ]}
                >
                    <Input placeholder="请输入赠险产品名称" />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="赠险产品编码"
                    rules={[
                        {
                            required: true,
                            message: '请输入赠险产品编码',
                        },
                    ]}
                >
                    <Input placeholder="请输入赠险产品编码" />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="产品计划编码"
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
                    <Input placeholder="请输入保障期限" />
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

                <Form.Item name="maxNumber" label="限领分数(不填默认为一份)">
                    <Input placeholder="请输入限领分数" />
                </Form.Item>

                <Form.Item
                    name="select"
                    label="是否需要激活码"
                    hasFeedback
                    rules={[{ required: true, message: '请选择是否需要激活码' }]}
                >
                    <Select placeholder="请选择是否需要激活码">
                        <Option value="0">不需要</Option>
                        <Option value="1">需要</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="总份数(不填默认为1)" name="input-number">
                    <InputNumber min={1} placeholder="请输入总份数" />
                </Form.Item>

                <Form.Item name="switch" label="是否需要健告" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item name="radio-group" label="Radio.Group">
                    <Radio.Group>
                        <Radio value="a">item 1</Radio>
                        <Radio value="b">item 2</Radio>
                        <Radio value="c">item 3</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="checkbox-group" label="活动省份">
                    <Checkbox.Group>
                        <Row>
                            {province.map(item => (
                                <Col span={4} key={item.id}>
                                    <Checkbox value={item.id} style={{ lineHeight: '32px' }}>
                                        {item.name}
                                    </Checkbox>
                                </Col>
                            ))}
                            <Col span={8}>
                                <Checkbox value="all" style={{ lineHeight: '32px' }}>
                                    全部
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

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
