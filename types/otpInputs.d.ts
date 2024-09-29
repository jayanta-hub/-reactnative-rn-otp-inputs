export interface RnOtpInputsProps {
    pinCount: number;
    onSubmit: (otp: number) => void;
    secureTextEntry?: boolean;
    autoSubmit?: boolean;
    mode?: "rectangle" | "flat"| "circle";
    borderRadius?: number;
    onChageValue?: (otp: string) => void;
    bgcolor?: string;
    textColor?: string;
    borderWidth?: number;
    borderColor?: string;
    keyboardType?: "number-pad";
    buttonTitle?: string;
    Minute?: number;
    Second?: number;
    buttonStyle?: object;
    onResendClick?: () => void;
}