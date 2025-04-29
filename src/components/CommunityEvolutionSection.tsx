"use client";

export default function CommunityEvolutionSection() {
  // Simplified without framer-motion to fix runtime errors
  const bubbles = [
    { id: "bubble-1", size: 80, position: { left: "10%", top: "20%" } },
    { id: "bubble-2", size: 120, position: { left: "30%", top: "70%" } },
    { id: "bubble-3", size: 60, position: { left: "50%", top: "30%" } },
    { id: "bubble-4", size: 100, position: { left: "70%", top: "60%" } },
    { id: "bubble-5", size: 90, position: { left: "85%", top: "40%" } },
    { id: "bubble-6", size: 70, position: { left: "25%", top: "90%" } }
  ];

  return (
    <section id="community" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block animate-fade-in-1 opacity-0">
              Our
            </span>
            <span className="block animate-fade-in-2 opacity-0">
              community is evolving,
            </span>
            <span className="block animate-fade-in-3 opacity-0">
              so are we
            </span>
          </h2>
        </div>
      </div>

      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-white bg-opacity-10 animate-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.position.left,
              top: bubble.position.top,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
