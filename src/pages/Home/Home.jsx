import HeroSlider from "../../components/home/HeroSlider/HeroSlider";
import WorldLocation from "../../components/home/WorldLocation/WorldLocation";
import OverviewSection from "../../components/shared/Overview/Overview";
import GlobalImpactSection from "../../components/home/GlobalDataDisplay/GlobalDataDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Home() {
  const countries = [
    { name: "Cairo" },
    { name: "Canada" },
    { name: "Dubai" },
    { name: "Hong Kong" },
    { name: "Amsterdam" },
    { name: "Tokyo" },
  ];

  return (
    <div className="bg-lightColor">
      <HeroSlider />
      <OverviewSection />

      <div className="px-6 lg:px-20 my-10">
        {/* px-6 للشاشات الصغيرة, lg:px-20 للشاشات الكبيرة */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }, // شاشة كبيرة
            1280: { slidesPerView: 4 }, // أكبر من 1280px
          }}
          className="flex justify-center"
        >
          {countries.map((c) => (
            <SwiperSlide key={c.name} className="flex justify-center">
              <WorldLocation country={c.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <GlobalImpactSection />
    </div>
  );
}

export default Home;
