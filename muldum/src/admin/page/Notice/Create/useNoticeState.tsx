import { useState } from 'react';
import { Notice } from './type';

export default function useNoticeState() {
    const [notice, setNotice] = useState<Notice>({
        idx: Date.now(),
        title: '',
        date: '',
        formattedDate: '',
        image: '',
        imageCaption: '',
        content: [],
        author: '',
    });

    return [notice, setNotice] as const;
}