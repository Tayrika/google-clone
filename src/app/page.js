import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

function Home() {
  return ( 
    <>
      <HomeHeader />
      <div>
        <Image src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" alt="Google logo" width={300} height={300} />
        <HomeSearch />
      </div>
    </>
   );
}

export default Home;