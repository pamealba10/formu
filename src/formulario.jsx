// src/components/Formulario.jsx
import { useForm } from "react-hook-form";
import './formulario.css'; // Importamos el archivo CSS que crearemos en el paso 2

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    alert("¡Formulario enviado con éxito! Revisa la consola.");
    reset();
  };

  return (
    // Usamos clases semánticas de CSS en lugar de Tailwind aquí
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Crear Cuenta</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="form-space">
          
          {/* Campo: Nombre */}
          <div className="form-group">
            <label className="form-label">Nombre Completo</label>
            <input
              type="text"
              {...register("nombre", { 
                required: "El nombre es obligatorio",
                minLength: { value: 3, message: "El nombre debe tener al menos 3 letras" }
              })}
              className={`form-input ${errors.nombre ? "input-error" : ""}`}
              placeholder="Ejemplo: Jade Smith"
            />
            {errors.nombre && <p className="error-text">{errors.nombre.message}</p>}
          </div>

          {/* Campo: Correo */}
          <div className="form-group">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              {...register("email", { 
                required: "El correo es obligatorio",
                pattern: { 
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                  message: "El formato del correo no es válido" 
                }
              })}
              className={`form-input ${errors.email ? "input-error" : ""}`}
              placeholder="correo@ejemplo.com"
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          {/* Campo: Contraseña */}
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              {...register("password", { 
                required: "La contraseña es obligatoria",
                minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }
              })}
              className={`form-input ${errors.password ? "input-error" : ""}`}
              placeholder="********"
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>

          <button type="submit" className="form-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;