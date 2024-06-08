import FulfillAttendanceCompleteModal from '@/app/attendance/@modal/FulfillAttendanceCompleteModal';
import FulfillAttendanceNoDayModal from '@/app/attendance/@modal/FulfillAttendanceNoDayModal';
import FulfillAttendanceDateSelectModal from '@/app/attendance/@modal/FulfillAttendanceDateSelectModal';

export default function AttendancePageModals() {
  return (
    <>
      <FulfillAttendanceCompleteModal />
      <FulfillAttendanceNoDayModal />
      <FulfillAttendanceDateSelectModal />
    </>
  );
}
