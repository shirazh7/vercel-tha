// Skeleton loading state prevents layout shift during route transitions.
// Next.js renders this automatically when navigating between dashboard pages
// while the target page's data is being fetched (e.g., KB document reads).
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full px-4 py-8 space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
        <div className="space-y-3 pt-4">
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
