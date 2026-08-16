import sys

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

zomato_component = """
function ZomatoCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");

  React.useEffect(() => {
    const anchors = ["overview", "why", "questions", "data", "explored", "visuals", "insights", "contribution", "challenges", "lessons", "mattered", "future", "related"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const anchor of anchors) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "explored", label: "Analysis" },
    { id: "visuals", label: "Visuals" },
    { id: "insights", label: "Insights" },
    { id: "contribution", label: "My Contribution" },
    { id: "lessons", label: "Learnings" },
    { id: "future", label: "Future Scope" }
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Case Study: {project.title}
          </span>
        </div>

        {/* HERO SECTION */}
        <div className="mb-16 border-b border-border pb-16">
          <div className="space-y-6 max-w-4xl">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
              PROJECT / DATA ANALYSIS
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Zomato Bengaluru Data Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
              Exploring restaurant data across Bengaluru to understand ratings, pricing, cuisines, locations, services, and customer engagement.
            </p>
            <p className="text-base text-muted-foreground/80 font-sans italic border-l-2 border-primary/30 pl-4 py-1">
              Built as my first practical data-analysis project during my APSSDC internship.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all">
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border/50">
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Project Type</span>
              <span className="text-sm font-bold text-foreground">Data Analysis</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Context</span>
              <span className="text-sm font-bold text-foreground">APSSDC Internship</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Environment</span>
              <span className="text-sm font-bold text-foreground">Jupyter Notebook</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Status</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-0.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Completed
              </span>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-border/50">
             <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</h3>
             <div className="flex flex-wrap gap-2 md:gap-3">
               {["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn"].map(tech => (
                 <span key={tech} className="text-sm font-medium bg-secondary text-foreground border border-border px-4 py-2 rounded-lg">
                   {tech}
                 </span>
               ))}
             </div>
          </div>
        </div>

        {/* Split documentation portal layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="w-full lg:w-64 shrink-0 sticky top-28 hidden lg:block space-y-6">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground">DOCUMENTATION</h3>
            <nav className="flex flex-col gap-2 border-l border-border pl-5 text-sm font-medium">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`block py-1.5 transition-colors focus:outline-none relative -left-[21px] pl-[20px] border-l-2 ${activeAnchor === item.id ? "text-primary border-primary font-bold" : "text-muted-foreground hover:text-foreground border-transparent"}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content */}
          <div className="flex-1 max-w-4xl space-y-24 font-sans text-muted-foreground">
            
            {/* Overview */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>This project explores a Bengaluru restaurant dataset to understand patterns across ratings, pricing, cuisines, locations, restaurant types, online ordering, table booking, and customer engagement.</p>
                <p>The analysis was performed in Jupyter Notebook using Python and data-analysis libraries, with the goal of turning a raw dataset into understandable patterns and insights.</p>
              </div>
            </section>

            {/* Why This Analysis? */}
            <section id="why" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Why This Analysis?</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Working with real-world data was different from working with clean examples. I wanted to understand how raw restaurant data could be explored, cleaned, compared, and turned into meaningful observations.</p>
                <p>The main challenge was not simply creating charts. It was deciding what questions the data could actually answer.</p>
              </div>
            </section>

            {/* Questions Behind the Analysis */}
            <section id="questions" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Questions Behind the Analysis</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "How are restaurant ratings distributed?",
                  "Which restaurant types and cuisines appear most frequently?",
                  "How does pricing vary across restaurants and locations?",
                  "How do online ordering and table booking availability compare?",
                  "Which locations have higher restaurant concentration?",
                  "What can votes and ratings tell us about customer engagement?"
                ].map((q, i) => (
                  <div key={i} className="p-6 bg-secondary/20 border border-border rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl font-heading font-bold text-primary/40">0{i + 1}</span>
                    <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* From Raw Data to Analysis */}
            <section id="data" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">From Raw Data to Analysis</h2>
              
              <div className="p-8 bg-background border border-border rounded-3xl overflow-x-auto shadow-sm">
                <div className="flex items-center min-w-max gap-3 text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-primary">
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">RAW DATA</div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">INSPECT</div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">CLEAN</div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">TRANSFORM</div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">EXPLORE</div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">VISUALIZE</div>
                  <ArrowRight size={16} className="text-muted-foreground" />
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">INTERPRET</div>
                </div>
              </div>
              
              <div className="text-base md:text-lg leading-relaxed text-foreground">
                <p>Before analyzing the data, I inspected the dataset structure, reviewed columns and data types, identified missing values, cleaned inconsistent entries, and prepared relevant fields for analysis.</p>
              </div>
            </section>

            {/* What I Explored */}
            <section id="explored" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Explored</h2>
              <div className="space-y-10">
                
                <div className="space-y-3">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">01 — RATINGS</h3>
                  <p className="text-base md:text-lg text-foreground">Examined rating distributions and compared ratings with other restaurant characteristics.</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">02 — RESTAURANTS & CUISINES</h3>
                  <p className="text-base md:text-lg text-foreground">Explored restaurant types, cuisine categories, and restaurant chains across Bengaluru.</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">03 — LOCATION</h3>
                  <p className="text-base md:text-lg text-foreground">Compared restaurant concentration across different Bengaluru locations.</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">04 — PRICING</h3>
                  <p className="text-base md:text-lg text-foreground">Explored approximate cost for two people, including budget-friendly and higher-priced restaurants.</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">05 — SERVICES & ENGAGEMENT</h3>
                  <p className="text-base md:text-lg text-foreground">Compared online ordering and table-booking availability and explored votes as an indicator of customer engagement.</p>
                </div>
                
              </div>
            </section>

            {/* Exploring the Data Visually */}
            <section id="visuals" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Exploring the Data Visually</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                Visualization helped me move beyond raw numbers and identify patterns that were easier to understand through comparisons and distributions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Ratings", desc: "Rating distributions across the dataset." },
                  { title: "Pricing", desc: "Cost comparison across locations." },
                  { title: "Locations", desc: "Restaurant density by neighborhood." },
                  { title: "Restaurant Types", desc: "Most frequent dining categories." },
                  { title: "Cuisines", desc: "Popularity of different cuisines." },
                  { title: "Online Ordering", desc: "Availability of delivery services." },
                  { title: "Table Booking", desc: "Reservation service comparisons." },
                  { title: "Votes / Engagement", desc: "Customer interaction metrics." }
                ].map((vis, i) => (
                  <div key={i} className="group space-y-4">
                    <div className="aspect-[4/3] bg-secondary/30 rounded-2xl border border-border flex items-center justify-center p-6 text-center shadow-sm relative overflow-hidden">
                       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--foreground) 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                       <div className="relative z-10 flex flex-col items-center gap-3">
                         <Layers size={32} className="text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                         <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Visualization</span>
                       </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground">{vis.title}</h4>
                      <p className="text-sm text-muted-foreground">{vis.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What the Data Revealed */}
            <section id="insights" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What the Data Revealed</h2>
              
              <div className="space-y-6">
                {[
                  "Restaurant ratings vary noticeably across the dataset.",
                  "Restaurant pricing varies significantly between budget and premium options.",
                  "Restaurant density differs across Bengaluru locations.",
                  "Some cuisine categories occur much more frequently than others.",
                  "Online ordering availability varies between restaurants.",
                  "Votes provide another perspective on customer engagement beyond ratings.",
                  "Combining rating and price can help identify relatively affordable restaurants with stronger ratings."
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-background border-l-4 border-l-primary border-y border-r border-y-border border-r-border rounded-r-2xl shadow-sm">
                    <CheckCircle className="text-primary shrink-0 w-6 h-6" />
                    <p className="text-base md:text-lg text-foreground font-medium">{insight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* My Contribution */}
            <section id="contribution" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              
              <div className="p-8 bg-secondary/20 border border-border rounded-3xl space-y-6">
                <h3 className="font-heading font-bold text-2xl text-foreground text-center mb-2">Data Analysis & Visualization</h3>
                <p className="text-base md:text-lg leading-relaxed text-foreground text-center max-w-2xl mx-auto mb-8">
                  As this was my first practical data-analysis project, my work focused on exploring the dataset, preparing data for analysis, performing exploratory analysis using Python, creating visualizations, comparing restaurant characteristics, and extracting meaningful observations.
                </p>
                
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <ul className="space-y-4">
                    {[
                      "Explored and understood the dataset",
                      "Prepared data for analysis",
                      "Performed exploratory analysis using Python",
                      "Created visualizations",
                      "Compared restaurant characteristics",
                      "Identified patterns and observations",
                      "Documented findings in Jupyter Notebook"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-emerald-600 shrink-0 w-5 h-5 mt-0.5" />
                        <span className="text-base text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* What Was Challenging */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What Was Challenging</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-background border border-border rounded-2xl space-y-4 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center font-bold font-mono">01</div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Understanding an unfamiliar dataset</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    I had to first understand what each column represented and decide which fields were useful for different questions.
                  </p>
                </div>
                
                <div className="p-6 bg-background border border-border rounded-2xl space-y-4 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center font-bold font-mono">02</div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Working with imperfect data</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Some values required inspection and preparation before they could be used reliably for analysis.
                  </p>
                </div>
                
                <div className="p-6 bg-background border border-border rounded-2xl space-y-4 shadow-sm hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center font-bold font-mono">03</div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Turning charts into observations</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Creating a visualization was only the beginning. I had to interpret what the patterns actually meant.
                  </p>
                </div>
              </div>
            </section>

            {/* What This Project Taught Me */}
            <section id="lessons" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What This Project Taught Me</h2>
              
              <div className="space-y-6">
                {[
                  "Data analysis starts with understanding the question, not immediately writing code.",
                  "Real-world data requires more preparation than clean tutorial datasets.",
                  "A good visualization should help answer a question, not just look interesting.",
                  "Finding a pattern is different from understanding what that pattern means.",
                  "Working with a real dataset gave me my first practical understanding of how raw data becomes useful insight."
                ].map((lesson, i) => (
                  <blockquote key={i} className="p-6 md:p-8 bg-secondary/30 rounded-2xl border-l-4 border-l-primary text-lg md:text-xl font-serif italic text-foreground leading-relaxed shadow-sm">
                    "{lesson}"
                  </blockquote>
                ))}
              </div>
            </section>

            {/* Why This Project Mattered */}
            <section id="mattered" className="space-y-6 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Why This Project Mattered</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>This project was an important step in my transition from learning Python to using Python for something meaningful.</p>
                <p>It helped me understand that data analysis is not just about writing code or creating charts. It is about asking useful questions, working through imperfect data, and turning the results into insights that someone can understand.</p>
              </div>
            </section>

            {/* If I Extended It */}
            <section id="future" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">If I Extended It <span className="text-base font-sans text-muted-foreground ml-2 font-normal tracking-wide">(Future Ideas)</span></h2>
              <ul className="space-y-3">
                {[
                  "Build an interactive Power BI dashboard from the cleaned dataset.",
                  "Explore geographic patterns using maps.",
                  "Compare restaurant trends across multiple cities.",
                  "Add deeper statistical analysis.",
                  "Explore prediction-related questions as a separate Machine Learning extension."
                ].map((idea, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="text-primary/60 shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground">{idea}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
"""

if "function ZomatoCaseStudy" not in content:
    content = content.replace(
        "export default function ProjectCaseStudyPage",
        zomato_component + "\n\nexport default function ProjectCaseStudyPage"
    )

injection_code = """  // If this is the Zomato project, use the completely custom layout
  if (slug === "zomato-analysis") {
    return <ZomatoCaseStudy project={project} related={related} />;
  }
"""

if 'if (slug === "zomato-analysis") {\n    return <ZomatoCaseStudy' not in content:
    content = content.replace(
        "const related = projects.filter((p) => p.slug !== slug).slice(0, 2);",
        "const related = projects.filter((p) => p.slug !== slug).slice(0, 2);\n\n" + injection_code
    )

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with full redesign!")
