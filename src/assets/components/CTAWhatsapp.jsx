import React from "react";
import { WhatsAppIcon } from "./icons";

const CTAWhatsapp = () => {
  return (
    <div className="h-[20vh] w-[100%] flex justify-center items-center">
      {/* CTA principal */}
      <a
        href="https://wa.me/5511952992652"
        target="_blank"
        rel="noreferrer"
        className="btn-gold inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-body text-sm tracking-wide mx-auto"
      >
       <WhatsAppIcon className="w-4 h-4" />
        Entre em contato
      </a>
    </div>
  );
};

export default CTAWhatsapp;
