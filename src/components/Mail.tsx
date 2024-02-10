import { MailData } from "./PostPage";
interface Props {
  mailKey: number;
  item: MailData;
}
const Mail = ({ mailKey, item }: Props) => {
  return (
    <>
      <tr
        key={mailKey}
        className="accordion-item me-5 d-flex "

        role="button"
        data-bs-toggle="collapse"
        data-bs-target={"#mail-" + mailKey}
      >
        <td className="col border-dark">{item.senderEmail}</td>
        <td className="col border-dark">{item.title}</td>
        <td className="col border-dark">{item.timeSent.toString()}</td>
      </tr>
      <tr className="border-left border-right">
        <td className="border-dark " colSpan={3}>
          <div id={"mail-" + mailKey} className="accordion-collapse bg-dark-subtle border-bottom rounded-bottom me-5 text-wrap collapse accordion-body">
              {item.content}
          </div>
        </td>
      </tr>
    </>
  );
};
export default Mail;
