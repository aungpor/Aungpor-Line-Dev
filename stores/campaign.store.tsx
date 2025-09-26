import { TCampaign } from "./types";
import { create } from "zustand";
import {
  ICampaignByUserRefCode,
  ICampaignInfoEncrypt,
} from "interface/campaign.interface";

export const CampaignStore = create<TCampaign>((set, get) => ({
  campaignData: {} as ICampaignByUserRefCode | ICampaignInfoEncrypt,
  isCampaignUser: false,
  campaignRefCode: null,
  campaignSource: null,
  setCampaignData: (data: ICampaignByUserRefCode | ICampaignInfoEncrypt) => {
    set({ campaignData: data });
  },
  setIsCampaignUser: (data: boolean) => {
    set({ isCampaignUser: data });
  },
  setCamapignRefCode: (data: string | null) => {
    set({ campaignRefCode: data });
  },
  setCampaignSource: (data: string | null) => {
    set({ campaignSource: data });
  },
}));
