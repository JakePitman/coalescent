import { renderHook } from "@testing-library/react";
import { usePage } from "./usePage";
import { usePathname } from "next/navigation";
jest.mock("next/navigation", () => {
  const original = jest.requireActual("next/navigation");
  return {
    ...original,
    usePathname: jest.fn(),
  };
});

describe("usePage", () => {
  it("Returns a forward slash for the root subdirectory", () => {
    // @ts-ignore
    usePathname.mockImplementation(() => "/");
    const { result } = renderHook(() => usePage());
    expect(result.current).toEqual("/");
  });

  it("Returns the subdirectory of the url, including the forward slash", () => {
    // @ts-ignore
    usePathname.mockImplementation(() => "/jake");
    const { result } = renderHook(() => usePage());
    expect(result.current).toEqual("/jake");
  });

  it("Excludes everything after the subdirectory", () => {
    // @ts-ignore
    usePathname.mockImplementation(() => "/jake/tutant/meenage/neetle/teetles");
    const { result } = renderHook(() => usePage());
    expect(result.current).toEqual("/jake");
  });

  it("Returns undefined when the subdirectory is not recognized", () => {
    // @ts-ignore
    usePathname.mockImplementation(() => "/tutant/meenage/neetle/teetles");
    const { result } = renderHook(() => usePage());
    expect(result.current).toBeUndefined();
  });
});
