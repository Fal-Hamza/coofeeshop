import ContactDetails from "@/components/ContactDetails";

export default function ({ children }) {
  return (
    <div>
      {children}
      <ContactDetails />
    </div>
  );
}
