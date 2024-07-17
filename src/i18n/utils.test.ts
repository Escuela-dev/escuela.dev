import { describe, it, expect } from "vitest";

import { useTranslatedPath } from "./utils";

describe("useTranslatedPath", () => {
  describe("es", () => {
    const translatePath = useTranslatedPath("es");
    it("should return the path with the language prefix", () => {
      expect(translatePath("/")).toBe("/es/");
    });
    it("should return the path with the language prefix", () => {
      expect(translatePath("/es")).toBe("/es");
    });
    it("should return the path with the language prefix", () => {
      expect(translatePath("/es/")).toBe("/es/");
    });
  });
  // showDefaultLang = false
  describe("en", () => {
    const translatePath = useTranslatedPath("en");
    it("should return the path with the language prefix", () => {
      expect(translatePath("/")).toBe("/");
    });
    it("should return the path with the language prefix", () => {
      expect(translatePath("/en")).toBe("/");
    });
    it("should return the path with the language prefix", () => {
      expect(translatePath("/en/")).toBe("/");
    });
  });
});
