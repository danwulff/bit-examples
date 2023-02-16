# example 2

One component exists in the workspace "lit-button". Another component is created via `bit create lit lit-card` and merged in.

Even though the "lit-card" was created via the bit command line it does not appear in the pnpm-lock.yaml file.

**Expectation:** "bit create lit {}" should also update the pnpm-lock.yaml

The following commands all **don't** update the pnpm-lock.yaml:

* `bit install`
* `bit update`

However if I update a dependency of a different component and install, I'll get a pnpm-lock-yaml change:
* `bit deps set lit-button @popperjs/core --peer`
* `bit install`

Which will include:
```
  bit-examples/lit-card:
  specifiers: {}
```

See: https://github.com/danwulff/bit-examples/pull/3

**Problem:** These seemingly random specifier additions seem to cause a decent amount of git conflicts. If `bit create` updated the pnpm-lock.yaml when the component was initially created, things would be smoothed out for sure.
