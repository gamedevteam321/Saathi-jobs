"use client";

import { employees, Employee } from "@/components/sections/Reviews/data/employees";
import { employers } from "@/components/sections/Reviews/data/employers";

export default function CommunitySection() {
  // Duplicate employees for seamless scrolling
  const duplicatedEmployees = [...employees, ...employees];
  const duplicatedEmployers = [...employers, ...employers];
  return (
    <section className="py-10 md:py-20 px-5 md:px-10 bg-black overflow-hidden">
      <div className="container flex flex-col w-full items-start justify-left gap-20">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          What our Customers are Saying
        </h2>

        <div className="relative w-full">
          {/* First Row */}
          <div className="flex flex-col gap-6">
            <h3 className="text-gray-500 text-2xl font-bold">Workers</h3>
            <div className="flex flex-row gap-6 animate-ticker">
              {duplicatedEmployees.map((employee) => (
                <div
                  key={`${employee.id}-1`}
                  className="flex-shrink-0 w-[350px] bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-800"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{employee.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {employee.role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {employee.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{employee.quote}</p>
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Reversed Direction */}
            <div className="flex flex-col gap-6 py-10">
              <h3 className="text-2xl font-bold text-gray-500">Employers</h3>
              <div className="flex flex-row gap-6 animate-ticker-reverse">
                {duplicatedEmployers.map((employer) => (
                  <div
                    key={`${employer.id}-1`}
                    className="flex-shrink-0 w-[350px] bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-800"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={employer.image}
                          alt={employer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{employer.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {employer.role}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {employer.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{employer.quote}</p>
                    <div className="mt-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold text-white py-10 md:py-20">
              Trusted by
            </h2>
            <h2 className="h-full text-4xl md:text-[200px] lg:text-[270px] font-bold text-gray-800 py-5">
              2,000,000+
            </h2>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes ticker-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-ticker {
          animation: ticker 30s linear infinite;
        }

        .animate-ticker-reverse {
          animation: ticker-reverse 30s linear infinite;
        }

        .animate-ticker:hover,
        .animate-ticker-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
