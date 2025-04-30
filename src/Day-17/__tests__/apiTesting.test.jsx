import React from "react";
const { render, waitFor, screen } = require("@testing-library/react");
const { default: ApiTesting } = require("../components/ApiTesting");
import "@testing-library/jest-dom";


describe("Api testing file", () => {
    it('check list of users fetching', async () => {
        // Mock fetch with a resolved promise and correct structure
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({
                    users: [
                        { id: 1, firstName: "John" },
                        { id: 2, firstName: "Alice" }
                    ]
                })
            })
        );

        render(<ApiTesting />);

        // Check if the "Loading ........" text is initially displayed
        expect(screen.getByText("Loading ........")).toBeInTheDocument();

        await waitFor(() => {
            // Check if users' names are rendered after fetching
            expect(screen.getByText("UserName : John")).toBeInTheDocument();
            expect(screen.getByText("UserName : Alice")).toBeInTheDocument();
        });

        // Ensure the loading message disappears after users are fetched
        expect(screen.queryByText("Loading ........")).not.toBeInTheDocument();
    });
});
