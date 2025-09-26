import { UploadFile } from "antd";

export interface ILightboxImage {
  src?: string;
  alt?: string;
  caption?: string;
  type?: string;
  videoSrc?: string;
}

export interface ICarousel {
  src?: string;
  alt?: string;
}

export interface IImageConfig {
  src?: string;
  className?: string;
}

export interface IUploadFile extends UploadFile {
  file?: File;
}

export interface IUploadProfileResponse {
  fileName: string;
  fileExtensions: string;
  description: string;
  imagesId: number;
  imageHashValidateHashStatus: IImageHashValidateHashStatus[];
  countFail: number;
  countSuccess: number;
}

export interface IImageHashValidateHashStatus {
  fileName: string;
  status: string;
}
