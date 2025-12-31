type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Admin Login post {id}</h1>
    </div>
  );
}
