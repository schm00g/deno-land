Hello Deno 🌎

to explicitly allow network access privileges
```
deno run --allow-net <file>.ts
```

to explicitly allow file access privileges
```
deno run --allow-read <file>.ts

to inspect dependencies
```
deno info <file>.ts
```

to format code
```
deno fmt <file>.ts
```

to lint
```
deno lint <file.ts>
```
to run tests
```
deno test
```

Deno always dies on uncaught errors.

Deno uses "ES Modules" and does not support require(). Third party modules are imported via URLs:
```
import * as log from 'https://deno.land/std@0.137.0/log/mod.ts';
```

[standard modules](https://deno.land/std)
