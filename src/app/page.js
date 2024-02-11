import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
      <title></title>
    </Head>
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
      <BarChart />
      <RecentOrders />
      </div>
    </main>
    </>
  );
}
