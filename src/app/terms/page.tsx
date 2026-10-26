import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

// TODO: have this template reviewed by your legal adviser.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 2026">
      <div>
        <h2>Use of this website</h2>
        <p>By using this website you agree to these terms. The content is provided for general information about {site.legalName} and its services.</p>
      </div>
      <div>
        <h2>Intellectual property</h2>
        <p>All content, logos and designs on this website belong to {site.legalName} unless stated otherwise, and may not be copied without permission.</p>
      </div>
      <div>
        <h2>No warranty</h2>
        <p>We try to keep information accurate and up to date but do not guarantee it is complete. Project terms are governed by separate written agreements.</p>
      </div>
      <div>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India, and courts in {site.address.city} have jurisdiction.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>Questions about these terms: <a className="text-aqua" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </LegalPage>
  );
}
