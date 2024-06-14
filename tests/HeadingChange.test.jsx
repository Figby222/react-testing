import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import HeadingChange from "../src/HeadingChange.jsx";

describe("HeaderChange component", () => {
    it('renders I like cookies', () => {
        const { container } = render(<HeadingChange />);
        expect(container).toMatchSnapshot();
    });

    it('renders I like pizza after button click', async () => {
        const user = userEvent.setup();

        render(<HeadingChange />);
        const button = screen.getByRole("button", { name: "Change heading text" });

        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(/i like pizza/i);
    });
});