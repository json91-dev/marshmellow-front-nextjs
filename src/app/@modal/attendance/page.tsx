import FulfillAttendanceCompleteModal from '@/app/@modal/attendance/FulfillAttendanceCompleteModal';
import FulfillAttendanceNoDayModal from '@/app/@modal/attendance/FulfillAttendanceNoDayModal';
import FulfillAttendanceDateSelectModal from '@/app/@modal/attendance/FulfillAttendanceDateSelectModal';
import FulfillAttendanceDateCheckModal from '@/app/@modal/attendance/FulfillAttendanceDateCheckModal';

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
