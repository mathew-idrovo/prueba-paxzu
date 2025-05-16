const ContactForm = () => (
    <form className="bg-white shadow-lg rounded-md p-6 w-full max-w-[430px] mx-auto md:mx-0">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-4 md:text-left">
        Lo asesoramos
      </h3>
      {/* Grid en dos columnas en desktop, una en móvil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600">Nombre completo</label>
          <input
            type="text"
            placeholder="Escribe su nombre completo"
            className="border rounded px-3 py-2 text-gray-700 bg-gray-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600">Correo electrónico</label>
          <input
            type="email"
            placeholder="Escribe su correo electrónico"
            className="border rounded px-3 py-2 text-gray-700 bg-gray-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600">Teléfono</label>
          <input
            type="text"
            placeholder="Escribe su número de teléfono"
            className="border rounded px-3 py-2 text-gray-700 bg-gray-100"
          />
          {/* <span className="text-xs text-red-600">*Campo requerido</span> */}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600">Empresa</label>
          <input
            type="text"
            placeholder="Escribe aquí"
            className="border rounded px-3 py-2 text-gray-700 bg-gray-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600">Portafolio</label>
          <select className="border rounded px-3 py-2 text-gray-700 bg-gray-100">
            <option>Seleccione una ciudad</option>
            <option>Medellín</option>
            <option>Bogotá</option>
            <option>Barranquilla</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-600">Marca</label>
          <select className="border rounded px-3 py-2 text-gray-700 bg-gray-100">
            <option>Seleccione la marca</option>
            <option>Marca 1</option>
            <option>Marca 2</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="font-semibold text-gray-600">Producto</label>
        <select className="border rounded px-3 py-2 w-full text-gray-700 bg-gray-100">
          <option>Seleccione un producto</option>
          <option>Producto 1</option>
          <option>Producto 2</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="font-semibold text-gray-600">Solicitud</label>
        <textarea
          placeholder="Escribe aquí su solicitud"
          className="border rounded px-3 py-2 w-full text-gray-700 bg-gray-100"
          rows={3}
        />
      </div>
      <div className="mb-6 flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-orange-500"
        />
        <span className="text-sm">
          Acepto la{" "}
          <a href="#" className="text-orange-500 underline">
            política de privacidad
          </a>
        </span>
      </div>
      <button
        type="button"
        className="bg-orange-500 text-white w-full rounded py-2 font-semibold hover:bg-orange-600 transition"
      >
        Enviar
      </button>
    </form>
  );
  
  export default ContactForm;
  