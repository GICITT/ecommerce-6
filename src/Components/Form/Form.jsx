export const Form = ({ handleSubmit, handleNameChange, formData, id }) => {
  return (
    <form onSubmit={handleSubmit}>
      {id && <p>El id de tu compra es: {id}</p>}
      <input
        type="text"
        name="name"
        placeholder="ingrese el name "
        onChange={handleNameChange}
        value={formData.name}
      />
      <input
        type="text"
        name="phone"
        placeholder="ingrese el phone"
        onChange={handleNameChange}
        value={formData.phone}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="ingrese el email"
        onChange={handleNameChange}
        value={formData.email}
      />
      <button type="submit"> Generar orden de compra</button>
    </form>
  );
};
