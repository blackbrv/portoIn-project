export const BentoGrid = () => {
  const projects = [
    { title: "Mobile App", cols: "md:col-span-2", bg: "bg-blue-100" },
    { title: "Web Design", cols: "md:col-span-1", bg: "bg-green-100" },
    { title: "Branding", cols: "md:col-span-1", bg: "bg-yellow-100" },
    { title: "Illustration", cols: "md:col-span-3", bg: "bg-purple-100" },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`${project.cols} ${project.bg} rounded-xl p-8 h-64 flex items-center justify-center transition-transform hover:scale-105`}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
