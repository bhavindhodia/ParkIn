import React from 'react'
import { Button,Modal,Form,Input,Select } from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'
import axios from 'axios'
import isAuthenticated from '../utils/isAuthenticated'
function Vehicle() {

    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [vehicleTypeState, setVehicleTypeState] = React.useState([])
    const [selected,setSelected] =React.useState('')
    const handleOpen=async()=>{
        setIsModalVisible(true)

        const vehicleTypeObj = await (await axios.get('/vehicleType/')).data
        console.log("vehicleTypeObj", vehicleTypeObj.vehicleType);
        setVehicleTypeState(vehicleTypeObj.vehicleType)
    }
    const handleOk=()=>{

        

        setIsModalVisible(false)
    }
    const handleCancel=()=>{
        setIsModalVisible(false)
    }

    const onFinish = async(values: any) => {
        console.log('Success:', values);
        try {
            const createVehicle = await axios.post('/vehicle', { headers: {'Authorization': `Bearer ${isAuthenticated()}`} })
            console.log('createVehicle', createVehicle);
        } catch (error) {
            console.log("error",error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange=(value)=>{
        setSelected(value)
    }

    return (
        <div>
            <Button type="primary" onClick={handleOpen} icon={<PlusCircleOutlined />} >
                Create
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Vehicle Name"
                        name="vehicleName"
                        rules={[{ required: true, message: 'Please input your Vehicle Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Vehicle No"
                        name="vehicleNo"
                        rules={[{ required: true, message: 'Please input your Vehicle No!' }]}
                    >
                        <Input />
                    </Form.Item>

                      <Form.Item
                      label="Vehicle Type"
                      name="vehicleType"
                      value={selected}
                        rules={[{ required: true, message: 'Please select your Vehicle Type !' }]}
                      >
                        <Select style={{ width: 120 }} onChange={handleChange}>
                            {
                                vehicleTypeState.length !== -1 &&
                                vehicleTypeState.map((item, key) => (
                                    <Select.Option value={item.id} >{item.vehicleTypeName} </Select.Option>
                                ))
                            }
                        </Select>

                          </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Vehicle
