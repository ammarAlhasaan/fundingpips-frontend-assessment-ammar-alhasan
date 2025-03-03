import {Spinner} from "@/components/ui";
import {ReactNode, Suspense as SuspenseReact} from "react";
interface SuspenseProps {
  children: ReactNode;
  fallback?: ReactNode;
  spinnerLabel?: string;
}

export default function Suspense({children, fallback, spinnerLabel}: SuspenseProps) {
  return <SuspenseReact
    fallback={fallback || <Spinner
      classNames={{label: "text-foreground mt-4"}} label={spinnerLabel} variant="dots"/>}>
    {children}
  </SuspenseReact>
}

