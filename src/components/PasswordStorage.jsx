"use client";

import "@/components/style/PasswordStorage.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PassStorage() {
  const router = useRouter();
  const [length, setLength] = useState(8);
  const [passwords, setPasswords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataStorage, setDataStorage] = useState({
    title: "",
    password: "",
  });

  async function generatePassword() {
    if (length < 8) {
      setError("Минимальная длина пароля — 8 символов");
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_API_NINJAS_KEY;
    if (!apiKey) {
      setError("API ключ не задан. Установите NEXT_PUBLIC_API_NINJAS_KEY.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при генерации пароля");
      }

      const data = await response.json();

      setDataStorage((prev) => ({
        ...prev,
        password: data.random_password,
      }));
    } catch (err) {
      setError(err.message || "Ошибка при генерации пароля");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("passwords") ?? "[]");
      if (Array.isArray(saved)) {
        setPasswords(saved);
      }
    } catch (error) {
      console.warn("Не удалось загрузить сохранённые пароли:", error);
    }
  }, []);

  const createStorage = (e) => {
    e.preventDefault();

    if (
      dataStorage.title.trim() === "" ||
      dataStorage.password.trim() === ""
    ) {
      alert("Fill in all fields");
      return;
    }

    if (passwords.length >= 6) {
      alert("Maximum 6 storages.");
      return;
    }

    const newStorage = {
      id: Date.now(),
      title: dataStorage.title,
      password: dataStorage.password,
    };

    const updatedPasswords = [...passwords, newStorage];
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    setPasswords(updatedPasswords);

    setDataStorage({
      title: "",
      password: "",
    });

    router.push("/pro");
  };

  const handleChangeStorage = (e) => {
    const { name, value } = e.target;
    setDataStorage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = (id) => {
    const updatedPasswords = passwords.filter((item) => item.id !== id);
    setPasswords(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  const copyToClipboard = async () => {
    if (!dataStorage.password) return;

    try {
      await navigator.clipboard.writeText(dataStorage.password);
    } catch (err) {
      setError("Не удалось скопировать пароль");
    }
  };

  return (
    <div className="generator">
      <h1>Password Storage</h1>

      <button onClick={generatePassword} disabled={loading}>
        {loading ? "Generating..." : "Generate Password"}
      </button>

      {error && <p>{error}</p>}

    <label>
  Длина пароля: {length}
   </label>

      <input
        type="range"
        min="8"
        max="64"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <form onSubmit={createStorage} className="storage-form">
        <input
          type="text"
          name="title"
          placeholder="Storage title"
          value={dataStorage.title}
          onChange={handleChangeStorage}
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          value={dataStorage.password}
          onChange={handleChangeStorage}
        />

        <button type="button" onClick={copyToClipboard} disabled={!dataStorage.password}>
          Copy password
        </button>

        <button type="submit">Create New Storage</button>
      </form>


      <div>
        {passwords.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.password}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}