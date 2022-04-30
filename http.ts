import handler from './handler.ts';

import { serve } from "https://deno.land/std/http/server.ts";
serve(req => new Response(handler()));