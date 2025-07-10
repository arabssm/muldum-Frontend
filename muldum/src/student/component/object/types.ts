export interface Request {
    no: string;
    title: string;
    qty: number;
    status: string;
    reason: string;
}

export interface Props {
    request: Request;
    onReasonChange: (no: string, newReason: string) => void;
}