import handler from "https://aryanmaftoh.ir/exit_node.ts"; // import the default export
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

serve(handler, { port: 8080 });
console.log("Server running on http://localhost:8080");
