import { Card, CardContent } from "./ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

const workData: TimelineItem[] = [
  {
    id: 1,
    year: "July 2025 – August 2025",
    title: "Data Engineering Intern – Carbon Insights",
    description: `Built and optimized time series models to forecast carbon emissions across European industries for ETS compliance. Designed and implemented ETL data pipelines to process large-scale emissions datasets. Automated data workflows using AWS Lambda and managed storage with AWS S3. Contributed to improving the accuracy and scalability of the company’s emissions forecasting platform.`,
  },
  {
    id: 2,
    year: "September 2024 – June 2025",
    title: "Part-time AI/ML Developer – Welyne",
    description: `Developed a machine learning model to predict body measurements from basic user inputs (height, weight, age, sex) for the Weefizz platform. Built time series forecasting tools to anticipate wholesale clothing orders based on historical trends. Designed a matchmaking algorithm for WeHive to improve pairing between au pairs and families. Integrated ML solutions within Laravel, WordPress, and Python-based environments to support production deployment.`,
  },
  {
    id: 3,
    year: "July 2024 – August 2024",
    title: "Web Development Intern – Welyne",
    description: `Created a backend tool to benchmark and analyze API performance under various workloads. Built and tested RESTful APIs using Laravel and Flask. Automated performance reporting, including metrics like latency, throughput, and error rates. Helped improve internal API stability and response time through iterative optimization.`,
  },
  {
    id: 4,
    year: "February 2024 – May 2024",
    title: "Part-time Web Developer – Devnet",
    description: `Contributed to the development and maintenance of EDUMS, a web application for educational management. Implemented new features and improved UI components using HTML, CSS, JavaScript, and Laravel. Handled backend development tasks including database operations with MySQL. Collaborated with a cross-functional team to deliver stable, user-friendly features in an agile workflow.`,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container text-white mb-10">
      <h2 className="section-title text-4xl font-sans font-medium mb-9">
        Professional Experience
      </h2>

      <div className="w-full">
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-red-600 to-yellow-400 shadow-lg rounded-full"></div>

            <div className="space-y-16">
              {workData.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative pl-16 flex items-start group"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-400 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    <WorkIcon />
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-red-500 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default Experience;
