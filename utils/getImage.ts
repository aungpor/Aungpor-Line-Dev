export const getImages = (shop: any, isRawImage: boolean = false) => {
  if (!shop?.image_url) {
    return [];
  }

  let images: any[] = [];
  let thumbnails: any[] = [];

  if (shop?.image_url_thumbnail) {
    thumbnails = shop?.image_url_thumbnail
      .split(",")
      .filter(
        (element) =>
          element !== "" &&
          element !== null &&
          element !== undefined &&
          element !== "null",
      )
      .map((img) => encodeURI(img));
  }

  if (shop?.image_url) {
    images = shop?.image_url
      .split(",")
      .filter(
        (element) =>
          element !== "" &&
          element !== null &&
          element !== "null" &&
          element !== undefined,
      )
      .map((img) => {
        if (img.includes("wonknok-picture")) {
          img = `${encodeURI(
            img,
          )}?sp=racwdl&st=2021-06-03T08:42:47Z&se=2030-06-03T16:42:47Z&spr=https&sv=2020-02-10&sr=c&sig=vdWeMKTf1MOEltQQwu6gWhvcaH3nDJC0q6d2BnwXRvc%3D`;
        } else if (img.includes("uatwn")) {
          img = `${encodeURI(
            img,
          )}?sv=2020-08-04&st=2021-09-23T04%3A17%3A25Z&se=2030-09-24T04%3A17%3A00Z&sr=c&sp=rl&sig=ZltrB5P10fAo685zwr497VPX4RU1odg%2F6%2BfEnZ8V6vw%3D`;
        } else {
          img = encodeURI(img);
        }

        return img;
      });

    if (!shop?.image_url_thumbnail) {
      thumbnails = images;
    }
  }

  let filterThumbnailsDuplicate: string[] = [];

  if (isRawImage)
    filterThumbnailsDuplicate = images.filter(
      (value, index, array) => array.indexOf(value) === index,
    );
  else
    filterThumbnailsDuplicate = thumbnails.filter(
      (value, index, array) => array.indexOf(value) === index,
    );

  return filterThumbnailsDuplicate;
};

export const getSliderImageList = (shop: any, slideImageDefault: number) => {
  if (!slideImageDefault) return [];

  let images: any[] = [];
  let thumbnails: any[] = [];

  if (shop?.image_url_thumbnail) {
    thumbnails = shop?.image_url_thumbnail
      .split(",")
      .map((img) => encodeURI(img));
  }
  if (shop?.image_url) {
    images = shop?.image_url.split(",").map((img) => {
      if (img.includes("wonknok-picture")) {
        img = `${encodeURI(
          img,
        )}?sp=racwdl&st=2021-06-03T08:42:47Z&se=2030-06-03T16:42:47Z&spr=https&sv=2020-02-10&sr=c&sig=vdWeMKTf1MOEltQQwu6gWhvcaH3nDJC0q6d2BnwXRvc%3D`;
      } else if (img.includes("uatwn")) {
        img = `${encodeURI(
          img,
        )}?sv=2020-08-04&st=2021-09-23T04%3A17%3A25Z&se=2030-09-24T04%3A17%3A00Z&sr=c&sp=rl&sig=ZltrB5P10fAo685zwr497VPX4RU1odg%2F6%2BfEnZ8V6vw%3D`;
      } else if (img == "null" || !img) {
        img =
          "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/newyear/HNY_LG.jpg";
      } else {
        img = encodeURI(img);
      }

      return img;
    });

    if (!shop?.image_url_thumbnail) {
      thumbnails = images;
    }
  }
  thumbnails = thumbnails.map((element) => {
    if (element == "null" || !element) {
      return {
        image:
          "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/newyear/HNY_LG.jpg",
        type: "view",
      };
    }
    return {
      image: element,
      type: "view",
    };
  });

  let length = slideImageDefault;

  if (thumbnails.length < length) {
    let thumbnailMock: any = {
      image: thumbnails[0]?.image,
      type: "preview",
    };

    for (let index = thumbnails.length; index < length; index++) {
      thumbnails.push(thumbnailMock);
    }
  }

  return thumbnails;
};

export const getFirstImages = (data) => {
  let arrImg: string[] = [];

  if (data?.images_url_thumbnail) {
    arrImg = data?.images_url_thumbnail.split(",");
  } else if (data?.image_url) {
    const images = data?.image_url.split(",");
    for (let item of images) {
      if (item.includes("wonknok-picture")) {
        arrImg.push(
          `${item}?sp=racwdl&st=2021-06-03T08:42:47Z&se=2030-06-03T16:42:47Z&spr=https&sv=2020-02-10&sr=c&sig=vdWeMKTf1MOEltQQwu6gWhvcaH3nDJC0q6d2BnwXRvc%3D`,
        );
      } else if (item.includes("uatwn")) {
        arrImg.push(
          `${item}?sv=2020-08-04&st=2021-09-23T04%3A17%3A25Z&se=2030-09-24T04%3A17%3A00Z&sr=c&sp=rl&sig=ZltrB5P10fAo685zwr497VPX4RU1odg%2F6%2BfEnZ8V6vw%3D`,
        );
      } else {
        arrImg.push(item);
      }
    }
  }

  const hasVideoFile = arrImg.some((file) => {
    return file.endsWith(".mp4") || file.includes("video");
  });

  if (hasVideoFile) {
    arrImg = [
      "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/patois-picture/OG_Homepage_Contents_.jpg",
    ];
  }

  return arrImg[0];
};

export const getImagesProfile = (shop, isRawImage: boolean = false) => {
  let shopImage = shop?.review_image_url || shop?.shop_image_url;
  let shopThumbnails = shop?.review_thumbnail_url || shop?.shop_thumbnail_url;

  if (!shopImage) {
    return [];
  }

  let images: string[] = [];
  let thumbnails: string[] = [];

  if (shopThumbnails) {
    thumbnails = shopThumbnails.split(",").map((img) => encodeURI(img));
  }
  if (shopImage) {
    images = shopImage.split(",").map((img) => {
      if (img.includes("wonknok-picture")) {
        img = `${encodeURI(
          img,
        )}?sp=racwdl&st=2021-06-03T08:42:47Z&se=2030-06-03T16:42:47Z&spr=https&sv=2020-02-10&sr=c&sig=vdWeMKTf1MOEltQQwu6gWhvcaH3nDJC0q6d2BnwXRvc%3D`;
      } else if (img.includes("uatwn")) {
        img = `${encodeURI(
          img,
        )}?sv=2020-08-04&st=2021-09-23T04%3A17%3A25Z&se=2030-09-24T04%3A17%3A00Z&sr=c&sp=rl&sig=ZltrB5P10fAo685zwr497VPX4RU1odg%2F6%2BfEnZ8V6vw%3D`;
      } else {
        img = encodeURI(img);
      }

      return img;
    });

    if (!shopThumbnails) {
      thumbnails = images;
    }
  }

  if (isRawImage) return images;

  return thumbnails;
};

export const getBlobFileFromURL = async (imgUrl) => {
  if (!imgUrl) return;

  let imgObj = imgUrl.split(",");

  let fetchImg = imgObj.map(async (image, index) => {
    return new Promise(async (resolve, reject) => {
      let img = image;
      if (image.includes("wonknok-picture")) {
        img = `${encodeURI(image)}?sp=racwdl&st=2021-06-03T08:42:47Z&se=2030-06-03T16:42:47Z&spr=https&sv=2020-02-10&sr=c&sig=vdWeMKTf1MOEltQQwu6gWhvcaH3nDJC0q6d2BnwXRvc%3D`;
      } else if (image.includes("uatwn")) {
        img = `${encodeURI(image)}?sv=2020-08-04&st=2021-09-23T04%3A17%3A25Z&se=2030-09-24T04%3A17%3A00Z&sr=c&sp=rl&sig=ZltrB5P10fAo685zwr497VPX4RU1odg%2F6%2BfEnZ8V6vw%3D`;
      } else {
        img = encodeURI(image);
      }

      let blob = await fetch(img).then((r) => r.blob());
      let fileTypeSplit = blob.type.split("/");
      let typeFromName = img.split(".");
      typeFromName = typeFromName[typeFromName.length - 1];

      let fileTypeMeta = "image/jpeg";
      let fileType: any = "jpeg";
      if (blob.type == "image/jpeg" || blob.type == "image/png") {
        fileTypeMeta = blob.type;
        fileType = fileTypeSplit;
      } else if (typeFromName == "jpeg") {
        fileTypeMeta = "image/jpeg";
        fileType = "jpeg";
      } else if (typeFromName == "png") {
        fileTypeMeta = "image/png";
        fileType = "png";
      }

      const fileBlob = new File([blob], `${index}.${fileType}`, {
        type: fileTypeMeta,
      });

      return resolve(fileBlob);
    });
  });

  return Promise.all(fetchImg).then((imgPromise) => {
    return imgPromise;
  });
};

export const getBlobFileFromURLWithCustomFileName = async (
  imgUrl,
  name,
  imageId = "",
  fileTypeParam = "",
) => {
  if (!imgUrl) return;

  let imgObj = imgUrl.split(",");

  let fetchImg = imgObj.map(async (image, index) => {
    return new Promise(async (resolve, reject) => {
      let img = image;
      if (image.includes("wonknok-picture")) {
        img = `${encodeURI(image)}?sp=racwdl&st=2021-06-03T08:42:47Z&se=2030-06-03T16:42:47Z&spr=https&sv=2020-02-10&sr=c&sig=vdWeMKTf1MOEltQQwu6gWhvcaH3nDJC0q6d2BnwXRvc%3D`;
      } else if (image.includes("uatwn")) {
        img = `${encodeURI(image)}?sv=2020-08-04&st=2021-09-23T04%3A17%3A25Z&se=2030-09-24T04%3A17%3A00Z&sr=c&sp=rl&sig=ZltrB5P10fAo685zwr497VPX4RU1odg%2F6%2BfEnZ8V6vw%3D`;
      } else {
        img = encodeURI(image);
      }

      let blob = await fetch(img).then((r) => r.blob());

      console.log("fileTypeParam:", fileTypeParam);

      let fileTypeSplit = blob.type.split("/");
      let typeFromName = img.split(".");
      typeFromName = typeFromName[typeFromName.length - 1];

      let fileTypeMeta = "image/jpeg";
      let fileType: any = "jpeg";
      if (fileTypeParam == "image/jpeg" || fileTypeParam == "image/png") {
        fileTypeMeta = blob.type;
        fileType = fileTypeSplit;
      } else if (fileTypeParam == "jpeg") {
        fileTypeMeta = "image/jpeg";
        fileType = "jpeg";
      } else if (fileTypeParam == "png") {
        fileTypeMeta = "image/png";
        fileType = "png";
      } else if (fileTypeParam == "mp4") {
        fileTypeMeta = "video/mp4";
        fileType = "mp4";
      } else if (fileTypeParam == "mov") {
        fileTypeMeta = "video/mov";
        fileType = "mp4";
      } else if (fileTypeParam == "quicktime") {
        fileTypeMeta = "video/quicktime";
        fileType = "mp4";
      }

      const fileBlob = {
        originFileObj: new File([blob], `${name}`, { type: fileTypeMeta }),
        imageId,
      };

      return resolve(fileBlob);
    });
  });

  return Promise.all(fetchImg).then((imgPromise) => {
    return imgPromise;
  });
};

export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

export const getRadianAngle = (degreeValue) => {
  return (degreeValue * Math.PI) / 180;
};

export const rotateSize = (width, height, rotation) => {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};

export const getRotatedImage = async (imageSrc, rotation = 0) => {
  const image: any = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const orientationChanged =
    rotation === 90 ||
    rotation === -90 ||
    rotation === 270 ||
    rotation === -270;
  if (orientationChanged) {
    canvas.width = image?.height;
    canvas.height = image?.width;
  } else {
    canvas.width = image?.width;
    canvas.height = image?.height;
  }

  ctx?.translate(canvas.width / 2, canvas.height / 2);
  ctx?.rotate((rotation * Math.PI) / 180);
  ctx?.drawImage(image, -image.width / 2, -image.height / 2);

  return new Promise((resolve) => {
    canvas.toBlob((file: any) => {
      resolve(URL.createObjectURL(file));
    }, "image/png");
  });
};

export const getCroppedImg = async (
  imageSrc,
  pixelCrop,
  rotation = 0,
  fileUpload,
  flip = { horizontal: false, vertical: false },
) => {
  const image: any = await createImage(imageSrc);
  const canvas: any = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation,
  );

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // draw rotated image
  ctx.drawImage(image, 0, 0);

  const croppedCanvas = document.createElement("canvas");

  const croppedCtx = croppedCanvas.getContext("2d");

  if (!croppedCtx) {
    return null;
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width;
  croppedCanvas.height = pixelCrop.height;

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  // As Base64 string
  // return croppedCanvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob((file: any) => {
      file.name = fileUpload.name;
      file.lastModified = new Date();

      const convertToFile = new File([file], fileUpload.name, {
        type: file.type,
      });
      resolve({ files: convertToFile, blob: URL.createObjectURL(file) });
    }, "image/jpeg");
  });
};
