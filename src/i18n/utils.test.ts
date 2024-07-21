import { describe, it, expect } from "vitest";

import { getRelativeLocaleUrl } from "./utils";

describe("useTranslatedPath", () => {
  describe("es", () => {
    it("should return the path with the language prefix", () => {
      expect(getRelativeLocaleUrl("es", "/")).toBe("/es/");
    });
    it("should return the path with the language prefix", () => {
      expect(getRelativeLocaleUrl("es", "/es")).toBe("/es/");
    });
    it("should return the path with the language prefix", () => {
      expect(getRelativeLocaleUrl("es", "/es/")).toBe("/es/");
    });
  });
  // showDefaultLang = false
  describe("en", () => {
    it("should return the path with the language prefix", () => {
      expect(getRelativeLocaleUrl("en", "/")).toBe("/");
    });
    it("should return the path with the language prefix", () => {
      expect(getRelativeLocaleUrl("en", "/en")).toBe("/");
    });
    it("should return the path with the language prefix", () => {
      expect(getRelativeLocaleUrl("en", "/en/")).toBe("/");
    });
  });
});
