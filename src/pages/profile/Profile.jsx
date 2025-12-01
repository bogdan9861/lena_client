import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  Popconfirm,
  message,
  Spin,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./Profile.scss";
import useUser from "../../hook/useUser";
import {
  createCharacter,
  editCharacter,
  getCharacters,
  removeCharacter,
} from "../../service/characters";
import Header from "../../components/Header/Header";

export default function Profile() {
  const [characters, setCharacters] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  const [editingCharacterId, setEditingCharacterId] = useState(null);

  const { user } = useUser();

  const fetchCharacters = () => {
    setLoading(true);

    getCharacters({ name: search })
      .then((res) => {
        setCharacters(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, [search]);

  // -------- CREATE CHARACTER ----------
  const handleCreateCharacter = (values) => {
    const formData = new FormData();

    if (selectedCharacter?.id) {
      formData.append("id", selectedCharacter?.id);
    }

    if (values?.name) {
      formData.append("name", values.name);
    }

    if (values?.description) {
      formData.append("description", values.description);
    }

    if (values?.image?.file?.originFileObj) {
      formData.append("image", values.image.file.originFileObj);
    }

    createCharacter(formData)
      .then((res) => {
        message.success("Персонаж добавлен!");
        fetchCharacters();
      })
      .catch((e) => {
        message.success("Персонаж удалён!");
      });

    setOpenModal(false);
    form.resetFields();
  };

  // -------- EDIT CHARACTER ----------
  const handleEditCharacter = (values) => {
    const formData = new FormData();

    if (selectedCharacter?.id) {
      formData.append("id", selectedCharacter?.id);
    }

    if (values?.name) {
      formData.append("name", values.name);
    }

    if (values?.description) {
      formData.append("description", values.description);
    }

    if (values?.image?.file?.originFileObj) {
      formData.append("image", values.image.file.originFileObj);
    }

    editCharacter(formData)
      .then(() => {
        message.success("Персонаж обновлён!");
        fetchCharacters();
      })
      .catch(() => {
        message.error("не удалось изменить персонажа!");
      });

    setEditModal(false);
    editForm.resetFields();
  };

  // -------- DELETE ----------
  const handleDelete = (id) => {
    setCharacters((prev) => prev.filter((item) => item.id !== id));

    removeCharacter({ characterId: id })
      .then((res) => {
        message.success("Персонаж удалён");
      })
      .catch((e) => {
        message.error("Не удалось удалить персонажа");
      });
  };

  // -------- OPEN EDIT MODAL ----------
  const openEdit = (char) => {
    setEditingCharacterId(char.id);
    editForm.setFieldsValue({
      name: char.name,
      description: char.description,
    });

    setEditModal(true);
  };

  return (
    <>
      <Header />
      <div className="profile-page">
        <div style={{ marginTop: 25 }} className="profile-header">
          <h1>Профиль: {user?.name}</h1>
          <Button
            type="primary"
            className="add-btn"
            onClick={() => setOpenModal(true)}
          >
            <PlusOutlined /> Добавить персонажа
          </Button>
        </div>

        <div className="profile-page__head">
          <h2 className="profile-page__title">Все персонажи</h2>
          <Input
            style={{ padding: "13px 20px", marginBottom: 20 }}
            onChange={(e) => setSearch(e.target.value)}
            className="profile-page__search"
            placeholder="Поиск по персонажу..."
          />
        </div>

        <div className="characters-grid">
          {loading ? (
            <Spin />
          ) : (
            <>
              {characters.map((char) => (
                <div className="character-card" key={char.id}>
                  <img
                    src={char.photo_url}
                    alt={char.name}
                    className="char-image"
                  />

                  <div className="char-info">
                    <h3>{char.name}</h3>
                    <p>{char.description}</p>

                    <div className="char-actions">
                      <Button
                        className="edit-btn"
                        icon={<EditOutlined />}
                        onClick={() => {
                          openEdit(char);
                          setSelectedCharacter(char);
                        }}
                      >
                        Изменить
                      </Button>

                      <Popconfirm
                        title="Удалить персонажа?"
                        description="Вы уверены, что хотите удалить?"
                        onConfirm={() => handleDelete(char.id)}
                        okText="Да"
                        cancelText="Нет"
                      >
                        <Button
                          danger
                          style={{ background: "red", color: "#fff" }}
                          className="delete-btn"
                          icon={<DeleteOutlined />}
                        >
                          Удалить
                        </Button>
                      </Popconfirm>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* -------- CREATE MODAL -------- */}
        <Modal
          title="Добавить персонажа"
          open={openModal}
          onCancel={() => setOpenModal(false)}
          onOk={() => form.submit()}
          okText="Добавить"
          cancelText="Отмена"
          className="profile-modal"
        >
          <Form form={form} layout="vertical" onFinish={handleCreateCharacter}>
            <Form.Item
              label="Имя"
              name="name"
              rules={[{ required: true, message: "Введите имя" }]}
            >
              <Input placeholder="Имя персонажа" />
            </Form.Item>

            <Form.Item
              label="Описание"
              name="description"
              rules={[{ required: true, message: "Введите описание" }]}
            >
              <Input.TextArea placeholder="Описание персонажа" rows={3} />
            </Form.Item>

            <Form.Item label="Картинка" name="image">
              <Upload listType="picture-card" maxCount={1} type="select">
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Загрузить</div>
                </div>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>

        {/* -------- EDIT MODAL -------- */}
        <Modal
          title="Изменить персонажа"
          open={editModal}
          onCancel={() => setEditModal(false)}
          onOk={() => editForm.submit()}
          okText="Сохранить"
          cancelText="Отмена"
          className="profile-modal"
        >
          <Form
            form={editForm}
            layout="vertical"
            onFinish={handleEditCharacter}
          >
            <Form.Item
              label="Имя"
              name="name"
              rules={[{ required: true, message: "Введите имя" }]}
            >
              <Input placeholder="Имя персонажа" />
            </Form.Item>
            <Form.Item
              label="Описание"
              name="description"
              rules={[{ required: true, message: "Введите описание" }]}
            >
              <Input.TextArea placeholder="Описание персонажа" rows={3} />
            </Form.Item>

            <img
              style={{
                width: 200,
                height: 200,
                objectFit: "cover",
                borderRadius: 10,
              }}
              src={selectedCharacter?.photo_url}
            />

            <Form.Item label="Картинка" name="image">
              <Upload listType="picture-card" maxCount={1} type="select">
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Загрузить</div>
                </div>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}
