import RootLayout from "./layout";
import Header from "./header";

export default function Home() {
  return (
    <RootLayout>
      <Header></Header>
      <main>
        <h1>イベント用レジアプリ</h1>
      </main>
    </RootLayout>
  );
}
