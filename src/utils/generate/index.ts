export function generateGoogleMapsLink(x: number, y: number) {
  const googleMapsLink = `https://www.google.com/maps?q=${x},${y}`;

  return googleMapsLink;
}
