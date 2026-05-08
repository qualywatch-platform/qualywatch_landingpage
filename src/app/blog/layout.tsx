import { NavbarV2 } from "@/components/NavbarV2";
import { Footer } from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarV2 />
      <main className="bg-white">{children}</main>
      <Footer />
    </>
  );
}
