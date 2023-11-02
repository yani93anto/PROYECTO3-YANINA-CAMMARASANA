import Swal from "sweetalert2";
import Toastify from "toastify-js";
export function Button() {
  
  { /* SWEETALERT */ }
  const alerta = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: "240px",
    });
  };

  { /* TOASTIFY */ }
  const toast = () => {
    Toastify({
      text: "Cotización guardada.",
      duration: 4000,
      newWindow: true,
      gravity: "top",
      position: "right",
      style: {
        background: "CornflowerBlue",
      },
    }).showToast();
  };

  return (
    <>
      <div className="center separador">
        <button onClick={alerta}>Cotizar</button>
      </div>
      <div className="center separador">
        <p className="importe">
          Precio estimado: $ <span id="valorPoliza">0.00</span>
          <span
            className="guardar ocultar"
            onClick={toast}
            title="Guardar en historial">💾</span>
        </p>
      </div>
    </>
  );
}

export default Button;
