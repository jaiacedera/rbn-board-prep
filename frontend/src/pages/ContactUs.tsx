import PageHeader from "../components/PageHeader";
export default function ContactUs() {
  return (
    <>
      <PageHeader
        label="CONTACT"
        title="Contact us"
        sub="Contact support is not connected in this prototype."
      />
      <section className="section">
        <div className="callout">
          Contact details and message delivery have not been configured.
        </div>
        <a className="text-link" href="#home">
          Back to home ↗
        </a>
      </section>
    </>
  );
}
