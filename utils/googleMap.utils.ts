export const handlePackageLocationName = (data: string) => {
  if (!data) return;

  let locationArray = data.split("|");
  let slitpLocation = locationArray[0].split(",");

  return {
    name: slitpLocation[0],
    lat: +slitpLocation[1],
    lng: +slitpLocation[2],
  };
};
