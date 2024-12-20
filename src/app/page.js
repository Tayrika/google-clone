import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

function Home() {
  return ( 
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" alt="Google logo" width={300} height={300} priority style={{ width: "auto" }} />
        <HomeSearch />
      </div>
    </>
   );
}

export default Home;