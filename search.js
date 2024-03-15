//GlobalVar
let latestStatusElement = document.getElementById("LatestStatus");
let trackingUSACHINAElement = document.getElementById("TrackingUSACHINA");
let trackingUSAVZLAElement = document.getElementById("TrackingUSAVZLA");
let TrackingCTec = document.getElementById("TrackingCTec");
let timeInTransitElement = document.getElementById("timeInTransit");
let originElement = document.getElementById("Origin");
let destinationElement = document.getElementById("Destination");
let deliveryDateElement = document.getElementById("DeliveryDate");
let photoNameElement = document.getElementById("PhotoName");
let TravelTra = document.getElementById("TravelTra");
let Point = document.getElementById("Point");
let UpTracking = document.getElementById("UpTracking");

//obtiene la url del guia
const currentUrl = window.location.href;
const parts = currentUrl.split("?=guide");
const parameter = parts[1];

//1 China, 2 ExitChina, 3 ArriveUSA, 4 TransitMiami, 5 InZoom, 6 ExitUSA, 7 ArriveVnzla, 8 InVenezuela, 9 InGuarenas
let shipments = [
  { // Cesar4
    PhotoName: 'descarga.svg',
    LatestStatus: "En almacen de Zoom",
    Created: "3/10/2024",
    TrackingUSACHINA: " UUSC000000949917",
    TrackingUSAVZLA: " No disponible",
    Origin: "China continental",
    Destination: "Guarenas, Estado Miranda, Venezuela",
    DeliveryDate: "Marzo 18 - Marzo 29",
    UbicationPosition: 5,
    TrackingUpdates: [
      {
        Note: 'Información de envío recibida por el almacén electrónicamente',
        Date: '10 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Paquete listo para envío desde almacén',
        Date: '11 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Paquete enviado desde el almacén',
        Date: '11 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Recibido por empresa de logística',
        Date: '11 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: '[Ciudad de Mayong] Procesamiento en el centro de clasificación',
        Date: '11 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: '[Ciudad de Mayong] Clasificación finalizada',
        Date: '12 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: '[Ciudad de Mayong] Salió del centro de clasificación',
        Date: '12 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Llegó al centro de transporte de salida',
        Date: '12 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Se inició el proceso de exportación en aduanas',
        Date: '12 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Se finalizo el proceso de exportación en aduanas',
        Date: '12 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Saliendo del país de origen',
        Date: '13 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Salio del país de origen',
        Date: '14 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Recibido por la empresa local de reparto',
        Date: '14 de Marzo del 2024',
        Ubication: 'Estados Unidos'
      },
      {
        Note: '[UniUni] Llegó al centro de entrega local',
        Date: '15 de Marzo del 2024',
        Ubication: 'Estados Unidos'
      },
      {
        Note: 'Llegó al almacen de Zoom Miami',
        Date: '15 de Marzo del 2024',
        Ubication: 'Estados Unidos'
      },
    ]
  },
  { // Stefany5
    PhotoName: 'descarga.svg',
    LatestStatus: "En centro de clasificacion",
    Created: "3/13/2024",
    TrackingUSACHINA: " UUSC000000967921",
    TrackingUSAVZLA: " No disponible",
    Origin: "China continental",
    Destination: "Guarenas, Estado Miranda, Venezuela",
    DeliveryDate: "Abril 1 - Abril 12",
    UbicationPosition: 2,
    TrackingUpdates: [
      {
        Note: 'Aceptado por el transportista',
        Date: '13 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: '[Shatian Town] Entrante en el centro de clasificación',
        Date: '13 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: '[Shatian Town] Saliente en centro de clasificación',
        Date: '13 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Llegó al centro de transporte de salida',
        Date: '13 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Se inició el despacho de aduanas de exportación',
        Date: '15 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Despacho de aduana de exportación completo',
        Date: '15 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Despacho de aduana de exportación completo',
        Date: '15 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Saliendo desde el país/región de salida',
        Date: '15 de Marzo del 2024',
        Ubication: 'China continental'
      },
      {
        Note: 'Salió del país/región de salida',
        Date: '15 de Marzo del 2024',
        Ubication: 'China continental'
      },
    ]
  },
];

if (parts[1] >= 0 && parts[1] <= shipments.length - 1) {
  // Convertir parts[1] a número
  const shipmentIndex = parseInt(parts[1]);

  // Asignamos los valores a los elementos correspondientes
  latestStatusElement.textContent = shipments[shipmentIndex].LatestStatus;

  // Fecha proporcionada
  let providedDate = new Date(shipments[shipmentIndex].Created);

  // Fecha actual
  let currentDate = new Date();

  // Convertimos ambas fechas a UTC para asegurarnos de que estén en la misma zona horaria
  let providedDateUTC = Date.UTC(providedDate.getFullYear(), providedDate.getMonth(), providedDate.getDate());
  let currentDateUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  // Calculamos la diferencia en milisegundos
  let differenceInMilliseconds = currentDateUTC - providedDateUTC;

  // Convertimos la diferencia a días
  let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  timeInTransitElement.textContent = '('+differenceInDays+' dia(s) en transito)'
  trackingUSACHINAElement.textContent = 'China - Estados Unidos: '+ shipments[shipmentIndex].TrackingUSACHINA;
  trackingUSAVZLAElement.textContent = 'Estados Unidos - Venezuela: '+ shipments[shipmentIndex].TrackingUSAVZLA;
  TrackingCTec.textContent = 'Guia ConnecTec: Guide'+ parts[1];
  originElement.textContent = shipments[shipmentIndex].Origin;
  destinationElement.textContent = shipments[shipmentIndex].Destination;
  deliveryDateElement.textContent = shipments[shipmentIndex].DeliveryDate;
  photoNameElement.src = shipments[shipmentIndex].PhotoName;

  if (shipments[shipmentIndex].UbicationPosition <= 0) {
    TravelTra.style.width = '1%';
    Point.style.marginLeft = "2%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 1) {
    TravelTra.style.width = '10%';
    Point.style.marginLeft = "83%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 2) {
    TravelTra.style.width = '20%';
    Point.style.marginLeft = "93%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 3) {
    TravelTra.style.width = '30%';
    Point.style.marginLeft = "95%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 4) {
    TravelTra.style.width = '45%';
    Point.style.marginLeft = "98%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 5) {
    TravelTra.style.width = '56%';
    Point.style.marginLeft = "98%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 6) {
    TravelTra.style.width = '66%';
    Point.style.marginLeft = "98%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 7) {
    TravelTra.style.width = '74%';
    Point.style.marginLeft = "98%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 8) {
    TravelTra.style.width = '78%';
    Point.style.marginLeft = "98%";
  }
  if (shipments[shipmentIndex].UbicationPosition == 9) {
    TravelTra.style.width = '100%';
    Point.style.marginLeft = "97.5%";
  }

  const reversedArray = shipments[shipmentIndex].TrackingUpdates.slice().reverse();

  reversedArray.forEach((trackUpdate, index, array) => {
    if (index === 0) {
      UpTracking.innerHTML += '<div class="updateitem"><div class="historyHR"><div class="bigcircle"></div></div><div><h3>'+trackUpdate.Note+'</h3><p>'+trackUpdate.Date+'</p><p>'+trackUpdate.Ubication+'</p></div>'
    } else {
      UpTracking.innerHTML += '<div class="updateitem"><div class="historyHR"><div class="nocircle"></div></div><div><h3>'+trackUpdate.Note+'</h3><p>'+trackUpdate.Date+'</p><p>'+trackUpdate.Ubication+'</p></div>'
    }
  });
}else{
  location.href = 'search.html'
}
