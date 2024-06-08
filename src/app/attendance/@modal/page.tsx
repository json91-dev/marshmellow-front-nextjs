import FulfillAttendanceCompleteModal from '@/app/attendance/@modal/FulfillAttendanceCompleteModal';
import FulfillAttendanceNoDayModal from '@/app/attendance/@modal/FulfillAttendanceNoDayModal';
import FulfillAttendanceDateSelectModal from '@/app/attendance/@modal/FulfillAttendanceDateSelectModal';
import FulfillAttendanceDateCheckModal from '@/app/attendance/@modal/FulfillAttendanceDateCheckModal';

export default function AttendancePageModals() {
  return (
    <>
      <FulfillAttendanceCompleteModal />
      <FulfillAttendanceNoDayModal />
      <FulfillAttendanceDateSelectModal />
      <FulfillAttendanceDateCheckModal />
    </>
  );
}
