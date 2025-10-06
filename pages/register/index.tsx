import AppButton from '@/components/Common/Button';
import FormOTPInput from '@/components/Common/FormOTPInput';
import FormTextInput from '@/components/Common/FormTextInput';
// import AppIcon from '@/components/Common/Icons';
import GenLinkModalContent from '@/components/GenLinkModalContent';
import { PTG_LOGO } from '@/constants/component';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TvIcon from '@mui/icons-material/Tv';
import { Button, Form, Input } from 'antd';
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [form] = Form.useForm();

  const topics = [
    { icon: <TvIcon fontSize="large" />, title: "Home TV", description: "TV Transfer", path: "/home-tv" },
    { icon: <MenuBookIcon fontSize="large" />, title: "Pixiv", description: "Pixiv Translate", path: "/pixiv" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
  <Form
    form={form}
    className="w-full max-w-[756px] flex flex-col items-center bg-white gap-[25px] p-8 "
  >
    <div>
      <img src={PTG_LOGO} alt="logo" className="h-[100px]" />
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="text-xl font-semibold">ลงทะเบียน</div>
      <div className="text-gray-600">
        กรุณากรอกรหัสผู้เช่า และรอรับรหัส OTP เพื่อยืนยัน
      </div>
    </div>

    <FormTextInput
      required
      name="authenID"
      allowClear={false}
      fixErrorContainer={false}
      onPressEnter={() => console.log("active")}
      className="!h-[40px] !text-16"
      placeholder="เบอร์โทรศัพท์หรืออีเมล"
      onChange={() => {}}
      formClassName="w-full"
    />

    <AppButton
      type="primary"
      title="ลงทะเบียน"
      className="!px-[16px]"
      onClick={() => {}}
      loading={false}
      disabled={false}
    />
  </Form>
</div>


  );
}
