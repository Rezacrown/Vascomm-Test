import FooterSection from "@/components/layouts/Footer";
import HeaderSection from "@/components/layouts/Header";
import NewProducts from "@/components/layouts/NewProducts/index";
import ProductsAvailable from "@/components/layouts/ProductsAvailable";
import PromoEventSection from "@/components/layouts/PromoEventSection";

export default function Home() {
  return (
    <div className="min-h-[150vh] bg-[white]">
      <HeaderSection />
      <main className="mx-[200px] py-10">
        <PromoEventSection />
        <NewProducts />
        <ProductsAvailable />
      </main>
      <FooterSection />
    </div>
  );
}
