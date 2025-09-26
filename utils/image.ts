import { RcFile } from "antd/lib/upload";
import downloadjs from "downloadjs";
import { IUploadFile } from "interface/image.interface";

export const downloadImage = async (imgURL: string, imgName: string) => {
  try {
    const response = await fetch(imgURL);
    const blob = await response.blob();
    downloadjs(blob, `${imgName}.jpg`);
  } catch (error) {
    throw error;
  }
};

export const getBase64 = (file: RcFile): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const convertUploadFileToFile = (imageList: IUploadFile[]) => {
  const imageFile: File[] = [];
  imageList.forEach(({ originFileObj, status }) => {
    if (originFileObj && (status === "done" || status === "success")) {
      imageFile.push(originFileObj);
    }
  });
  return imageFile;
};

export const imageUrlToBase64 = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
    reader.onerror = reject;
  });
};
