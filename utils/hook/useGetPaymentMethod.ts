import { IPaymentMethod } from "interface/payment.interface";
import { useEffect, useState } from "react";
import { getPaymentMethod } from "services/ecommerce.service";

export const useGetPaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod[]>([]);

  const [cashMethod, setCashMethod] = useState<IPaymentMethod>();
  const [transferMethod, setTransferMethod] = useState<IPaymentMethod>();
  const [offlineQRMethod, setOfflineQRMethod] = useState<IPaymentMethod>();

  useEffect(() => {
    fetchPaymentMethod();
  }, []);

  const fetchPaymentMethod = async () => {
    const response = await getPaymentMethod();
    const paymentMethod = response.data?.data;

    if (paymentMethod) {
      setPaymentMethod(paymentMethod);
      const transferData = paymentMethod.find(
        ({ payment_type }) => payment_type === "TRANSFER",
      );

      const cashData = paymentMethod.find(
        ({ payment_type }) => payment_type === "CASH",
      );

      const offlineQRData = paymentMethod.find(
        ({ payment_type }) => payment_type === "QR_OFFLINE",
      );

      setCashMethod(cashData);
      setTransferMethod(transferData);
      setOfflineQRMethod(offlineQRData);
    }
  };

  return {
    paymentMethod,
    cashMethod,
    transferMethod,
    offlineQRMethod,
  };
};
