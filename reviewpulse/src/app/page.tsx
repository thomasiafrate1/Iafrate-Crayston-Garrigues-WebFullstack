export default function Home() {
  console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <div className="p-10">
      <h1>Test env</h1>
      <p>Check console server</p>
    </div>
  );
}