import React from "react";

const LargeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full h-full">
      {/* Card 1 */}
      <div className="bg-gray-800/50 backdrop-blur-sm text-center rounded-3xl p-5 md:p-5 w-full h-full md:h-[350px] shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-end">
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Saathi Certificate
          </h3>
          <div className="space-y-1">
            <p className="text-sm md:text-md text-gray-400">
              The new Gold Standard in Digital Skilling
            </p>
            <p className="text-sm md:text-md text-gray-400">
              Delivering credibility with proof of skills and knowledge
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800/50 backdrop-blur-sm text-center rounded-3xl p-5 md:p-5 w-full h-full md:h-[350px] shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-end">
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white ">
            Saathi Rating
          </h3>
          <div className="space-y-1">
            <p className="text-sm md:text-md text-gray-400">
              A single glance metric of capability and suitability.
            </p>
            <p className="text-sm md:text-md text-gray-400">
            Skill grading, KYC, Psychometrics & Past employer ratings.
            </p>
            {/* <p className="text-sm md:text-md text-gray-400">
              Proprietary AI/ML engine run across thousands of data points for holistic representation.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCards; 