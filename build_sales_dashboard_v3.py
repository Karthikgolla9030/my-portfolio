import sys

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

sales_dashboard_component_v3 = """
function SalesDashboardCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const anchors = ["overview", "problem", "dataset", "preparation", "dax", "analyzed", "dashboard", "insights", "contribution", "challenges", "learned"];
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
    { id: "problem", label: "Problem / Objective" },
    { id: "dataset", label: "Dataset" },
    { id: "preparation", label: "Data Preparation" },
    { id: "dax", label: "DAX & Calculated Metrics" },
    { id: "analyzed", label: "What I Analyzed" },
    { id: "dashboard", label: "The Dashboard" },
    { id: "insights", label: "Key Insights" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "learned", label: "What I Learned" }
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-secondary text-foreground rounded-full hover:bg-border transition-colors shadow-sm"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-7xl max-h-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt="Dashboard Full View" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

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
              PROJECT / BUSINESS INTELLIGENCE
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Sales Performance Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
              Exploring sales, profit, customers, products, and regions through an interactive Power BI dashboard.
            </p>
            <p className="text-base text-muted-foreground/80 font-sans italic border-l-2 border-primary/30 pl-4 py-1">
              Built during my Infosys Springboard internship as a team-based sales analysis project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border/50">
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Project Type</span>
              <span className="text-sm font-bold text-foreground">Business Intelligence</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Context</span>
              <span className="text-sm font-bold text-foreground">Infosys Springboard Internship</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Environment</span>
              <span className="text-sm font-bold text-foreground">Power BI</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Status</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-0.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Completed
              </span>
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
            
            {/* 1. OVERVIEW */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>This project focused on understanding sales performance using Power BI. I worked with a real-world dataset containing sales, customer, product, and regional data, and brought this information together into an interactive dashboard.</p>
                <p>The goal was to move beyond static spreadsheets and create a view where performance could be explored dynamically, allowing users to compare profitability and identify business trends effortlessly.</p>
              </div>
            </section>

            {/* 2. PROBLEM / OBJECTIVE */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Problem & Objective</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase pb-2">THE PROBLEM</h3>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    Sales performance can become difficult to understand when information is spread across different sales, customer, product, and regional attributes. The dashboard was built to make this information easier to explore and compare.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase pb-2">OBJECTIVES</h3>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-foreground">
                    <li>Evaluate sales performance across important metrics.</li>
                    <li>Identify trends and patterns.</li>
                    <li>Compare products, customers, channels, and regions.</li>
                    <li>Understand profitability, discounts, and returns.</li>
                    <li>Support clearer sales-performance monitoring.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. DATASET */}
            <section id="dataset" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Dataset</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                The dataset brought together different parts of the sales process.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">ORDER DETAILS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Invoice Number, Shipping Type, Order Date, Delivery Date, Payment Method
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">CUSTOMER DETAILS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Client Code, Client Name, Client Segment, Location, Country, Region, Zip Code
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">PRODUCT DETAILS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Product Code, Product Category, Product Description, Warranty
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">SALES METRICS</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Sale Amount, Quantity, Discount Rate, Profit Margin, Unit Price
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">CUSTOMER FEEDBACK</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Customer Rating, Product Return Status, Customer Loyalty Program
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">MARKETING</h3>
                  <p className="text-sm font-sans text-foreground opacity-90 leading-relaxed">
                    Sales Channel, Marketing Campaign Code
                  </p>
                </div>

              </div>
            </section>

            {/* 4. DATA PREPARATION */}
            <section id="preparation" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Data Preparation</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                The dataset was prepared in Power BI before building the dashboard to ensure the analysis was accurate.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground">
                <li>Inspecting the dataset.</li>
                <li>Checking data types.</li>
                <li>Handling inconsistent values.</li>
                <li>Preparing fields for analysis.</li>
                <li>Creating calculated columns.</li>
                <li>Structuring the data for reporting.</li>
              </ul>
            </section>

            {/* 5. DAX & CALCULATED METRICS */}
            <section id="dax" className="space-y-8 scroll-mt-28 bg-secondary/10 p-8 rounded-3xl border border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">DAX & Calculated Metrics</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                DAX was used to create calculated columns and measures required for the analysis.
              </p>
              
              <div className="space-y-10">
                
                {/* Calculated Columns */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 border-b border-border/50 pb-2">Calculated Columns</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">ACTUAL COST</div>
                      <div className="text-sm text-muted-foreground font-mono">Sale Amount − Profit Margin</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">DISCOUNT</div>
                      <div className="text-sm text-muted-foreground font-mono">Sale Amount × Discount Rate</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">UNIT PRICE</div>
                      <div className="text-sm text-muted-foreground font-mono">Sale Amount ÷ Quantity</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-1">CUSTOMER SATISFACTION</div>
                      <div className="text-sm text-muted-foreground font-mono">5 → Excellent, 4 → Good</div>
                    </div>
                  </div>
                </div>

                {/* DAX Measures */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 border-b border-border/50 pb-2">Important Measures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      { name: "TOTAL SALES", desc: "Total value generated from sales." },
                      { name: "GROSS PROFIT", desc: "Total profit generated across sales." },
                      { name: "TOTAL UNITS SOLD", desc: "Total quantity sold." },
                      { name: "AVERAGE SALES PER ORDER", desc: "Average sales value per order." },
                      { name: "TOTAL COST", desc: "Total cost of goods sold." },
                      { name: "GROSS PROFIT MARGIN", desc: "Profit relative to sales amount." },
                      { name: "CLIENT COUNT", desc: "Total number of unique clients." },
                      { name: "SALES % BY CATEGORY", desc: "Percentage contribution of each category." },
                      { name: "SALES BY CHANNEL", desc: "Sales distributed by purchase channel." },
                      { name: "SALES BY REGION", desc: "Sales distributed by geographic location." },
                      { name: "SALES PER CLIENT", desc: "Average revenue generated per client." },
                      { name: "TOTAL DISCOUNT", desc: "Total value of all discounts given." },
                      { name: "NON-RETURN COUNT", desc: "Count of successful, unreturned orders." },
                      { name: "AVERAGE UNIT PRICE", desc: "Average price of individual units sold." }
                    ].map((metric, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="font-mono text-xs font-bold text-foreground">{metric.name}</span>
                        <span className="text-sm text-muted-foreground">{metric.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. WHAT I ANALYZED */}
            <section id="analyzed" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Analyzed</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "SALES PERFORMANCE", desc: "Sales, units sold, average sales per order, and sales contribution." },
                  { title: "PRODUCTS", desc: "Product categories and their contribution to sales." },
                  { title: "CUSTOMERS", desc: "Client segments, customer count, satisfaction, and loyalty." },
                  { title: "REGIONS", desc: "Regional sales performance and comparison." },
                  { title: "CHANNELS", desc: "Sales performance across different sales channels." },
                  { title: "PROFITABILITY", desc: "Profit, cost, margin, and discount analysis." },
                  { title: "RETURNS", desc: "Return and non-return patterns." },
                  { title: "TRENDS", desc: "Changes in sales performance over time." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-background border border-border rounded-xl shadow-sm">
                    <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. THE DASHBOARD */}
            <section id="dashboard" className="space-y-12 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Dashboard</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                The analysis was brought together in Power BI through multiple report views, each focusing on a different part of sales performance.
              </p>

              {/* Main Dashboard */}
              <div className="space-y-4">
                <div 
                  className="w-full aspect-[16/9] bg-secondary border border-border rounded-2xl shadow-md overflow-hidden cursor-zoom-in relative group"
                  onClick={() => setLightboxImage("/images/projects/sales-dashboard-main.jpg")}
                >
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/projects/sales-dashboard-main.jpg" 
                    alt="Sales Performance Overview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback logic in case the image isn't available yet
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: /images/projects/sales-dashboard-main.jpg%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="text-center mt-4">
                  <span className="block font-mono text-sm font-bold text-foreground mb-1 uppercase tracking-widest">01 — SALES PERFORMANCE OVERVIEW</span>
                  <span className="text-sm text-muted-foreground">An overview of the core sales KPIs, including sales, profit, units sold, discounts and returns.</span>
                </div>
              </div>

              {/* Explore The Report Grid */}
              <div className="pt-8 border-t border-border/50">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Explore the Report</h3>
                <p className="text-base text-foreground mb-8">Different report views were used to look at the business from different angles.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { num: "02", title: "PRODUCT ANALYSIS", desc: "Sales performance across products and categories.", img: "/images/projects/sales-dashboard-product.jpg" },
                    { num: "03", title: "CUSTOMER ANALYSIS", desc: "Customer segments, loyalty and satisfaction patterns.", img: "/images/projects/sales-dashboard-customer.jpg" },
                    { num: "04", title: "REGIONAL ANALYSIS", desc: "Comparison of sales performance across regions.", img: "/images/projects/sales-dashboard-regional.jpg" },
                    { num: "05", title: "SALES TRENDS", desc: "Changes in sales performance over time.", img: "/images/projects/sales-dashboard-trends.jpg" },
                    { num: "06", title: "TARGET & PERFORMANCE", desc: "Performance comparison against relevant targets and metrics.", img: "/images/projects/sales-dashboard-target.jpg" }
                  ].map((view, i) => (
                    <div key={i} className="space-y-4">
                      <div 
                        className="w-full aspect-[16/9] bg-secondary border border-border rounded-xl shadow-sm overflow-hidden cursor-zoom-in relative group"
                        onClick={() => setLightboxImage(view.img)}
                      >
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                           <div className="bg-background/90 text-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">Click to expand</div>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={view.img} 
                          alt={view.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EPlaceholder: ${view.img.split('/').pop()}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                      <div>
                        <span className="block font-mono text-xs font-bold text-foreground mb-1 tracking-widest">{view.num} — {view.title}</span>
                        <span className="text-sm text-muted-foreground">{view.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. KEY INSIGHTS */}
            <section id="insights" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Key Insights</h2>
              <div className="space-y-4">
                {[
                  "Sales performance was heavily concentrated in specific product categories like Automotive Parts and Wearable Tech.",
                  "Different product categories performed significantly better in specific sales channels (e.g., In-store vs. Online).",
                  "Profitability was strongly influenced by discount rates across different customer segments.",
                  "Regional analysis revealed distinct disparities in average sales per order between countries.",
                  "Actual sales and profit levels fell below the established performance targets for the period."
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-background border-l-2 border-primary shadow-sm">
                    <CheckCircle className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                    <p className="text-base text-foreground">{insight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. MY CONTRIBUTION */}
            <section id="contribution" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              <div className="p-8 bg-secondary/20 border border-border rounded-3xl">
                <ul className="space-y-4">
                  {[
                    "Preparing the data for analysis and ensuring consistency.",
                    "Creating calculated columns required for the dashboard.",
                    "Creating DAX measures to track KPIs accurately.",
                    "Building the Power BI report and its interactive elements.",
                    "Creating visualizations to represent performance clearly.",
                    "Organizing the dashboard views logically for users.",
                    "Analyzing sales performance across multiple dimensions.",
                    "Interpreting the results to highlight important patterns."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 10. CHALLENGES & SOLUTIONS */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Challenges & Solutions</h2>
              
              <div className="grid grid-cols-1 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">01 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Deciding which metrics were actually useful for measuring sales performance rather than just adding every possible calculation.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I focused on the core objectives (sales, profit, units, discounts, returns) and only created measures that directly helped evaluate performance, trends, or segments, ensuring the dashboard wasn't cluttered with unnecessary numbers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">02 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Creating the right DAX calculations and ensuring the metrics behaved correctly under different filters and visuals.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I tested each DAX measure against simple table visuals first to verify that filter context was applied properly across products, channels, and regions before integrating the measures into the final dashboard visuals.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 11. WHAT I LEARNED */}
            <section id="learned" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Learned</h2>
              <ul className="space-y-4">
                {[
                  "How data preparation directly affects reporting accuracy and visualization capabilities.",
                  "How DAX can turn raw fields into highly useful, dynamic business metrics.",
                  "How dashboard structure affects how easily information can be understood by the user.",
                  "How different report views can reveal completely different aspects of performance."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="text-primary/60 shrink-0 w-5 h-5 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground">{item}</span>
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

start_str = "function SalesDashboardCaseStudy({ project, related }: { project: any; related: any[] }) {"
end_str = "export default function ProjectCaseStudyPage"

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + sales_dashboard_component_v3 + "\n\n" + content[end_idx:]
else:
    print("Could not find SalesDashboardCaseStudy in page.tsx")
    sys.exit(1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with 11-section structural overhaul!")
