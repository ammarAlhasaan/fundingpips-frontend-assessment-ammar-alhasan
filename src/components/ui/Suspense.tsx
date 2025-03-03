import {Spinner} from "@/components/ui";
import {Suspense as SuspenseReact} from "react";

export default function Suspense({children, fallback, spinnerLabel}: any) {
  return <SuspenseReact
    fallback={<Spinner
      classNames={{label: "text-foreground mt-4"}} label={spinnerLabel} variant="dots"/>}>
    {children}
  </SuspenseReact>
}

