import React from "react";

const LargeCards = () => {
  return (
    <div className="flex flex-row md:flex-row gap-5 w-full h-full">
      {/* Card 1 */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl w-full h-full md:h-[150px] shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-row items-center h-full">
          {/* Image part */}
          <div className="w-1/3 flex items-center justify-center p-4">
            <img 
              src="/images/Certificate.png" 
              alt="Certificate Icon" 
              className="w-28 h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
          {/* Content part */}
          <div className="w-2/3 p-4 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-regular text-white mb-2 font-['Helvetica']">
              Saathi Certificate
            </h3>
            <div className="space-y-1">
              <p className="text-sm md:text-md text-gray-400 italic font-['Helvetica']">
                The new Gold Standard in Digital Skilling
              </p>
              <p className="text-sm md:text-md text-gray-400 italic font-['Helvetica']">
                Delivering credibility with proof of skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl w-full h-full md:h-[150px] shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-row items-center h-full">
          {/* Image part */}
          <div className="w-1/3 flex items-center justify-center p-4">
            <img 
              src="/images/rating.png" 
              alt="Rating Icon" 
              className="w-28 h-28 md:w-32 md:h-32 object-contain"
            />
          </div>
          {/* Content part */}
          <div className="w-2/3 p-4 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-regular text-white mb-2 font-['Helvetica']">
              Saathi Rating
            </h3>
            <div className="space-y-1">
              <p className="text-sm md:text-md text-gray-400 italic font-['Helvetica']">
                A single glance metric of capability and suitability.
              </p>
              <p className="text-sm md:text-md text-gray-400 italic font-['Helvetica']">
                Skill grading, KYC, Psychometrics & Past employer ratings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCards; 