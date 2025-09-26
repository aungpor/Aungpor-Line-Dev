export const getCurrentPosition = async () => {
  const result = await navigator?.permissions?.query({ name: "geolocation" });

  if (result?.state === "denied") {
    return { coords: { latitude: 13.769733, longitude: 100.57374 } };
  }
  let timer;

  return new Promise((resolve, reject) => {
    timer = setTimeout(reject, 5000);
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 60000,
    });
  }).finally(() => clearTimeout(timer));
};

export const getCurrentPositionNull = async () => {
  const result = await navigator?.permissions?.query({ name: "geolocation" });

  if (result?.state === "denied") {
    return { coords: { latitude: null, longitude: null } };
  }
  let timer;

  return new Promise((resolve, reject) => {
    timer = setTimeout(reject, 5000);
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 60000,
    });
  }).finally(() => clearTimeout(timer));
};

export const initLocation = async () => {
  try {
    const { coords }: any = await getCurrentPosition();
    if (coords) {
      return { latitude: coords.latitude, longitude: coords.longitude };
    } else {
      return { latitude: 13.769733, longitude: 100.57374 };
    }
  } catch (error) {
    return { latitude: 13.769733, longitude: 100.57374 };
  }
};

export const getRoad = (addressArray) => {
  let isBangkok = getState(addressArray);

  let road = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0]) {
      for (let j = 0; j < addressArray[i].types.length; j++) {
        if ("route" === addressArray[i].types[j]) {
          road = addressArray[i].long_name;
          return road;
        }
      }
    }
  }
};

export const getCity = (addressArray) => {
  let isBangkok = getState(addressArray);
  let areaType = isBangkok === "กรุงเทพมหานคร" ? "แขวง" : "ตำบล";

  let city = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].long_name.includes(areaType)) {
      city = addressArray[i].long_name;
      return city;
    }
  }
};

export const getArea = (addressArray) => {
  let isBangkok = getState(addressArray);
  let areaType =
    isBangkok === "กรุงเทพมหานคร" || isBangkok === "Krung Thep Maha Nakhon"
      ? "sublocality_level_1"
      : "administrative_area_level_2";

  let area = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0]) {
      for (let j = 0; j < addressArray[i].types.length; j++) {
        if (areaType === addressArray[i].types[j]) {
          area = addressArray[i].long_name;
          return area;
        }
      }
    }
  }
};

export const getState = (addressArray) => {
  let state = "";
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_1" === addressArray[i].types[0]
      ) {
        state = addressArray[i].long_name;
        return state;
      }
    }
  }
};

export const getPostalcode = (addressArray) => {
  let postalCoce = "";
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "postal_code" === addressArray[i].types[0]
      ) {
        postalCoce = addressArray[i].long_name;
        return postalCoce;
      }
    }
  }
};
