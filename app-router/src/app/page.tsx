const session = null;

export default function Home() {
  if (!session) throw new Error("Auth is required to accesss this resources");
  return <main>this is an auth-only page</main>;
}
