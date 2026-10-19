import Link from "next/link";

export default function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-brand px-6 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/85"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span aria-hidden="true" className="mx-3">/</span><span aria-current="page">{title}</span></nav>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
