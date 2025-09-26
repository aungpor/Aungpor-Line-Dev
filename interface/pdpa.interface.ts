export interface IPDPACondition {
  pdpa_id: number;
  pdpa_version: string;
  pdpa_name: string;
  pdpa_header: string;
  pdpa_text: string;
  pdpa_text_new_update: string;
  pdpa_because: string;
  pdpa_agree: string;
  pdpa_submit: string;
  active: boolean;
}

export interface IPDPAPrivacy {
  privacy_id: number;
  pdpa_id: number;
  privacy_name: string;
  privacy_header: string;
  privacy_text: string;
  privacy_text_new_update: string;
  privacy_because: string;
  privacy_agree: string;
  privacy_submit: string;
  active: boolean;
}

export interface IPDPAConsent {
  accept_title_id: number;
  pdpa_id: number;
  accept_title_name: string;
  accept_title_header: string;
  accept_title_submit: string;
  active: boolean;
  accept_title_text: string;
}
