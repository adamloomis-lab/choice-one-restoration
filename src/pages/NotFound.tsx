import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-navy)] text-white">
      <div className="container-x py-32 text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="display text-6xl sm:text-7xl text-white">Page Not Found</h1>
        <p className="mt-6 text-white/70 max-w-md mx-auto">
          The page you're looking for doesn't exist or has moved. Let's get you back on solid ground.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
