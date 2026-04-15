import { MessageCircle } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528142850579";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
