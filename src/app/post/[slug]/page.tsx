type ParamsProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: ParamsProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>rota dinamica {slug}</h1>
    </div>
  );
}
