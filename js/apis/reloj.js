async function obtenerHoraDelServidor() {
  try {
      const respuesta = await fetch('https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
      const datos = await respuesta.json();
      return datos.datetime.slice(11, 19); // Extraer solo la hora (HH:MM:SS)
  } catch (error) {
      console.error('Error al obtener la hora del servidor:', error);
      return 'Error';
  }
}

async function actualizarReloj() {
  const hora = await obtenerHoraDelServidor();
  const reloj = document.getElementById('reloj');
  reloj.textContent = hora;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();