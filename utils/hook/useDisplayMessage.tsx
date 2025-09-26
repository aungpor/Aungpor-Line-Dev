import { message as AntdMessage } from "antd";
import "./styles.scss";

interface IProps {
  duration?: number;
  className?: string;
}

export const useDisplayMessage = () => {
  const onDisplaySuccessMessage = (message: string, props?: IProps) => {
    AntdMessage.success({
      content: message,
      duration: props?.duration ?? 3,
      className: `message-container ${props?.className}`,
    });
  };

  const onDisplayErrorMessage = (message: string, props?: IProps) => {
    AntdMessage.error({
      content: message,
      duration: props?.duration ?? 3,
      className: `message-container ${props?.className}`,
    });
  };

  return { onDisplaySuccessMessage, onDisplayErrorMessage };
};
