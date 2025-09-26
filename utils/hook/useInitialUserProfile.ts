import { Modal } from "antd";
import { IAuthen } from "interface/auth.interface";
import { IMaxcard, IPatoisMaxcard } from "interface/maxcard.interface";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { inquiryCartData } from "services/ecommerce.service";
import { liffSignOut } from "services/line.service";
import { getMaxcardByPhone, getMaxcardInfo } from "services/maxcard.service";
import { getMerchantShopByUserIdService } from "services/merchant.service";
import { fetchHandleDailyMission } from "services/mission.service";
import { getCountNumberOfNotificationService } from "services/notification.service";
import { getUserProfileService } from "services/user.service";
import { UserStore } from "stores";
import { shallow } from "zustand/shallow";

const { confirm } = Modal;

export const useInitialUserProfile = (isDisabledFlag?: boolean) => {
  const { data: session } = useSession();

  const {
    userAuthen,
    maxCardData,
    patoisMaxcard,
    setUserAuthen,
    setMaxcardData,
    setPatoisMaxcard,
    setCountNumberOfCart,
    setCountNumberOfNotification,
    setCountNumberOfMerchantShop,
  } = UserStore(
    (state) => ({
      userAuthen: state.userAuthen,
      maxCardData: state.maxCardData,
      patoisMaxcard: state.patoisMaxcard,
      setUserAuthen: state.setUserAuthen,
      setMaxcardData: state.setMaxcardData,
      setPatoisMaxcard: state.setPatoisMaxcard,
      setCountNumberOfCart: state.setCountNumberOfCart,
      setCountNumberOfNotification: state.setCountNumberOfNotification,
      setCountNumberOfMerchantShop: state.setCountNumberOfMerchantShop,
    }),
    shallow,
  );

  useEffect(() => {
    initialUserProfile();
  }, [session?.accessToken]);

  const initialUserProfile = async () => {
    if (isDisabledFlag) return;
    if (!session?.myUser?.userId) return;

    if (!session?.myUser?.user_secret) {
      await userSecretExpireHandler();
      return;
    }

    const { data } = await getUserProfileService();
    if (!!data?.data?.length) {
      setUserAuthen(data?.data[0]);
    }

    await fetchMerchantShop();
    await fetchPatoisMaxCard();
    await fetchHandleDailyMission();
    await fetchCountNumberOfCart();
    await fetchCountNumberOfNotification();
  };

  const userSecretExpireHandler = async () => {
    confirm({
      title: "Session หมดอายุ",
      cancelButtonProps: {
        disabled: true,
        style: {
          display: "none",
        },
      },
      content: "กรุณาเข้าสู่ระบบใหม่อีกครั้ง",
      onOk: () => {
        setUserAuthen({} as IAuthen);
        setMaxcardData({} as IMaxcard);
        setPatoisMaxcard({} as IPatoisMaxcard);
        liffSignOut();
        signOut({ callbackUrl: "/auth" });
      },
    });
  };

  const fetchPatoisMaxCard = async () => {
    if (patoisMaxcard.patois_maxcard_id || maxCardData.CardNo) return;

    const response = await getMaxcardInfo();
    const maxCard = response?.data?.data;

    if (maxCard) {
      setPatoisMaxcard(maxCard);
      const { data } = await getMaxcardByPhone({
        phoneNo: maxCard.patois_tel,
      });
      if (data && data?.data?.length) {
        setMaxcardData(data.data[0]);
      }
    }
  };

  const fetchMerchantShop = async () => {
    const { data } = await getMerchantShopByUserIdService({
      pageNumber: 1,
      rowsOfPage: 1,
    });
    if (data?.data) {
      setCountNumberOfMerchantShop(data?.total);
    }
  };

  const fetchCountNumberOfNotification = async () => {
    const response = await getCountNumberOfNotificationService();
    if (response?.data?.data) {
      setCountNumberOfNotification(response?.data?.data);
    }
  };

  const fetchCountNumberOfCart = async () => {
    const response = await inquiryCartData();
    if (response?.data) {
      setCountNumberOfCart(response?.total ?? 0);
    }
  };

  const getProfileImages = () => {
    if (userAuthen?.profile_pic_patois) {
      return userAuthen?.profile_pic_patois;
    } else if (userAuthen?.profile_pic_line) {
      return userAuthen?.profile_pic_line;
    } else {
      return;
    }
  };

  return { profileImages: getProfileImages() };
};
