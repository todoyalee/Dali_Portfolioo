import dataquest from "../assets/achievements/dataquest.png";
import jcr from "../assets/achievements/jcr.jpg";
import nvidia from "../assets/achievements/nvidia.png";

const achievementsData = [
  {
    title: "DataQuest AI competition 1st prize winner",
    description:
      "Along side my team, I won the first prize in DataQuest AI competition, an event organised by INSAT IEEE CS chapter and ACM INSAT chapter. This competition focused on ML, deep learning and model deployment.",
    image: dataquest,
    year: "Feb 2025",
  },
  {
    title: "Efficient Large Language Model (LLM) Customization certificate",
    description:
      "In October 2024, I successfully earned the Efficient Large Language Model (LLM) Customization certificate by NVIDIA.",
    image: nvidia,
    year: "Oct 2024",
  },
  {
    title: "Junior Challenge Rush AI challenge responsible",
    description:
      "Junior Challenge Rush is an event organised by Junior Entreprise INSAT that consists of several competitions in different fields. In the 2025 edition, I had the pleasure of being responsible for the AI challenge and co-authoring it, where participants tackled real-world problems using machine learning.",
    image: jcr,
    year: "April 2025",
  },
];

const Achievements = () => (
  <section id="achievements" className="section-container relative mt-16 mb-16">
    <h2 className="section-title mb-8 text-white text-4xl font-sans font-medium">
      Achievements
    </h2>
    <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
      Here are some highlights of my journey in AI and software engineering.
      Each achievement reflects my commitment to innovation, teamwork, and
      impactful solutions.
    </p>
    <div className="flex flex-col gap-10 px-6  ">
      {achievementsData.map((achievement, idx) => (
        <div
          key={idx}
          className="bg-black/60 border border-yellow-500 rounded-xl p-6 flex flex-row items-center shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300"
        >
          <div className="flex-shrink-0 w-80 h-30 rounded-lg overflow-hidden bg-gray-800 mr-6 flex items-center justify-center">
            {achievement.image ? (
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-3xl">🏆</span>
            )}
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              {achievement.title}
            </h3>
            <span className="text-xs text-gray-400 mb-2">
              {achievement.year}
            </span>
            <p className="text-gray-200">{achievement.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
