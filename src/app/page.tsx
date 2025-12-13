import { Container } from "../components/Container";

export default async function Home() {
  return (
    <Container>
      <Container>
        <header>
          <h1 className="text-6xl text-slate-800 font-bold py-8 text-center">
            header
          </h1>
        </header>

        <main>
          <p>hello world</p>
        </main>

        <footer className="text-6xl text-slate-800 font-bold py-8 text-center">
          footer
        </footer>
      </Container>
    </Container>
  );
}
