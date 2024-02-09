import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide, Pagination } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';

const banners = [
  {
    id: 1,
    title: 'Banner 1',
    image: {
      original: 'https://via.placeholder.com/1800x610',
    },
  },
  {
    id: 2,
    title: 'Banner 2',
    image: {
      original: 'https://via.placeholder.com/1800x610',
    },
  },
  {
    id: 3,
    title: 'Banner 3',
    image: {
      original: 'https://via.placeholder.com/1800x610',
    },
  },
  {
    id: 4,
    title: 'Banner 4',
    image: {
      original: 'https://via.placeholder.com/1800x610',
    },
  }
];

const Banner = () => {
  return (
    <div className="compact relative">
      <div className="-z-1 overflow-hidden">
        <div className="relative">
          <Swiper
            id="banner"
            loop={true}
            modules={[Pagination]}
            resizeObserver={true}
            allowTouchMove={false}
            slidesPerView={1}
            // pagination={true}
            pagination={{
              bulletClass:
                'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 !rounded-full bg-gray-400 !border-0 !opacity-70',
              clickableClass: 'cursor-pointer',
              bulletActiveClass: '!bg-accent',
              clickable: true,
            }}
          >
            {banners?.map((banner: any, idx: any) => (
              <SwiperSlide key={idx}>
                <Link href={`${Routes.search}`}>
                  <div className="relative h-full max-h-[240px] w-full md:max-h-[610px]">
                    <Image
                      className="h-full w-full"
                      src={banner.image?.original ?? productPlaceholder}
                      alt={banner.title ?? ''}
                      width={1800}
                      height={610}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
