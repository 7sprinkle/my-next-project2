import Hero from "../_componets/Hero";
import Sheet from "../_componets/sheet";

export const metadata = {
  title: "ニュース",
}

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}