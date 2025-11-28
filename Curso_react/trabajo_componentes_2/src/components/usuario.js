

function Usuario() {
    const usuario={

      nombre:"Jorge",
      apellido:"Hasegawa",
      edad: 44,
      genero: "masculino"
    }

  return (
    <div>
      <h1>Hola {usuario.nombre} {usuario.apellido}!!</h1>
      <h1>Tu edad es <strong>{usuario.edad}</strong> años</h1>
      <h1>y tu genero es <strong>{usuario.genero}</strong></h1>
    </div>
  );
}

export default Usuario;
