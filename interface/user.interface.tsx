export interface IUser {
  userID: number;
  name?: string;
  provider?: string;
  lineImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IProfileBadged {
  active: boolean;
  badged_code: string;
  badged_config_id: string;
  badged_desc: string;
  badged_gif_url: string;
  badged_image_url: string;
  badged_name: string;
  created_at: string;
  updated_at: string;
}

export interface IProfile {
  cntRanking: number;
  email: string;
  is_follow: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: string;
  provider: string;
  rank: string;
  tel: string;
  user_id: string;
  user_type_icon: string;
  userRanking?: any;
  badged?: Array<IProfileBadged>;
}

export interface IFollow {
  followerAmount?: number;
  followingAmount?: number;
  isfollowing?: string;
}

export interface IFollowing {
  i_am_following: string;
  id: string;
  name: string;
  patois_user_follow_id: string;
  profile_pic_line: string;
  profile_pic_patois: string;
  user_type: string;
  user_type_icon: string;
  user_secret: string;
}

export interface IUserRanking {
  rank: string;
  user_id: string;
  cntRanking: number;
  name: string;
  foodType_id: string;
  ranking_name: string;
  profile_pic_line: string;
  profile_pic_patois: any;
}

export interface ICalendarHistoryList {
  data: ICalendarHistoryMonth[];
  mont: string;
  year: string;
  objDate?: Array<number>;
}

export interface ICalendarHistoryMonth {
  reviewDate: string;
  reviewMonthYear: string;
  reviewFirst: string;
  reviewImgFirst: string;
  img: string;
}

export interface IUserProfile {
  id: string;
  name: string;
  email: string;
  email_verified_at: string | undefined;
  teamName: string | undefined;
  emp_id: string | undefined;
  line_id: string | undefined;
  profile_pic_line: string;
  profile_pic_patois: string;
  tel: string;
  active: string;
  pdpa_id: number;
  pdpa_isagree: boolean;
  personalization_check_date: string;
  is_new_version: boolean;
  isHaveFavoriteFood: boolean;
  isHaveAllergyFood: boolean;
  transactionMission: ITransactionMission;
  transactionCampaign: ITransactionCampaign;
  isMerchant: boolean;
}

export interface ITransactionMission {
  campaign_transaction_id: string;
  giver_user_id: string;
  user_id: string;
  campaign_id: string;
  page_type: string;
  attend_type: string | undefined;
  ref_code: string;
  ip_address: string | undefined;
  device: string | undefined;
  utm_source: string | undefined;
  utm_medium: string | undefined;
  utm_term: string | undefined;
  utm_content: string | undefined;
}

export interface ITransactionCampaign {
  mission_transaction_id: string;
  giver_user_id: string;
  user_id: string;
  mission_id: string;
  page_type: string;
  attend_type: string | undefined;
  ref_code: string;
  ip_address: string | undefined;
  device: string | undefined;
  review_type: string | undefined;
  type_id: string | undefined;
  campaign_id: string;
}
