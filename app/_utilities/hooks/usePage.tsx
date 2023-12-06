import { usePathname } from "next/navigation";
import { pageNames, PageNames } from "@customTypes/pageNames";

export const usePage = (): PageNames | undefined => {
  const pathname = usePathname();
  const subdirectory = "/" + pathname.split("/")[1];
  if (pageNames.some((pageName) => subdirectory === pageName)) {
    return subdirectory as unknown as PageNames;
  }
  return undefined;
};
