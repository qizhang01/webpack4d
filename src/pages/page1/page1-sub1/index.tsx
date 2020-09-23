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
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'
import { Panel } from '@/components/Panel'
import province from '@/enum/province'
import cardType from '@/enum/cardType'

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

                <Form.Item name="socialSecrity" label="是否询问医保情况">
                    <Radio.Group>
                        <Radio value="socialSecrity_true">是</Radio>
                        <Radio value="socialSecrity_false">否</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="End_Date"
                    label="结束日期"
                    rules={[{ type: 'object', required: true, message: '请选择活动结束日期' }]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item name="normal_duty" label="普通意外责任">
                    <Input placeholder="请输入金额, 比如1万元" />
                </Form.Item>
                <Form.Item name="normal_doctor_duty" label="意外医疗保险责任">
                    <Input placeholder="请输入金额, 比如5000元" />
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

                <Form.Item name="cardType" label="证件类型">
                    <Checkbox.Group>
                        <Row>
                            {cardType.map(item => (
                                <Col span={4} key={item.value}>
                                    <Checkbox value={item.value} style={{ lineHeight: '32px' }}>
                                        {item.label}
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
