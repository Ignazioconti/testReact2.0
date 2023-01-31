import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
