import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import "./Register.scss";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../../service/auth";

export default function Register() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const { name, phone, password } = form.getFieldValue();

    setLoading(true);

    registerUser({ name, phone, password })
      .then((res) => {
        localStorage.setItem("lena_token", res.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Typography.Title level={2} className="auth-title">
          Регистрация
        </Typography.Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="auth-form"
        >
          <Form.Item
            label="Имя"
            name="name"
            rules={[{ required: true, message: "Введите имя" }]}
          >
            <Input placeholder="Введите имя" />
          </Form.Item>

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
            to={"/login"}
          >
            уже есть аккаунт?
          </Link>

          <Form.Item>
            <Button
              htmlType="submit"
              className="auth-btn"
              loading={loading}
              disabled={loading}
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
