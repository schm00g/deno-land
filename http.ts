import { serve } from "https://deno.land/std/http/server.ts";
import handler from './handler.ts';

serve(req => new Response(handler()));