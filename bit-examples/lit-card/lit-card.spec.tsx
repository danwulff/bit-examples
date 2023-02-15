import "./lit-card";
import { fixture } from "@open-wc/testing-helpers";

describe("lit-card", () => {

  beforeEach(async () => {
    await fixture(`<lit-card><p>Some content</p></lit-card>`);
  });

  it("slots content", async () => {
    const slot: HTMLSlotElement =
      window.document.body.getElementsByTagName("lit-card")[0].shadowRoot?.querySelector('slot');
    expect(slot.assignedElements[0]?.textContent.indexOf("Some content")).not.toBe(-1);
  });
});
