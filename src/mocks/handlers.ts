import { HttpResponse, http } from 'msw';
import { alarmData } from '@/constraints';

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_MSW_API_URL}/alarm`, () => {
    return HttpResponse.json({
      data: alarmData,
    });
  }),
];
