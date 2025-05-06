import CardCarousel from './CardCarousel';
import VideoTickerComponent from '../video-ticker/VideoTickerComponent';
import { videoData } from '../video-ticker/TrainingCourses';
import StepsSection from './StepsSection';
import LargeCards from './LargeCards';

const trainCards = [
  {
    id: 1,
    title: "Contact Center",
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
    title: "FMGC",
    imageUrl: "/images/train/FMCG.jpeg",
    href: "#"
  },
  {
    id: 4,
    title: "Data Entry",
    imageUrl: "/images/train/Dataentry.png",
    href: "#"
  },
  {
    id: 5,
    title: "Front Desk Executive",
    imageUrl: "/images/train/frontdesk.png",
    href: "#"
  },
  {
    id: 6,
    title: "Social Media Executive",
    imageUrl: "/images/train/sme.png",
    href: "#"
  },
];

export default function FastTrainSection() {
  return (
    <section id="fast-train" className="py-12 md:py-16 px-12 md:px-16 bg-[#09090b]">
      <div className="flex flex-col items-start justify-center gap-10">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-7xl font-bold text-white"><span>Job</span><span className='bg-gradient-to-r from-[#FFC01D] via-[#FFD955] to-[#FF9A01] bg-clip-text text-transparent'>Train</span></h2>
          <p className="text-gray-400 italic text-sm md:text-mb py-1">The Netflix of Skilling</p>
        </div>
        {/* <StepsSection /> */}
        <p className="text-white/80 text-xl md:text-5xl py-10 text-center leading-relaxed max-w-full">
          "A unique storytelling web series approach wrapped with seamless curriculum guided learning objectives ensuring Effective Learning, Completion, and Certification."
        </p>
        
        <div className="w-full">
          <VideoTickerComponent videos={videoData} title="Top 5 Trending Training Courses" />
        </div>
        <div className="mt-12 w-full overflow-hidden">
          <CardCarousel title="Top 5 Trending Training Tests" cards={trainCards} />
        </div>
        <div className="w-full">
          <LargeCards />
        </div>
      </div>
    </section>
  );
} 