export interface Request {
    id: string;
    productName: string;
    quantity: number;
    status: string;
    reason: string;
}

export interface Props {
    request: Request;
    onReasonChange: (no: string, newReason: string) => void;
}
