import {
  ICampaignByUserRefCode,
  ICampaignInfoEncrypt,
} from "interface/campaign.interface";

export type TCampaign = {
  campaignData: ICampaignByUserRefCode | ICampaignInfoEncrypt;
  isCampaignUser: boolean;
  campaignRefCode: string | null;
  campaignSource: string | null;
  setCampaignData: (
    data: ICampaignByUserRefCode | ICampaignInfoEncrypt,
  ) => void;
  setIsCampaignUser: (data: boolean) => void;
  setCamapignRefCode: (data: string | null) => void;
  setCampaignSource: (data: string | null) => void;
};
