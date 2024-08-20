import { http, HttpResponse } from 'msw';

export const alarmHandlers = [
  http.get(`${process.env.NEXT_PUBLIC_MSW_API_URL}/alarm`, () => {
    return HttpResponse.json({
      data: alarmData,
    });
  }),
];

const alarmData = [
  {
    type: 'contact',
    title: '{닉네임}님, 문의주신 내용의 답변이 도착했어요!',
    description:
      '{닉네임}님 안녕하세요?\n\n이용에 불편함을 드려 대단히 죄송합니다.\n\n네트워크 환경이 불안정했을 경우 일시적으로 오류가 발생할수 있습니다. 네트워크 환경이 불안정했을 경우 일시적으로 오류가 발생할수 있습니다.',
    date: '2024-08-11T10:00:00',
  },

  {
    type: 'notice',
    title: '공지사항 제목',
    date: '2024-07-30T10:00:00',
  },

  {
    type: 'event',
    title: '이벤트 제목 노출',
    date: '2024-07-15T10:00:00',
  },

  {
    type: 'work',
    title: '업무',
    date: '2024-07-11T10:00:00',
  },
];
