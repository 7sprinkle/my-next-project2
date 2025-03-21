import Hero from "@/app/_componets/Hero";
import Sheet from "@/app/_componets/sheet";

export const metadata = {
  title: "コンタクト｜シンプルなコーポレートサイト",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}