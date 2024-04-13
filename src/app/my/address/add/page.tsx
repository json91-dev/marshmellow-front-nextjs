export default function AddressAddPage() {
  return (
    <div>
      <div>
        <label htmlFor={'locationName'}>*배송지명</label>
        <input id={'locationName'} type="text" />
      </div>

      <div>
        <label htmlFor={'name'}>*이름</label>
        <input id={'name'} type="text" />
      </div>

      <div>
        <label htmlFor={'address'}>*주소</label>
        <div>
          <input id={'address'} type="text" disabled={true} />
          <button>주소 검색</button>
        </div>
        <input id={'addressDetail'} type="text" disabled={true} />
        <input id={'addressDetail2'} type="text" disabled={true} />
      </div>

      <div>
        <label htmlFor={'name'}>*연락처1</label>
        <div>
          <input id={'number1'} type="number" />
          <div>-</div>
          <input id={'number2'} type="number" />
          <div>-</div>
          <input id={'number3'} type="number" />
        </div>
      </div>

      <div>
        <label htmlFor={'name'}>연락처2</label>
        <div>
          <input id={'number1'} type="number" />
          <div>-</div>
          <input id={'number2'} type="number" />
          <div>-</div>
          <input id={'number3'} type="number" />
        </div>
      </div>

      <div>
        <label htmlFor={'name'}>요청사항</label>
        <input id={'name'} type="text" />
      </div>

      <button>확인</button>
    </div>
  );
}
