import FooterSection from "@/components/layouts/Footer";
import HeaderSection from "@/components/layouts/Header";
import NewProducts from "@/components/layouts/NewProducts/index";
import ProductsAvailable from "@/components/layouts/ProductsAvailable";
import PromoEventSection from "@/components/layouts/PromoEventSection";
import { config } from "@/config";
import axios from "axios";

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { newProducts } = await getData({
    searching: searchParams.search,
  });

  return (
    <div className="min-h-[150vh] bg-[white]">
      <HeaderSection />
      <main className="mx-[200px] py-10">
        <PromoEventSection />
        <NewProducts data={newProducts} />
        <ProductsAvailable />
      </main>
      <FooterSection />
    </div>
  );
}

const getData = async ({ searching = "" }: { searching?: string }) => {
  const { data } = await axios.get(`${config.baseUrl}/api/landing/newproduct`, {
    // params: { searching },
  });

  return data.data;
};
