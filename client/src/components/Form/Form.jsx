const Form = () => {
  return (
    <div>
      <form action="">
        <h1>¡Crea tu propio Pokemon!</h1>
        <input type="text" name="name" />
        <input type="text" name="image" />
        <input type="text" name="hp" />
        <input type="text" name="attack" />
        <input type="text" name="defense" />
        <input type="text" name="speed" />
        <input type="text" name="height" />
        <input type="text" name="weight" />
        <select name="type" onChange="">
          <option value="item1">tipo</option>
        </select>
        <button>Agregar</button>
      </form>
    </div>
  );
};

export default Form;

// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).
// Posibilidad de seleccionar/agregar varios tipos en simultáneo.
// Botón para crear el nuevo pokemon.
