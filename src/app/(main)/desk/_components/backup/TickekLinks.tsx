import style from './ticketLink.module.scss';

export default function TicketLinks() {
  return (
    <div className={style.container}>
      <div className={style.link}>
        <div>마시멜로우</div>
        <div>324개</div>
      </div>

      <div className={style.verticleLine}></div>

      <div className={style.link}>
        <div>응모권</div>
        <div>324개</div>
      </div>
    </div>
  );
}
