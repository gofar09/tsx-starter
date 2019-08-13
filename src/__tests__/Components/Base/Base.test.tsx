import React from "react";
import { Base } from "@Components";
import { ReactWrapper, mount } from "enzyme";

describe("Base tests", () => {
  let fullWrapper: ReactWrapper;

  test("should doa thing", () => {
    fullWrapper = mount(<Base />);
    expect(fullWrapper.find("#taco")).toExist();
    fullWrapper.unmount();
  });

  test("should have default state property message", () => {
    fullWrapper = mount(<Base />);
    expect(fullWrapper).toHaveState("message", "Goats");
    fullWrapper.unmount();
  });
});
