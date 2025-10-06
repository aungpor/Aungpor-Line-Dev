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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Form form={form} className="w-full flex flex-col items-center  bg-white ">
        <div className="mb-6">
          <img src={PTG_LOGO} alt="logo" className="h-[100px]" />
        </div>

        <div className="text-xl font-semibold mb-2">ลงทะเบียน</div>
        <div className="text-gray-600 text-center mb-6">
          กรุณากรอกรหัสผู้เช่า และรอรับรหัส OTP เพื่อยืนยัน
        </div>

        <FormTextInput
          required
          name={"authenID"}
          allowClear={false}
          fixErrorContainer={false}
          onPressEnter={() => {
            console.log("active");
          }}
          className="!h-[40px] !text-16"
          placeholder="เบอร์โทรศัพท์หรืออีเมล"
          // prefix={<AppIcon name="UserOutline" />}
          onChange={() => { }}
          // requiredMessage="requiredMessage"
          formClassName="w-full"
        />

        <AppButton
          type="primary"
          title={"ยืนยัน"}
          className={`!px-[16px] `}
          onClick={() => { }}
          loading={false}
          disabled={false}
        />

        <Button
          type="default"
          className="!h-[40px] !w-full !rounded-[8px] bg-[#00B751] hover:bg-[#6ADE93] active:bg-[#006B37] focus:bg-[#00B751] hover:border-[#00B751] focus:border-[#00B751] border-none"
          style={{ color: "#fff", fontSize: 16, lineHeight: "24px" }}
        >
          <div className="flex flex-row items-center justify-center gap-[8px]">
            ถัดไป
          </div>
        </Button>

      </Form>
    </div>
  );
}
