# example 1

Two components are created in parallel by two different devs. A "lit-card" and a "lit-checkbox".

The "lit-card" is merged in first: https://github.com/danwulff/bit-examples/pull/1

Even though the "lit-checkbox" is completely independent we see that a code conflict occurs in the .bitmap: []()

This looks to be due to the fact that the .bitmap JSON places the components near each other. In other words if "lit-checkbox" was named "lit-apollo" this wouldn't occur because the pre-existing component "lit-button" would be between "lit-card" and "a-checkbox" within the .bitmap json.
