# example 1

Two components are created in parallel by two different devs. A "lit-card" and a "lit-checkbox".

The "lit-card" is merged in first: https://github.com/danwulff/bit-examples/pull/1

Even though the "lit-checkbox" is completely independent we see that a code conflict occurs in the .bitmap: https://github.com/danwulff/bit-examples/pull/2

This looks to be due to the fact that the .bitmap JSON places the components near each other. In other words if "lit-checkbox" was named "lit-apollo" instead this wouldn't occur because the pre-existing component "lit-button" would be between "lit-apollo" and "lit-card" within the .bitmap json.

Anyhow, all that to say. This kind of conflict happens often as we currently don't have an extensive list of components yet.
