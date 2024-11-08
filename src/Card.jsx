//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
// En caso de que los valores ingresados superen las validaciones en forma exitosa, debemos renderizar el componente llamado Card que contenga dicha información. Podemos darle el estilo y/o forma que deseemos, en tanto y en cuanto contenga al menos los mismos valores que se hayan ingresado en el formulario.

import './Card.css';

const Card = ({ title, author }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  );
};

export default Card;
