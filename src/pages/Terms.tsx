import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/constants";

export default function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of" highlight="Service">
      <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
      <p>
        These Terms of Service ("Terms") govern your use of the {BUSINESS.name} website. By
        accessing or using this site, you agree to these Terms.
      </p>

      <h2>Use of This Website</h2>
      <p>
        The content on this site is provided for general informational purposes about our
        roofing, siding, gutter, and window services. You agree to use the site lawfully and not
        to interfere with its operation or security.
      </p>

      <h2>Estimates & Service</h2>
      <p>
        Information on this website does not constitute a binding offer or guarantee of pricing,
        availability, or results. All estimates are provided after an inspection, and the scope,
        price, and warranty for any project are governed by the separate written agreement you
        sign with {BUSINESS.legalName}.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this site, including text, logos, graphics, and images, is the property
        of {BUSINESS.legalName} or its licensors and may not be copied or reused without
        permission.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our site may link to third-party websites. We are not responsible for the content or
        practices of those sites.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {BUSINESS.name} is not liable for any indirect or
        incidental damages arising from your use of this website. The site is provided "as is"
        without warranties of any kind.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
        <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phone}</a>.
      </p>

      <p>
        <em>
          These Terms are provided for general informational purposes and are not legal advice.
          Please review them with your own legal counsel to confirm they meet your specific needs.
        </em>
      </p>
    </LegalPage>
  );
}
