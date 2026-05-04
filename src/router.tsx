import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred.
        </p>

        {import.meta.env.DEV && error.message && (
          <pre className="mt-4 bg-muted p-3 text-xs text-destructive">
            {error.message}
          </pre>
        )}

        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  return createRouter({
    routeTree,
    context: {},
    defaultErrorComponent: DefaultErrorComponent,
  });
};