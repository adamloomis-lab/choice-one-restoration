import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";
import TextUsButton from "./TextUsButton";
import DesktopEstimateButton from "./DesktopEstimateButton";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <Navigation />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <MobileActionBar />
      <TextUsButton />
      <DesktopEstimateButton />
      <CookieConsent />
    </div>
  );
}
