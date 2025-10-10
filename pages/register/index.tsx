
import React, { useState } from 'react';
import AppButton from '@/components/Common/Button';
import FormTextInput from '@/components/Common/FormTextInput';
import { PTG_LOGO } from '@/constants/component';
import { Form } from 'antd';
import { useRouter } from "next/router";
import ModalNotification from '@/components/Modal/ModalNotification';

export default function Register() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [authenID, setAuthenID] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isValidAuthenID = /^\d{6,8}$/.test(authenID);

  const handleSubmit = (values: any) => {
    console.log("📤 ส่งข้อมูลฟอร์ม:", values);
    setIsModalVisible(true)
    // if (values.authenID) {
    //   router.push("/register/pdpa");
    // }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
      <Form
        form={form}
        className="w-full max-w-[354px] md:max-w-[756px] flex flex-col items-center bg-white gap-[25px] p-8"
        onFinish={handleSubmit}
      >

        <div>
          <img src={PTG_LOGO} alt="logo" className="h-[100px]" />
        </div>

        <div className="flex flex-col items-center text-center gap-[5px]">
          <div className="text-xl font-medium">ลงทะเบียน</div>
          <div className="text-gray-600">
            กรุณากรอกรหัสผู้เช่า และรอรับรหัส OTP เพื่อยืนยัน
          </div>
        </div>

        <div className="flex flex-col items-center text-center w-full">
          <FormTextInput
            required
            type='tenantId'
            name="authenID"
            allowClear={false}
            fixErrorContainer={true}
            className="!h-[40px] !text-16"
            placeholder="หมายเลขผู้เช่า"
            formClassName="w-full"
            requiredMessage='ระบุหมายเลขผู้เช่า'
            value={authenID}
            onChange={e => setAuthenID(e.target.value)}
          />

          <AppButton
            htmlType="submit"
            type="primary"
            title="ลงทะเบียน"
            className="!px-[16px] mt-[9px]"
            disabled={!isValidAuthenID}
          />

          <ModalNotification isVisible={isModalVisible} onClose={() => { setIsModalVisible(false) }} />
        </div>
      </Form>
    </div>
  );
}
