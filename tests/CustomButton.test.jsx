import { vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import CustomButton from "../src/components/CustomButton";

describe("CustomButton", () => {
    it("should render a button with the text 'Click me'", () => {
        render(<CustomButton onClick={() => {}} />);

        const button = screen.getByRole("button", { name: "Click me"});

        expect(button).toBeInTheDocument();
    })
})