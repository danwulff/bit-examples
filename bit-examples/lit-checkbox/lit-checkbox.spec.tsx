import "./lit-checkbox";
import { fixture } from "@open-wc/testing-helpers";

describe("lit-checkbox", () => {

  beforeEach(async () => {
    await fixture(`<lit-checkbox label="check mate"></lit-checkbox>`);
  });

  it("has a label", async () => {
    const label =
      window.document.body.getElementsByTagName("lit-checkbox")[0].shadowRoot
        ?.textContent;
    expect(label.indexOf("check mate")).not.toBe(-1);
  });
});
