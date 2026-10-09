import Image from "next/image";
import { Contact } from "../types/officeSpace.type";

export default function SalesContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <Image
            src={contact.photo}
            width={60}
            height={60}
            className="object-cover"
            alt="photo"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold">{contact.name}</p>
          <p className="text-sm leading-[21px]">{contact.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a href="#">
          <Image
            src="/assets/images/icons/call-green.svg"
            width={40}
            height={40}
            alt="call"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/images/icons/chat-green.svg"
            width={40}
            height={40}
            alt="chat"
          />
        </a>
      </div>
    </div>
  );
}
