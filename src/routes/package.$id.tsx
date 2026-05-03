import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PackageDetailView } from "@/components/PackageDetailView";
import { findDestination, findPackage } from "@/data/travel";

function PackageError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Package could not load</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </Layout>
  );
}

export const Route = createFileRoute("/package/$id")({
  loader: ({ params }) => {
    const pkg = findPackage(params.id);
    if (!pkg) throw notFound();
    const dest = findDestination(pkg.destinationSlug);
    return { pkg, dest };
  },
  head: ({ loaderData }) => {
    const pkg = loaderData?.pkg;
    if (!pkg) return { meta: [{ title: "Package not found" }] };
    return {
      meta: [
        { title: `${pkg.title} — ${pkg.duration} | Tripze Travels` },
        { name: "description", content: pkg.summary },
        { property: "og:title", content: pkg.title },
        { property: "og:description", content: pkg.summary },
        { property: "og:image", content: pkg.image },
        { name: "twitter:image", content: pkg.image },
      ],
    };
  },
  component: PackageDetail,
  errorComponent: PackageError,
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Package not found</h1>
        <Link to="/packages" className="text-primary underline mt-4 inline-block">Back to packages</Link>
      </div>
    </Layout>
  ),
});

function PackageDetail() {
  const { pkg, dest } = Route.useLoaderData();
  return (
    <Layout>
      <PackageDetailView pkg={pkg} dest={dest} />
    </Layout>
  );
}