'use client';
import style from './termsBottomSheet.module.scss';

export default function TermsBottomSheet() {
  return (
    <div>
      <div>
        <div>체크박스</div>
        <div>약관에 모두 동의합니다.</div>
      </div>

      <div className={style.gray}>
        <div>
          <div>
            <div>체크박스</div>
            <div>(필수) 마시멜로우 이용약관에 동의합니다.</div>
          </div>
          <div>
            <div>개인정보 수집 이용동의</div>
            <div>아이콘</div>
          </div>
          <div>
            <div>서비스 이용 약관 동의</div>
            <div>아이콘</div>
          </div>
        </div>

        <div>
          <div>
            <div>체크박스</div>
            <div>(선택) 마시멜로우 이용약관에 동의합니다.</div>
          </div>
          <div>마케팅 정보 동의를 하면 마시멜로우의 다양한 혜택 및 이벤트를 빠르게 알 수 있어요</div>
        </div>

        <div>
          <div>
            <div>체크박스</div>
            <div>(선택) 푸시 알림 켜기</div>
          </div>
          <div>푸시 알림을 켜면 마시멜로우 획득에 도움이 돼요</div>
        </div>

        <div>
          <div>
            <div>체크박스</div>
            <div>(필수) 만 14세 이상입니다.</div>
          </div>
        </div>

        <div>확인 버튼</div>
      </div>
    </div>
  );
}
