fetch('https://api.trackingmore.com/v4/trackings/get?tracking_numbers=UUSC000000949917', {
    method: 'GET', // Método de la solicitud
    headers: {
      'Tracking-Api-Key': 'l795cl4m-edj0-kak6-3iu2-ydyv6yezqkb5', // Clave de API en el encabezado
      'Content-Type': 'application/json' // Tipo de contenido
    }
  })
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => console.log(data)) // Muestra los datos en la consola
    .catch(error => console.error('Error:', error)); // Maneja errores si los hay
