export async function POST() {
  return new Response("Logged out", {
    headers: {
      "Set-Cookie": `token=; HttpOnly; Path=/; Max-Age=0`,
    },
  });
}