import style from './page.module.scss';
import accordionStyle from './_components/accordiaon.module.scss'
import QuestionAccordion from './_components/QuestionAccordion';
import TopNavigation from '@/app/_components/common/TopNavigation';

export default function GuidePage() {
  return (
    <div className={style.guidePage}>
      <TopNavigation title={'사용 가이드'} />

      <div className={style.scrollArea}>
        <p className={style.header}>자주 묻는 질문</p>
        <QuestionAccordion title={'마시멜로우 서비스는 무엇인가요?'}>
          <p>
            {'만나서 반가워요!😀 마시멜로우에서 할 업무는 '}
            <span className={accordionStyle.bold}>{'딱 세가지'}</span>
            {'만 기억하세요.\n' +
              '\n' +
              '1. 정시출근\n' +
              '2. 점심시간\n' +
              '3. 정시퇴근\n' +
              '\n' +
              '업무 시간에 15분 내로 사무실 하단의 마시멜로우 버튼만 누르면 ‘마시멜로우’를 획득할 수 있어요! \n
            }
            <span className={accordionStyle.highlight}>{'Tip) 1분 안에 누르면 뽀너스 마시멜로우를 받을 수 있어요.'}</span>
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'마시멜로우는 무엇인가요?'}>
          <p>
            {'‘마시멜로우’는 업무 및 다양한 이벤트를 통해 획득 가능한 포인트로 '}
            <span className={accordionStyle.bold}>{'회원가입 후 획득 및 사용 가능한 포인트'}</span>
            {'에요.'}
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'뽀너스 마시멜로우는 무엇인가요?'}>
          <p>
            {'사무실에 있는 마시멜로우 버튼이 활성화 되었을 때 '}
            <span className={accordionStyle.bold}>{'1분 이내 눌러 광고를 시청'}</span>
            {'한 경우 업무 보상으로 마시멜로우를 추가로 받을 수 있어요.'}
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'마시멜로우는 어떻게 얻나요?'}>
          <p>
            {'마시멜로우를 얻는 방법은 크게 3가지가 있어요!\n' +
              '\n' +
              '1. 사무실에서 마시멜로우 버튼을 눌러 업무를 완수하면 마시멜로우를 얻을 수 있어요.\n' +
              '2. 일주일 연속 출근, 한 달 연속 출근시 마시멜로우를 얻을 수 있어요.\n' +
              '3. 다양한 이벤트를 통해 마시멜로우를 얻을 수 있어요.'}
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'소멸 예정 마시멜로우는 무엇인가요?'}>
          <p>
            {'소멸 예정 마시멜로우는 유효기간 종료일이 다가와 소멸이 예상되는 마시멜로우에요. '}
            <span className={accordionStyle.bold}>{'유효기간은 12개월'}</span>
            {'로 유효기간이 경과된 마시멜로우는 유효기간 도래 시 자동 소멸해요.\n\n'}
            {'(예: 2024.03.03 획득시, 2025.03.03 (23:59:59)까지 유효)\n'}
            {'02.29일 획득한 포인트는 03.01 소멸되며, 소멸된 마시멜로우는 복구되지 않아요.\n'}
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'레크레이션은 무엇인가요?'}>
          <p>
            {'얻은 마시멜로우를 사용할 수 있는 곳이에요.\n'}
            {'레크레이션 컨텐츠는 비정기적으로 바뀌어요.'}
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'탕비실은 무엇인가요?'}>
          <p>
            {'아직 오픈 예정이지만, 임직원분들을 위해 다양한 복지를 준비 중이에요. 현재 설문조사도 진행 중이니, 한 번씩 참여 부탁드려요! 🥺'}
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'근무시간은 어떻게 변경하나요?'}>
          <p>
            {'근무시간은 [내 책상]-[사원증 관리]-[근무시간]에서 변경 가능해요. '}
            <span className={accordionStyle.bold}>{'최종 변경 이후 7일이 지나야 변경이 가능해요.\n'}</span>
            <span className={accordionStyle.highlight}>{'*08시~19시 중에는 변경이 불가능해요.'}</span>
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'닉네임은 어떻게 변경하나요?'}>
          <p>
            {'닉네임은 [내 책상]-[사원증 관리]-[닉네임]에서 변경 가능해요. '}
            <span className={accordionStyle.bold}>{'닉네임 변경 후 30일 이후에 변경이 가능해요.'}</span>
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'마시멜로우 직급은 무엇이 있나요?'}>
          <p>
            {'현재 직급은 2가지가 있어요.\n'}
            {'1. 인턴 - 회원가입시\n'}
            {'2. 사원 - 누적 출근일 14일\n'}
            <span className={accordionStyle.highlight}>{'*등급 및 혜택은 더 추가될 예정이에요.'}</span>
          </p>
        </QuestionAccordion>

        <QuestionAccordion title={'하루에 마시멜로우를 몇 개까지 획득 가능한가요? '}>
          <p>
            {'하루에 마시멜로우는 n개 까지 획득이 가능해요.'}
          </p>
        </QuestionAccordion>
      </div>
    </div>
  );
}
