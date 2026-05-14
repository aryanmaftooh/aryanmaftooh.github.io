import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

const PORT = 8080;

console.log(`HTTP server running on http://localhost:${PORT}/`);

serve((req: Request) => {
  return new Response("Hello from Deno TypeScript HTTP server!", {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}, { port: PORT });
