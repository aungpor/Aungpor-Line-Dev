
import { useRouter } from "next/router";

export default function RegisterSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div
        className="w-full max-w-[756px] flex flex-col items-center bg-white"
      >
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img src="/success-icon.svg" alt="success-icon" className="w-[80px] h-[80px]" />

          <div className="text-xl font-medium mb-2">ลงทะเบียนสำเร็จ!</div>
          <div className="font-normal text-[14px] leading-[11px] text-center mb-2">
  <div>
    ยินดีต้อนรับ{" "}
    <span className="text-green-600 font-medium">คุณวราภรณ์ มีสุข</span>
  </div>
  <br />
  คุณได้ทำการลงทะเบียนสำเร็จแล้ว
</div>


        </div>
      </div>
    </div>
  );
}
