import { SpinLoader } from "./components/SpinLoader";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <SpinLoader containerClass="min-h-40" />;
}
