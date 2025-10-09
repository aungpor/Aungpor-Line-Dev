import { PDPA_HTML } from "@/constants/pdpaContentText";
import { Skeleton } from "antd";
import AppButton from "components/Common/Button";
import { IUtmQuery } from "interface/auth.interface";
import { useEffect, useState, useRef } from "react";

interface IProps {
    className?: string;
    utmData?: IUtmQuery;
    onSuccess: () => void;
}

const PDPAConsentContent = (props: IProps) => {
    const { utmData, onSuccess, className = "" } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isReadConsent, setIsReadConsent] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const onScrollPDPAConsentHandler = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, offsetHeight } = e.currentTarget;
        // ตรวจว่าเลื่อนถึงเกือบสุด (เผื่อระยะ 40px)
        const isScrollToBottom = offsetHeight + scrollTop >= scrollHeight - 40;
        if (isScrollToBottom && !isReadConsent) {
            setIsReadConsent(true);
        }
    };

    // ถ้าเนื้อหาสั้น (ไม่ต้องเลื่อน) ให้ถือว่าอ่านแล้ว
    useEffect(() => {
        if (!isLoading && contentRef.current) {
            const el = contentRef.current;
            if (el.scrollHeight <= el.clientHeight + 4) {
                setIsReadConsent(true);
            }
        }
    }, [isLoading]);

    return (
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 pt-10 flex justify-center">
            <div className="w-full max-w-[756px] flex flex-col items-center bg-white">
                {/* หัวข้อชิดซ้าย */}
                <div className="w-full mb-4">
                    <div className="text-20 text-semi-bold text-left">
                        ข้อตกลงเกี่ยวกับการใช้ข้อมูล
                    </div>
                </div>

                <div className="w-full">
                    <div
                        ref={contentRef}
                        className="pdpa-consent-content overflow-auto max-h-[580px] rounded-md mb-4 text-[12px] leading-[22px] text-text-secondary "
                        onScroll={onScrollPDPAConsentHandler}
                        role="region"
                        aria-label="PDPA consent content"
                    >
                        {isLoading ? (
                            <Skeleton active paragraph={{ rows: 6 }} />
                        ) : (
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-col gap-[4px] p-2">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: PDPA_HTML }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>


                </div>
                {/* ปุ่มยอมรับ */}
                <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50">
                    <AppButton
                        title="ยอมรับ"
                        onClick={() => onSuccess && onSuccess()}
                        disabled={!isReadConsent || isLoading}
                        className="!w-full !h-[40px]"
                    />
                </div>

            </div>
        </div>
    );
};

export default PDPAConsentContent;
