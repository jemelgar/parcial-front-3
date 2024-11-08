import { useState } from 'react';
import './Form.css';
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // la longitud mínima del texto ingresado deberá ser de 3 caracteres y no deberá contener espacios en blanco al comienzo.
    // para el segundo input debemos validar que contenga al menos al menos 6 caracteres.

    if (
      formData.title.length >= 3 &&
      !formData.title.startsWith(' ') &&
      formData.author.length >= 6
    ) {
      setError(false);
      console.log(formData);
      onSubmit(formData);
    } else {
      setError(true);
    }
  };

  return (
    //use css classes from Form.css
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {error && <p className="error">Invalid input</p>}
    </form>
  );
};

export default Form;
