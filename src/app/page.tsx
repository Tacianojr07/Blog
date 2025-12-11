export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="text-zinc-100">
      <div className="bg-zinc-900"></div>
    </div>
  );
}
