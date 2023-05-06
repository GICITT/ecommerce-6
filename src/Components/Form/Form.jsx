import "./Form.css";

export const Form = ({ handleSubmit, handleOnChange, formData, id }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        {id && <p>El id de tu compra es: {id}</p>}
        <label className="form__label">Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="ingrese el name "
          onChange={handleOnChange}
          value={formData.name}
        />
      </div>
      <div>
        <label className="form__label">Teléfono:</label>
        <input
          type="text"
          name="phone"
          placeholder="ingrese el phone"
          onChange={handleOnChange}
          value={formData.phone}
        />
      </div>
      <div>
        <label className="form__label">Correo Electrónico:</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Ingrese el correo electrónico"
          onChange={handleOnChange}
          value={formData.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>
      <div>
        <label className="form__label">Repita su correo:</label>
        <input
          required
          type="email"
          name="confirmEmail"
          placeholder="Confirme el correo electrónico"
          onChange={handleOnChange}
          value={formData.confirmEmail}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </div>
      <div>
        <button id="btnGenerarCompra" type="submit">
          {" "}
          Generar orden de compra
        </button>
      </div>
    </form>
  );
};
