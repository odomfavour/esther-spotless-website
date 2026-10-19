import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import HeroSlider from "../components/HeroSlider";

test("hero initial markup is identical across independent renders", () => {
  const serverMarkup = renderToString(createElement(HeroSlider));
  const initialClientMarkup = renderToString(createElement(HeroSlider));
  assert.ok(serverMarkup.includes("Uyo Professional Cleaning."));
  assert.ok(serverMarkup.includes("animation-delay"));
  assert.ok(initialClientMarkup === serverMarkup, "Initial hero markup must not depend on render-time randomness.");
});
