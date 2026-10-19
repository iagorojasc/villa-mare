/* ============ CONFIGURACIÓN DE LA RESERVA DIRECTA ============
   1) CONTACTO: pon tu WhatsApp (solo números con prefijo, sin +, p.ej. "34600123456") y/o tu email.
   2) PRECIOS: rellena "nightly" y "weekendNightly" (€ por noche) en cada temporada. Si algún precio está en null,
      la web no muestra importes y pide presupuesto. Las fechas son MM-DD y pueden cruzar de año (11-01 -> 03-31).
   3) DISPONIBILIDAD: la rellena automáticamente tools/sync_availability.py (ver tools/LEEME.md).
*/
window.VILLA={
  contact:{whatsapp:"34609554851",email:"fjrojas@ugr.es"},
  currency:"EUR",
  maxGuests:20,
  cleaningFee:0,             // sin gastos de limpieza
  seasons:[
    // Precios tomados del anuncio (2 personas, estancia de 2 noches). "nightly" = noches de domingo a jueves;
    // "weekendNightly" = noches de viernes y sábado. Si un precio es null, la web pide presupuesto.
    {name:{es:"Tarifa estándar",en:"Standard rate"},from:"09-16",to:"06-14",nightly:663,weekendNightly:750,minNights:2},
    {name:{es:"Verano",en:"Summer"},               from:"06-15",to:"09-15",nightly:750,weekendNightly:750,minNights:2}  // = la noche más cara actual (750 €, vie-sáb)
  ],
  extraGuest:{free:6,perNight:30},              // huéspedes incluidos y € por noche por cada huésped adicional
  stayDiscounts:[[3,4],[4,6],[5,8],[6,9],[7,15]], // [noches mínimas, % de descuento]
  mapCenter:[37.11145,-3.59272],                // centro del círculo de 400 m (punto aproximado público de la zona)
  availabilityUrl:"data/availability.json"
};
