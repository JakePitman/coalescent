"use client";

import { usePage } from "@hooks/usePage";
import { useEffect } from "react";
import { usePageContext } from "@contexts/pageContext";

export function RouteChangeListener() {
  const pathname = usePage();
  const { setPage } = usePageContext();

  useEffect(() => {
    setPage(pathname);
  }, [pathname, setPage]);

  return <></>;
}
