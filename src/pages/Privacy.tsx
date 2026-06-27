import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/constants";

export default function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy" highlight="Policy">
      <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
      <p>
        {BUSINESS.legalName} ("{BUSINESS.name}," "we," "us," or "our") respects your privacy.
        This Privacy Policy explains how we collect, use, and protect the information you provide
        when you visit our website or request our services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information you voluntarily provide through our contact and quote-request
        forms, such as your name, phone number, email address, property address, and details
        about your project. We may also collect basic, non-identifying technical data (such as
        browser type and pages visited) to help us improve our website.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and schedule inspections or estimates;</li>
        <li>To provide and complete the services you request;</li>
        <li>To assist with insurance claim documentation when applicable;</li>
        <li>To follow up about your project and, with your consent, share relevant offers.</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We may share it with trusted service providers
        who help us operate our business (such as scheduling or communication tools) and, where
        relevant to your project, with your insurance company. We may also disclose information
        when required by law.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information. However, no method of
        transmission over the internet is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request that we update or delete your personal information, or opt out of
        non-essential communications, by contacting us at any time.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
        <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phone}</a>, or by mail at{" "}
        {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
        {BUSINESS.address.zip}.
      </p>

      <p>
        <em>
          This policy is provided for general informational purposes and is not legal advice.
          Please review it with your own legal counsel to confirm it meets your specific needs.
        </em>
      </p>
    </LegalPage>
  );
}
