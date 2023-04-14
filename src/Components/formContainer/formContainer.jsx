import { useState } from "react";

const WithFormValidation = (WrappedComponent) => {
  const WithFormValidation = (props) => {
    const [errors, setError] = useState({});

    const validateForm = () => {
      let newErrors = {};
      let isValid = true;

      if (!props.formData.nombre) {
        newErrors.nombre = "El nombre es obligatorio";
        isValid = false;
      }
      setError(newErrors);
      return isValid;
    };
    return (
      <WrappedComponent
        {...props}
        errrors={errors}
        validateForm={validateForm}
      />
    );
  };
  return WithFormValidation;
};

export const Form = ({ formData, errors, validateForm, onChange }) => {
  const hanleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("enviar formulario");
    }
  };
  return (
    <center>
      <form onSubmit={hanleSubmit}>
        <label>Nombre:</label> <br></br>
        <input
          type="text"
          name="nombre"
          placeholder="ingrese el nombre"
          onChange={(e) => onChange(e)}
          value={formData.nombre}
        />
        <br />
        {errors && errors.nombre && <spam>{errors.nombre}</spam>}
        <br />
        <label>Email:</label>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="ingrese el mail"
          onChange={(e) => onChange(e)}
          value={formData.email}
        />
        <br />
        {errors && errors.email && <span>{errors.email}</span>}
        <br />
        <button type="submit"> Enviar</button>
      </form>
    </center>
  );
};

const FormWithValidation = WithFormValidation(Form); //HOC -> FUNCION QUE DEVUELVE UN COMPONENTE QUE MOD EL COMP DEL ORIGINAL
//EL ORIGINAL ES FORM
export const FormContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <FormWithValidation formData={formData} onChange={onChange} />
    </div>
  );
};
