import { BOOKING_PACKAGE_TYPE } from "constants/enum/component";

export interface IRegisterLeadPartnerShip {
  businessName: string;
  partnerEmail: string;
  partnerTel: string;
  partnerLine: string;
  remark?: string;
}

export interface IRegisterLeadPartnerShipSchema {
  business_name: string;
  partner_email: string;
  partner_tel: string;
  partner_line: string;
  partner_remark?: string;
}

export interface IRegisterLeadSeminarPackage {
  name: string;
  phoneNumber: string;
  email: string;
  lineId?: string;
  companyName?: string;
  activityList: string[];
  remark?: string;
}

export interface IRegisterLeadSeminarPackageSchema {
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  contact_lineid?: string;
  company_name?: string;
  interested_activities: string;
  additional_details?: string;
}

export interface IBookingPackageInfo {
  packageName: string;
  packageAmount: string;
  packageDuration: string;
}
export interface IBookingInfoContent {
  type: BOOKING_PACKAGE_TYPE;
  title: string;
  packageList: IBookingPackageInfo[];
}
