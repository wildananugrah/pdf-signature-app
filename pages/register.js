import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const Login = () => {
    const onFinish = async (values) => {
        let response = await fetch("/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        if (!response.ok) {
            console.log(response)
            alert("ERROR: status " + response.status)
        } else {
            window.localStorage.setItem("cookies", JSON.stringify(await response.json()))
            router.push("/dashboards");
        }
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First name!'
                        },
                    ]}
                >
                    <Input placeholder="First name" />
                </Form.Item>
                <Form.Item
                    name="last_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Last name!'
                        },
                    ]}
                >
                    <Input placeholder="Last name" />
                </Form.Item>
                <Form.Item
                    name="date_of_birth"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Date of birth!'
                        },
                    ]}
                >
                    <Input placeholder="Date of birth (yyyy-mm-dd)" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                            type: 'email'
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Create Account
                    </Button>
                    &nbsp; Or &nbsp; <a href="/login">Already have an account ?</a>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;