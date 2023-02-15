import "./lit-button";
import { fixture } from "@open-wc/testing-helpers";

describe("lit-button", () => {

  beforeEach(async () => {
    await fixture(`<lit-button text="click me"></lit-button>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("lit-button")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("click me")).not.toBe(-1);
  });
});
