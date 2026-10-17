"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureContactAttribution } from "@/lib/contact-attribution";

export function ContactAttribution() {
  const pathname = usePathname();

  useEffect(() => {
    captureContactAttribution();
  }, [pathname]);

  return null;
}
