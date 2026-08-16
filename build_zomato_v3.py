import sys
import re

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# I need to completely replace the ZomatoCaseStudy function if it exists.
# I will find the boundaries of ZomatoCaseStudy and replace it.

zomato_component = """function ZomatoCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");

  React.useEffect(() => {
    const anchors = ["overview", "why", "questions", "analysis", "visualizations", "insights", "contribution", "challenges", "lessons", "future"];
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
    { id: "why", label: "Why This Analysis" },
    { id: "questions", label: "Questions" },
    { id: "analysis", label: "Analysis" },
    { id: "visualizations", label: "Visualizations" },
    { id: "insights", label: "Insights" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges" },
    { id: "lessons", label: "Lessons Learned" },
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
              Exploring Bengaluru's restaurant ecosystem through ratings, pricing, cuisines, locations, services, and customer engagement.
            </p>
            <p className="text-base text-muted-foreground/80 font-sans italic border-l-2 border-primary/30 pl-4 py-1">
              My first practical data-analysis project, where I learned to turn a real-world dataset into questions, visualizations, and insights.
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
               {["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Kaggle Dataset"].map(tech => (
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
                <p>Zomato Bengaluru Data Analysis explores restaurant data to understand how ratings, pricing, cuisines, locations, restaurant types, online ordering, table booking, and customer engagement vary across Bengaluru.</p>
                <p>Using Python in Jupyter Notebook, I explored the dataset, prepared relevant fields, analyzed different aspects of the restaurant ecosystem, and used visualizations to turn the results into understandable observations.</p>
              </div>
              <div className="pt-6 pb-2">
                <div className="inline-flex items-center gap-3 md:gap-5 text-xs md:text-sm font-mono font-bold uppercase tracking-widest text-primary border border-border rounded-xl px-4 py-3 bg-secondary/30 shadow-sm overflow-x-auto max-w-full">
                  <span>RAW DATA</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span>ANALYSIS</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span>VISUALIZATION</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span>INSIGHT</span>
                </div>
              </div>
            </section>

            {/* Why This Analysis? */}
            <section id="why" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Why This Analysis?</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Real-world datasets rarely arrive as neatly organized answers. They contain different types of information, inconsistencies, and many possible directions for exploration.</p>
                <p>Instead of looking at the dataset as a collection of columns, I approached it through questions — What affects restaurant choice? Where are restaurants concentrated? How does pricing vary? What can ratings and votes tell us?</p>
                <p>The goal was to move from simply working with data to understanding what the data could actually reveal.</p>
              </div>
            </section>

            {/* Questions Behind the Analysis */}
            <section id="questions" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Questions Behind the Analysis</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                Rather than analyzing every column independently, I grouped the exploration around questions that could reveal useful patterns.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "How are restaurant ratings distributed?",
                  "Which restaurant types and cuisines are most common?",
                  "How does restaurant pricing vary across Bengaluru?",
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
            <section id="analysis" className="space-y-12 scroll-mt-28">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-6">From Raw Data to Analysis</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "RAW DATA", desc: "Kaggle restaurant dataset" },
                    { title: "INSPECT", desc: "Understand columns, data types, and structure" },
                    { title: "CLEAN", desc: "Handle missing and inconsistent values" },
                    { title: "PREPARE", desc: "Prepare relevant fields for analysis" },
                    { title: "EXPLORE", desc: "Investigate patterns and relationships" },
                    { title: "VISUALIZE", desc: "Represent findings through charts" },
                    { title: "INTERPRET", desc: "Turn patterns into observations" }
                  ].map((step, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border border-border bg-background shadow-sm ${i === 6 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""}`}>
                      <span className="font-mono text-sm font-bold text-primary/60 mt-1">0{i+1}</span>
                      <div>
                        <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-base md:text-lg leading-relaxed text-foreground">
                  Before asking the data questions, I first needed to understand what I was working with. I inspected the dataset structure, reviewed relevant columns, checked data quality, and prepared the fields needed for analysis.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground pb-4 border-b border-border/50">What I Explored</h3>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">01 — RATINGS</h4>
                  <p className="text-base md:text-lg text-foreground">Examined average ratings and rating distributions to understand how restaurant ratings were spread across the dataset.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Average restaurant rating</li>
                    <li>Rating distribution</li>
                    <li>Relationship between rating and other characteristics</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">02 — RESTAURANTS & CUISINES</h4>
                  <p className="text-base md:text-lg text-foreground">Explored the variety of restaurant types, cuisine categories, and restaurant chains represented across Bengaluru.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Restaurant types</li>
                    <li>Cuisine varieties</li>
                    <li>North Indian / South Indian and other cuisine categories</li>
                    <li>Top restaurant chains</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">03 — LOCATION</h4>
                  <p className="text-base md:text-lg text-foreground">Compared restaurant concentration across Bengaluru to understand which areas had a stronger restaurant presence.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Restaurants by location</li>
                    <li>Restaurant concentration</li>
                    <li>Food-focused areas</li>
                    <li>Affordable restaurant availability by location</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">04 — PRICING</h4>
                  <p className="text-base md:text-lg text-foreground">Examined how much different restaurant experiences cost and where budget-friendly options could be found.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Approximate cost for two people</li>
                    <li>Cost distribution</li>
                    <li>Cheapest restaurants and Most expensive restaurants</li>
                    <li>Top expensive restaurants and Restaurants below ₹500</li>
                    <li>Highly rated affordable restaurants</li>
                    <li>Price vs rating relationship</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm font-bold text-primary tracking-widest uppercase">05 — SERVICES & CUSTOMER ENGAGEMENT</h4>
                  <p className="text-base md:text-lg text-foreground">Looked beyond ratings to understand how restaurant services and customer activity varied.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Online ordering availability</li>
                    <li>Table booking availability</li>
                    <li>Highest-voted restaurants</li>
                    <li>Votes vs online ordering and Votes vs restaurant characteristics</li>
                    <li>Price vs online ordering</li>
                  </ul>
                </div>
                
              </div>
            </section>

            {/* Exploring the Data Visually */}
            <section id="visualizations" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Exploring the Data Visually</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "01 — Ratings", desc: "Rating distribution and restaurant-rating comparisons." },
                  { title: "02 — Pricing", desc: "Cost distribution and price comparisons." },
                  { title: "03 — Locations", desc: "Restaurant concentration across Bengaluru areas." },
                  { title: "04 — Cuisines", desc: "Cuisine and restaurant-type distribution." },
                  { title: "05 — Online Ordering", desc: "Comparison of restaurants offering online ordering." },
                  { title: "06 — Customer Engagement", desc: "Votes and rating-related comparisons." }
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
                  "Restaurant ratings showed noticeable variation across the dataset.",
                  "Restaurant pricing ranged from budget-friendly options to significantly more expensive dining experiences.",
                  "Restaurant concentration differed considerably across Bengaluru locations.",
                  "Some cuisine categories appeared far more frequently than others.",
                  "Online ordering and table booking were not equally available across restaurants.",
                  "Votes added another perspective on customer engagement beyond rating alone.",
                  "Combining price and rating made it possible to identify relatively affordable restaurants with stronger ratings."
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
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground text-center mb-2">Data Analysis & Visualization</h3>
                <p className="text-base md:text-lg leading-relaxed text-foreground text-center max-w-2xl mx-auto mb-8">
                  This was my first practical data-analysis project, and my contribution centered on understanding the dataset, performing exploratory analysis, creating visualizations, and turning the results into meaningful observations.
                </p>
                
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <ul className="space-y-4">
                    {[
                      "Explored and understood the dataset",
                      "Prepared relevant data for analysis",
                      "Performed exploratory analysis using Python",
                      "Created charts using Matplotlib, Seaborn, and Plotly",
                      "Compared restaurant characteristics",
                      "Extracted observations from the analysis",
                      "Documented the analysis in Jupyter Notebook"
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6 pb-2 border-b border-border/50">01 — WORKING WITH A MESSY REAL-WORLD DATASET</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                        The dataset looked straightforward at first, but once I started exploring it, I found that different columns required different types of preparation before they could be compared or analyzed reliably.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Solution:</span>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Instead of jumping directly into visualization, I inspected the columns and their values first. I identified fields that needed cleaning or preparation, handled the problematic entries, and then used the prepared data for the analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-6 pb-2 border-b border-border/50">02 — TURNING MANY QUESTIONS INTO USEFUL VISUALIZATIONS</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                        The project involved many possible questions around ratings, pricing, locations, cuisines, votes, and restaurant services. The difficult part was deciding how to represent each question clearly without creating meaningless charts.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Solution:</span>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        I grouped related questions together and selected visualizations based on what I was trying to compare or understand. This helped me move from simply creating charts to using each visualization to answer a specific analytical question.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* What This Project Taught Me */}
            <section id="lessons" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What This Project Taught Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Data analysis starts with understanding the question.",
                  "Real-world data requires more preparation than clean tutorial datasets.",
                  "A visualization should answer something, not simply decorate a notebook.",
                  "Finding a pattern is different from understanding what that pattern means.",
                  "Working with a real dataset taught me how raw data becomes useful insight.",
                  "Good analysis requires both technical work and curiosity about the problem."
                ].map((lesson, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-secondary/30 border border-border rounded-2xl">
                    <span className="font-mono font-bold text-primary/40 mt-1">0{i+1}</span>
                    <p className="text-base text-foreground font-medium">{lesson}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-serif italic text-foreground text-center max-w-2xl mx-auto px-6 border-l-2 border-r-2 border-primary/20 py-4">
                "This project gave me my first practical experience moving from Python fundamentals to using code to investigate a real-world problem."
              </p>
            </section>

            {/* Where This Could Go Next */}
            <section id="future" className="space-y-8 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Where This Could Go Next</h2>
              <p className="text-base md:text-lg text-foreground mb-6">
                If I extended this analysis further, I would take the cleaned dataset beyond the notebook and make the findings more interactive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "01 — Interactive Dashboard", desc: "Build a Power BI dashboard for exploring restaurant trends dynamically." },
                  { title: "02 — Geographic Exploration", desc: "Visualize restaurant concentration and affordability using maps." },
                  { title: "03 — Multi-City Comparison", desc: "Compare restaurant patterns across Bengaluru and other cities." },
                  { title: "04 — Predictive Exploration", desc: "Explore rating or pricing prediction as a separate Machine Learning project." }
                ].map((idea, i) => (
                  <div key={i} className="p-5 border border-border rounded-xl bg-background shadow-sm hover:border-primary/30 transition-colors">
                    <h4 className="font-mono text-sm font-bold text-foreground mb-2">{idea.title}</h4>
                    <p className="text-sm text-muted-foreground">{idea.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center mt-8">Future Ideas</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
"""

# Extract everything from `function ZomatoCaseStudy` to its closing brace
# I will use string manipulation to find it and replace it.

start_str = "function ZomatoCaseStudy({ project, related }: { project: any; related: any[] }) {"
end_str = "export default function ProjectCaseStudyPage"

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + zomato_component + "\n\n" + content[end_idx:]
else:
    print("Could not find ZomatoCaseStudy in page.tsx")
    sys.exit(1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with v3 redesign!")
