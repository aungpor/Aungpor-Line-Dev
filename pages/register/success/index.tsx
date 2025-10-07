import AppButton from '@/components/Common/Button';
import FormTextInput from '@/components/Common/FormTextInput';
import { PTG_LOGO } from '@/constants/component';
import { Form } from 'antd';
import { useRouter } from "next/router";

export default function RegisterSuccess() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
      <div
        className="w-full max-w-[756px] flex flex-col items-center bg-white gap-[25px] p-8"
      >
      </div>
    </div>
  );
}
