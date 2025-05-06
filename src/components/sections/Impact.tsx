import VideoTickerComponent from "./video-ticker/VideoTickerComponent";
import { impactVideoData } from "./video-ticker/media";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import Image from "next/image";

function ImpactCards() {
  const cards = [
    {
      icon: "/assets/home/card.svg",
      title: "Empowering Lives",
      desc: "Providing Identity through Live Digital CVs",
    },
    {
      icon: "/assets/home/worker.png",
      title: "Women Empowerment",
      desc: "Increasing workforce participation",
    },
    {
      icon: "/assets/home/star.svg",
      title: "Digital Skilling",
      desc: "Converging traditional learning models with new-age techniques",
    },
    {
      icon: "/assets/home/fact-check.svg",
      title: "Legal Financial & Digital Literacy",
      desc: "",
    },
    {
      icon: "/assets/home/Mindfulness.svg",
      title: "ESG & Sustainability",
      desc: "Impart POSH Awareness, Respect Towards Women",
    },
    {
      icon: "/assets/home/Thumb-up.svg",
      title: "Communication Skills",
      desc: "Problem-Solving Abilities, Time & Stress Management",
    },
  ];
  return (
    <div className="py-10">
      <h3 className="text-2xl md:text-4xl font-bold text-start text-gray-500 mb-8">
        Towards a Growth Mindset & a Fullfilling Life
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card, idx) => (
          <Card key={idx} className="bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden min-h-[80px] md:min-h-[140px] flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2">
              <Image src={card.icon} alt={card.title} width={48} height={48} className="bg-gray-700/60 rounded-lg p-2" />
            </CardHeader>
            <CardContent className="p-6 pt-0 text-base text-grey-400">
            <CardTitle className="text-lg font-bold text-white">{card.title}</CardTitle>
            {card.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="bg-[#070707] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-7xl font-bold text-white mb-2">Impact</h2>
        <ImpactCards />
        <VideoTickerComponent videos={impactVideoData} title="Media" />
      </div>
    </section>
  );
} 