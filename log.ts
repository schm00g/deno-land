import * as log from "https://deno.land/std@0.137.0/log/mod.ts";

// Simple default logger out of the box. You can customize it
// by overriding logger and handler named "default", or providing
// additional logger configurations. You can log any data type.
log.debug("Hello world");
log.info(123456);
log.warning(true);
log.error({ foo: "bar", fizz: "bazz" });
log.critical("500 Internal server error");