import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" } };

// TODO: have this template reviewed by your legal adviser (DPDP Act, 2023 and IT Act, 2000).
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <div>
        <h2>Who we are</h2>
        <p>This website is operated by {site.legalName} (“we”, “us”). This policy explains how we collect and use personal data.</p>
      </div>
      <div>
        <h2>Information we collect</h2>
        <ul>
          <li>Details you share through our contact form, such as name, email, phone, company and project details.</li>
          <li>Basic technical data such as browser type and pages visited, collected through analytics.</li>
        </ul>
      </div>
      <div>
        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiry and provide our services.</li>
          <li>To improve our website and services.</li>
          <li>To meet legal obligations.</li>
        </ul>
      </div>
      <div>
        <h2>Sharing and retention</h2>
        <p>We do not sell your data. We share it only with service providers who help us operate, under confidentiality obligations, and keep it only as long as needed.</p>
      </div>
      <div>
        <h2>Your rights</h2>
        <p>You may ask to access, correct or delete your personal data, or withdraw consent, by emailing <a className="text-aqua" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </LegalPage>
  );
}
