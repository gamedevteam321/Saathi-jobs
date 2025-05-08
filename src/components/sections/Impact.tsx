import VideoTickerComponent from "./video-ticker/VideoTickerComponent";
import { impactVideoData } from "./video-ticker/media";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import Image from "next/image";

function ImpactCards() {
  const cards = [
    {
      icon: "/assets/home/Artboard 1.svg",
      title: "Empowering Lives",
      desc: "Providing Identity through Live Digital CVs",
    },
    
    {
      icon: "/assets/home/Artboard 2.svg",
      title: "Digital Skilling",
      desc: "Converging traditional learning models with new-age techniques",
    },
    {
      icon: "/assets/home/Artboard 4.svg",
      title: "Holistic Development",
      desc: "Imparting Life Skills & Promoting Wellbeing",
    },
    {
      icon: "/assets/home/Artboard 3.svg",
      title: "Women Empowerment",
      desc: "Increasing women participation in the workforce",
    },
    
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2 md:py-5 max-w-full mx-auto">
      {cards.map((card, idx) => (
        <Card key={idx} className="bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden min-h-[180px] flex flex-col items-center justify-between p-6">
          <div className="flex flex-col items-center">
            <Image src={card.icon} alt={card.title} width={60} height={60} className=" p-2 mb-4" />
            <CardTitle className="text-[18px] font-regular text-white text-center mb-2">{card.title}</CardTitle>
            <div className="text-[17px] text-gray-400 text-center italic leading-tight">{card.desc}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Impact() {
  return (
    <section className="bg-gradient-to-b from-[#070707] via-[#18181b] to-[#232325] py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 space-y-3 flex flex-col items-center">
        <h2 className="text-3xl md:text-7xl font-bold text-white text-center">
          Impacting <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">Bharat</span>
        </h2>
        <div className="flex flex-col items-center pb-6">
          <p className="text-gray-400 text-xl md:text-[40px] font-regular text-center leading-tight tracking-[-0.8px]">Driving transformational impact at scale</p>
          <p className="text-white text-2xl md:text-[35px] font-regular text-center mt-2">Empower, Educate, Enrich</p>
        </div>
        <ImpactCards />
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center pt-10">
        In the <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">Media</span>
        </h2>
        <div className="flex flex-col items-center ">
          <p className="text-gray-400 text-xl md:text-3xl font-regular text-center leading-[1.75rem] tracking-[-0.8px]">Media Snapshots of<span className="text-white"> Saathi's Journey</span></p>
        </div>
        <VideoTickerComponent videos={impactVideoData} title="" />
      </div>
    </section>
  );
} 