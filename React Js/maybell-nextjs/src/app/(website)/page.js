import Image from "next/image";
import Home from "./Components/Home";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import MainLayout from "./Components/Common/MainLayout";

export const metadata = {
  title: "MayBell - Online furniture store",
  description: "",
};

export default function Page() {

  return (
    <>
      <MainLayout>
          <Home/>
      </MainLayout>
    </>
  );
}
