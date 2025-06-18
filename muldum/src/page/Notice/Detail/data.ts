import Img from '../../../assets/Img.svg'
export interface Notice {
    idx: number;
    title: string;
    date: string;
    formattedDate: string;
    image: string;
    imageCaption: string;
    content: string[];
    author: string;
}

const data: Notice[] = [
    {
        idx: 1,
        title: 'TSMC, AI칩 수요 견조 재확인…패키징 2배 확대',
        date: '2025-04-21T13:42:00',
        formattedDate: '2025.04.21. 오후 01:42',
        image: Img,
        imageCaption: 'TSMC의 2.5D 패키징 기술인 ‘CoWoS’ 내부 구조(자료=TSMC)',
        content: [
        'AI 가속기 수요 급전…TSMC, 2.5D 패키징 생산능력 2배 확대, TSMC는 1분기 실적발표에서 올해 설비투자 규모를 380억~420억 달러로 제시했다.',
        '중국의 저비용 AI 모델 등장과 미국의 관세 압박에도 불구하고 기존 투자 계획을 유지했다. AI 수요가 공급을 초과해 설비 능력 확장이 필요하다고 밝혔다.',
        '고객사 행동에 큰 변화가 없어 기존 수요는 유지되고 있다. TSMC는 2024~2029년 AI 가속기 관련 매출 연평균 성장률을 45%로 전망했다.',
        'TSMC는 2024~2029년 AI 가속기 관련 매출 연평균 성장률을 45%로 전망했다.',
        '올해 AI 관련 매출은 전년 대비 2배 성장이 예상된다.',
        '이에 따라 CoWoS 생산능력을 월 7만 장으로 2배 확대할 계획이다. CoWoS는 TSMC의 2.5D 패키징 기술로, AI 가속기 필수 요소로 주목받고 있다.',
        ],
        author: '김예빈'
    },
    {
        idx: 2,
        title: '삼성, 차세대 반도체 공정 가속화 발표',
        date: '2025-05-05T10:30:00',
        formattedDate: '2025.05.05. 오전 10:30',
        image: Img,
        imageCaption: '삼성전자 차세대 반도체 공정 로드맵 발표 현장',
        content: [
        '삼성전자는 오늘 열린 투자자 설명회에서 차세대 공정 전략을 발표했다.',
        '3나노 이하 공정의 안정성과 수율을 강화하겠다고 밝혔다.',
        'AI와 고성능 컴퓨팅 수요에 대응하기 위한 파운드리 역량 확대도 강조되었다.'
        ],
        author: '김예빈'
    }
];

export default data;
