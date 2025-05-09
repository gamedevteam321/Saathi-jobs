import CardCarousel from './CardCarousel';
import VideoTickerComponent from '../video-ticker/VideoTickerComponent';
import { videoData } from '../video-ticker/TrainingCourses';
import StepsSection from './StepsSection';
import LargeCards from './LargeCards';

const trainCards = [
  {
    id: 1,
    title: "Contact Centre",
    imageUrl: "/images/train/Contactcentre.png",
    href: "#"
  },
  {
    id: 2,
    title: "Delivery Executive",
    imageUrl: "/images/train/bde.jpeg",
    href: "#"
  },
  {
    id: 3,
    title: "FMCG Field Sales Executive",
    imageUrl: "/images/train/FMCG.jpeg",
    href: "#"
  },
  {
    id: 4,
    title: "Data Entry & IT",
    imageUrl: "/images/train/Dataentry.png",
    href: "#"
  },
  {
    id: 5,
    title: "Front Desk Executive",
    imageUrl: "/images/train/frontdesk.png",
    href: "#"
  },
  
];

export default function FastTrainSection() {
  return (
    <section id="jobtrain" className="py-12 md:py-16 px-12 md:px-16 bg-[#09090b]">
      <div className="flex flex-col items-start justify-center gap-2 md:gap-5">
        <div className="flex flex-col items-center md:items-start justify-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left"><span>Job</span><span className='bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent'>Train</span></h2>
          <p className="text-gray-400 italic text-md md:text-[18px] py-1 text-center md:text-left">The Netflix of Skilling</p>
        </div>
        {/* <StepsSection /> */}
        <div className="flex flex-col items-center md:items-start justify-center w-full max-w-[95%] mx-auto">
        <p className="text-gray-400 text-2xl md:text-[40px] py-4 text-center justify-center leading-tight max-w-full">
        A<span className="text-white"> unique storytelling web series approach</span> wrapped with seamless curriculum guided learning objectives ensuring Effective Learning, Completion, and Certification.
        </p>
        </div>
        <div className="w-full">
          <VideoTickerComponent videos={videoData} title="Top 5 Trending Training Courses" />
        </div>
        <div className="pt-2 md:pt-6 w-full overflow-hidden">
          <CardCarousel title="Top 5 Trending Training Tests" cards={trainCards} />
        </div>
        <div className="w-full py-12">
          <LargeCards />
        </div>
      </div>
    </section>
  );
} 