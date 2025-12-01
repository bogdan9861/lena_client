import React, { useState } from "react";
import { Form, Input, Button, Typography, Alert } from "antd";
import "./Login.scss";
import { loginUser } from "../../service/auth";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    const { phone, password } = form.getFieldValue();

    setLoading(true);

    loginUser({ phone, password })
      .then((res) => {
        localStorage.setItem("lena_token", res.data.token);
        navigate("/");
      })
      .catch((e) => {
        alert("Не удалось войти");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Typography.Title level={2} className="login-title">
          Вход
        </Typography.Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="login-form"
        >
          <Form.Item
            label="Телефон"
            name="phone"
            rules={[{ required: true, message: "Введите номер телефона" }]}
          >
            <Input placeholder="Введите номер телефона" />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input placeholder="Введите пароль" />
          </Form.Item>

          <Link
            style={{
              color: "rgba(255,255,255,0.6)",
              marginBottom: 14,
              display: "block",
            }}
            to={"/register"}
          >
            Нет аккаунта?
          </Link>

          <Form.Item>
            <Button
              htmlType="submit"
              className="login-btn"
              loading={loading}
              disabled={loading}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
