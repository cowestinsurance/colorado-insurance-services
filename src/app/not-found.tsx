import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-beige min-h-[60vh] flex items-center">
      <Container variant="narrow">
        <div className="text-center">
          <p className="font-serif text-[120px] md:text-[180px] leading-none text-brand-navy/10 font-bold">
            404
          </p>
          <h1 className="font-serif text-heading md:text-display-sm text-brand-navy -mt-8 mb-4">
            Page not found
          </h1>
          <p className="text-body-lg text-neutral-600 font-sans mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/">Go home</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
