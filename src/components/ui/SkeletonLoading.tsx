import {Skeleton} from "@heroui/skeleton";

export default function SkeletonLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="p-4">
      <Skeleton className="rounded-lg mb-4">
        <div className="h-24 rounded-lg bg-default-300"/>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"/>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"/>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"/>
        </Skeleton>
      </div>
    </div>
  );
}
