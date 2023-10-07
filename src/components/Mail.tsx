import { MailData } from "./PostPage";
interface Props {
  id: number;
  item: MailData;
}
const Mail = (prop: Props) => {
  return (
    <div key={prop.id} className="accordion-item    ">
      <div
        className="container-fluid d-flex align-items-stretch border-dark accordion-header collapsed "
        role="button"
        data-bs-toggle="collapse"
        data-bs-target={"#mail-" + prop.id}
      >
        <h4 className="col">{prop.item.sender_email}</h4>
        <h4 className="col">{prop.item.title}</h4>
        <h4 className="col">{prop.item.time_sent}</h4>
      </div>
      <div id={"mail-" + prop.id} className="accordion-collapse collapse">
        <div className="accordion-body">
          <h4 className="">{prop.item.content}</h4>
        </div>
      </div>
    </div>
  );
};
export default Mail;
