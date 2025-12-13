type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="  text-slate-900 min-h-screen">
      <div className=" bg-amber-500 max-w-lg mx-auto px-8">
        <main>{children}</main>
      </div>
    </div>
  );
}
