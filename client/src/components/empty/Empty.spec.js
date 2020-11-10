import React from "react";
import { render, mount, shallow } from "enzyme";

import Empty from "./Empty";

describe("Empty component", () => {
    it("should render Empty component", () => {
        const component = shallow(<Empty />);

        expect(component).toMatchSnapshot();
    });
});