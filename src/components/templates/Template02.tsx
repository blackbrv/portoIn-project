export const ScrollPortfolio = () => {
  const projects = [
    { title: "E-commerce Platform", description: "React + Node.js project" },
    { title: "Blog System", description: "Next.js + Sanity CMS" },
    { title: "Marketing Site", description: "Tailwind + Framer Motion" },
  ];

  return (
    <div className="min-h-screen p-8 space-y-12">
      <header className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">John Doe Portfolio</h1>
        <p className="text-gray-600">Full Stack Developer</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, idx) => (
          <section
            key={idx}
            className="p-6 rounded-lg border hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
};
