export interface LoginModalProps {
    onClose: () => void;
}
export interface LoginModalComponentProps extends LoginModalProps {
    onLoginSuccess: () => void;
}
export interface Props extends LoginModalProps {
    onLoginSuccess: () => void; 
}