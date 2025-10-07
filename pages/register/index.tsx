import AppButton from '@/components/Common/Button';
import FormTextInput from '@/components/Common/FormTextInput';
import { PTG_LOGO } from '@/constants/component';
import { Form } from 'antd';
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [form] = Form.useForm();

  // 🔹 เมื่อกด submit แล้วเรียกฟังก์ชันนี้
  const handleSubmit = (values: any) => {
    console.log("📤 ส่งข้อมูลฟอร์ม:", values);

    // ตัวอย่าง: ตรวจสอบค่าแล้ว redirect ไปหน้าอื่น
    if (values.authenID) {
      router.push("register/otp"); // ไปหน้า OTP สมมติ
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
      <Form
        form={form}
        className="w-full max-w-[756px] flex flex-col items-center bg-white gap-[25px] p-8"
        onFinish={handleSubmit} // ✅ ฟังก์ชัน submit
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
          name="authenID"
          allowClear={false}
          fixErrorContainer={true}
          className="!h-[40px] !text-16"
          placeholder="หมายเลขผู้เช่า"
          formClassName="w-full"
          requiredMessage='ระบุหมายเลขผู้เช่า'
        />

        <AppButton
          htmlType="submit" // ✅ ให้ปุ่มเป็น type=submit
          type="primary"
          title="ลงทะเบียน"
          className="!px-[16px] mt-[9px]"
        />
        </div>

        
      </Form>
    </div>
  );
}
