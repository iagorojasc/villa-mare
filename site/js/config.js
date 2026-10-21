/* ============ CONFIGURACIÓN DE LA RESERVA DIRECTA ============
   1) CONTACTO: pon tu WhatsApp (solo números con prefijo, sin +, p.ej. "34600123456") y/o tu email.
   2) PRECIOS: rellena "nightly" y "weekendNightly" (€ por noche) en cada temporada. Si algún precio está en null,
      la web no muestra importes y pide presupuesto. Las fechas son MM-DD y pueden cruzar de año (11-01 -> 03-31).
   3) DISPONIBILIDAD: la rellena automáticamente tools/sync_availability.py (ver tools/LEEME.md).
*/
window.VILLA={
  contact:{whatsapp:"34609554851",email:"villamaregranada@gmail.com"},
  currency:"EUR",
  maxGuests:20,
  cleaningFee:0,             // sin gastos de limpieza
  seasons:[
    // Precios medidos en el anuncio el 21/10/2026 (total por noche para 2 personas). El orden importa: manda la primera que coincida.
    // "byDow" = precio por día de la semana [dom, lun, mar, mié, jue, vie, sáb]. Si no hay byDow: "nightly" (dom-jue) y "weekendNightly" (vie-sáb).
    // null = sin precio -> la web pide presupuesto.
    {name:{es:"Temporada baja",en:"Low season"},from:"10-21",to:"10-31",nightly:550,weekendNightly:625,minNights:2},
    {name:{es:"Temporada baja",en:"Low season"},from:"11-01",to:"11-30",byDow:[516,460,460,516,516,625,625],minNights:2},
    {name:{es:"Temporada baja",en:"Low season"},from:"12-01",to:"12-22",nightly:600,weekendNightly:600,minNights:2},
    {name:{es:"Navidad y Fin de Año",en:"Christmas & New Year"},from:"12-23",to:"01-02",nightly:null,weekendNightly:null,minNights:2},
    {name:{es:"Temporada baja",en:"Low season"},from:"01-03",to:"01-31",nightly:663,weekendNightly:700,minNights:2},
    {name:{es:"Temporada baja",en:"Low season"},from:"02-01",to:"02-29",nightly:655,weekendNightly:750,minNights:2},
    {name:{es:"Temporada media",en:"Mid season"},from:"03-01",to:"06-14",nightly:663,weekendNightly:750,minNights:2},
    {name:{es:"Verano",en:"Summer"},from:"06-15",to:"09-15",nightly:750,weekendNightly:750,minNights:2},  // = la noche más cara actual
    {name:{es:"Temporada media",en:"Mid season"},from:"09-16",to:"10-20",nightly:663,weekendNightly:750,minNights:2}
  ],
  // Rebaja por reservar directo sobre el total que tendría en Airbnb: -100 EUR si ese total es < threshold, -150 EUR si es >= threshold
  directDiscount:{threshold:1200,below:100,above:150},
  extraGuest:{free:6,perNight:30},              // huéspedes incluidos y € por noche por cada huésped adicional
  stayDiscounts:[[3,4],[4,6],[5,8],[6,9],[7,15]], // [noches mínimas, % de descuento]
  mapCenter:[37.11145,-3.59272],                // centro del círculo de 400 m (punto aproximado público de la zona)
  availabilityUrl:"data/availability.json"
};
