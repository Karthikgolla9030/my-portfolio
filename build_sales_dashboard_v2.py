import sys
import re

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

sales_dashboard_component_v2 = """
function SalesDashboardCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");

  React.useEffect(() => {
    const anchors = ["overview", "problem", "objectives", "data", "dax", "dashboard", "insights", "contribution", "challenges", "lessons", "future"];
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
    { id: "problem", label: "The Problem" },
    { id: "objectives", label: "What I Wanted to Find Out" },
    { id: "data", label: "The Data" },
    { id: "dax", label: "Building the Metrics" },
    { id: "dashboard", label: "What I Analyzed" },
    { id: "insights", label: "What Stood Out" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges" },
    { id: "lessons", label: "What I Took Away" },
    { id: "future", label: "If I Took It Further" }
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

          <div className="pt-12 mt-12 border-t border-border/50">
             <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</h3>
             <div className="flex flex-wrap gap-2 md:gap-3">
               {["Power BI", "DAX", "Power Query", "Data Cleaning", "Data Transformation", "Data Visualization", "Business Intelligence"].map(tech => (
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
            
            {/* OVERVIEW */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>This project focused on understanding sales performance through Power BI. I worked with sales, customer, product, regional, and transaction data and brought them together into an interactive dashboard.</p>
                <p>The dashboard was designed to make it easier to compare sales and profit, identify stronger and weaker areas, and explore how factors such as discounts, channels, customer segments, and loyalty programs affected performance.</p>
              </div>
            </section>

            {/* THE PROBLEM */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Problem</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>A sales dataset can contain a lot of useful information, but looking at individual columns does not tell the whole story. I wanted to bring the different parts together and create a view where sales performance could be explored from more than one angle.</p>
                <p>The dashboard needed to answer practical questions around products, channels, regions, customers, profitability, discounts, and returns.</p>
              </div>
            </section>

            {/* WHAT I WANTED TO FIND OUT */}
            <section id="objectives" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Wanted to Find Out</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Sales Performance", desc: "How much was being sold, and which areas contributed most?" },
                  { title: "Profitability", desc: "Where was profit coming from, and where were discounts affecting margins?" },
                  { title: "Customer & Product Performance", desc: "Which products, customers, segments, and loyalty programs were performing differently?" },
                  { title: "Trends & Targets", desc: "How was performance changing over time, and how close were sales and profit to their targets?" }
                ].map((obj, i) => (
                  <div key={i} className="p-6 bg-secondary/20 border border-border rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl font-heading font-bold text-primary/40">0{i + 1}</span>
                    <h3 className="font-heading font-bold text-xl text-foreground">{obj.title}</h3>
                    <p className="text-base text-foreground font-medium leading-relaxed">{obj.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* THE DATA */}
            <section id="data" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Data</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                The dataset contained information from different parts of the sales process, including orders, customers, products, sales, payments, returns, ratings, loyalty programs, and marketing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">ORDER</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Invoice Number</li>
                    <li>Order Date</li>
                    <li>Delivery Date</li>
                    <li>Shipping Type</li>
                    <li>Payment Method</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">CUSTOMER</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Client Code</li>
                    <li>Client Name</li>
                    <li>Client Segment</li>
                    <li>Location</li>
                    <li>Country</li>
                    <li>Region</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">PRODUCT & SALES</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Product Code</li>
                    <li>Product Category</li>
                    <li>Sale Amount</li>
                    <li>Quantity</li>
                    <li>Discount Rate</li>
                    <li>Profit Margin</li>
                    <li>Unit Price</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">CUSTOMER & MARKETING</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Customer Rating</li>
                    <li>Return Status</li>
                    <li>Loyalty Program</li>
                    <li>Sales Channel</li>
                    <li>Marketing Campaign</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PREPARING THE DATA */}
            <section className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Preparing the Data</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
                For the dashboard to work properly, I first prepared the data and created the fields needed for analysis.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground font-medium">
                <li>Data cleaning</li>
                <li>Data preparation</li>
                <li>Creating calculated columns</li>
                <li>Preparing fields for analysis</li>
                <li>Creating DAX measures</li>
              </ul>
            </section>

            {/* BUILDING THE METRICS */}
            <section id="dax" className="space-y-8 scroll-mt-28 bg-secondary/10 p-8 rounded-3xl border border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Building the Metrics</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Some of the dashboard metrics were not available directly in the dataset, so I created calculated columns and DAX measures in Power BI.
              </p>
              
              <div className="space-y-8 pt-4">
                
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 border-b border-border/50 pb-2">Calculated Columns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Actual Cost</div>
                      <div className="text-foreground opacity-80">Sale Amount − Profit Margin</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Discount</div>
                      <div className="text-foreground opacity-80">Sale Amount × Discount Rate</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Unit Price</div>
                      <div className="text-foreground opacity-80">Sale Amount ÷ Quantity</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Customer Satisfaction</div>
                      <div className="text-foreground opacity-80">5 → Excellent<br/>4 → Good<br/>Others → Average</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 border-b border-border/50 pb-2">DAX Measures</h3>
                  <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {[
                        "Total Sales", "Total Units Sold", "Gross Profit", "Gross Profit Margin", 
                        "Total Discount", "Client Count", "Sales Per Client", "Average Unit Price", 
                        "Average Sales per Order", "Sales % by Category", "Sales by Channel", 
                        "Sales by Region", "Non-Return Count"
                      ].map((measure, i) => (
                        <span key={i} className="inline-block px-3 py-1.5 bg-secondary/50 border border-border rounded-md text-xs font-mono font-medium text-foreground">
                          [{measure}]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* DASHBOARD AT A GLANCE */}
            <section className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Dashboard at a Glance</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { num: "01", title: "Total Units Sold" },
                  { num: "02", title: "Average Sales per Order" },
                  { num: "03", title: "Sales Percentage" },
                  { num: "04", title: "Sale Amount" },
                  { num: "05", title: "Profit" },
                  { num: "06", title: "Discount" },
                  { num: "07", title: "Return Count" },
                  { num: "08", title: "Non-Return Count" }
                ].map((kpi, i) => (
                  <div key={i} className="bg-secondary/20 border border-border rounded-xl p-5 shadow-sm text-center">
                    <span className="block text-xs font-mono font-bold text-primary/50 mb-2">{kpi.num}</span>
                    <h3 className="font-sans font-bold text-sm md:text-base text-foreground leading-tight">{kpi.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* WHAT I ANALYZED */}
            <section id="dashboard" className="space-y-12 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Analyzed</h2>
              
              <div className="space-y-10">
                
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">PRODUCTS</h3>
                  <p className="text-base md:text-lg text-foreground">Product analysis showed that sales were not evenly distributed across categories.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Automotive Parts contributed 25.92% of sales.</li>
                    <li>Wearable Tech contributed 22.04%.</li>
                    <li>Automotive Parts had the highest quantity sold.</li>
                    <li>Discounts affected profit margins across categories.</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">SALES CHANNELS</h3>
                  <p className="text-base md:text-lg text-foreground">Different products performed differently across sales channels.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Online contributed 40.99% of sales.</li>
                    <li>In-store performed strongly for Automotive Parts.</li>
                    <li>Online performed strongly for Wearable Tech and Fitness Gear.</li>
                    <li>Wholesale performed strongly for Garden Tools.</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">REGIONS</h3>
                  <p className="text-base md:text-lg text-foreground">Looking at countries added another layer to the analysis.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Italy and France were strong in profit.</li>
                    <li>Italy and Netherlands were strong in sales.</li>
                    <li>Italy and Germany had high average sales per order.</li>
                    <li>France had a relatively high return count.</li>
                    <li>Germany showed margin issues in several categories.</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">TRENDS</h3>
                  <p className="text-base md:text-lg text-foreground">Time-based analysis helped show where performance changed during the year.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Q3 was the strongest period for sales and profit.</li>
                    <li>Q4 showed a decline.</li>
                    <li>September had a noticeable sales-unit spike.</li>
                    <li>Profit dropped by November.</li>
                    <li>Higher discounts were associated with lower profit.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">CUSTOMERS</h3>
                  <p className="text-base md:text-lg text-foreground">Customer analysis helped compare satisfaction, segments, loyalty programs, sales, and profitability.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Average satisfaction contributed strongly to profit margin.</li>
                    <li>Online channels performed strongly in profit margin.</li>
                    <li>Automotive and Fitness categories performed strongly across client segments.</li>
                    <li>Retail Partner customers had higher discounts affecting margins.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">LOYALTY PROGRAMS</h3>
                  <p className="text-base md:text-lg text-foreground">Looking at loyalty programs revealed different patterns in sales, quantity, unit price, satisfaction, and profit.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Bronze showed strong profit margin and high quantity sold.</li>
                    <li>Gold and Diamond showed strong average sales per order.</li>
                    <li>Diamond had the highest sales amount but lower profit margin because of discounts.</li>
                    <li>Platinum showed weaker sales performance.</li>
                  </ul>
                </div>

                {/* SALES VS TARGET */}
                <div className="space-y-6 pt-4 border-t border-border/50">
                  <h3 className="font-heading font-bold text-2xl text-foreground">Sales vs Target</h3>
                  <p className="text-base md:text-lg text-foreground mb-4">
                    The dashboard also included target tracking. Sales reached 1.17M against a target of 1.41M, while profit reached 205.73K against a target of 246.87K.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                      <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">Sales</span>
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="block text-sm text-foreground mb-1">Achieved</span>
                          <span className="text-3xl font-heading font-bold text-primary">1.17M</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm text-foreground mb-1">Target</span>
                          <span className="text-xl font-heading font-bold text-muted-foreground">1.41M</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary mt-4 rounded-full h-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                      <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">Profit</span>
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="block text-sm text-foreground mb-1">Achieved</span>
                          <span className="text-3xl font-heading font-bold text-primary">205.73K</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm text-foreground mb-1">Target</span>
                          <span className="text-xl font-heading font-bold text-muted-foreground">246.87K</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary mt-4 rounded-full h-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-foreground mt-4">
                    This made the gap between current performance and the expected target easy to see.
                  </p>
                </div>

                {/* LOOKING BEYOND THE KPIS */}
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <h3 className="font-heading font-bold text-2xl text-foreground">Looking Beyond the KPIs</h3>
                  <p className="text-base md:text-lg text-foreground">I also used Power BI's Key Influencers visual to look at factors associated with changes in sales amount.</p>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                    <ul className="list-disc pl-6 space-y-2 text-base text-foreground font-medium">
                      <li>Quantity between 3 and 4 units was associated with higher sales.</li>
                      <li>Higher discount levels were associated with higher sales.</li>
                      <li>Profit margin was also identified as an influencing factor.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* WHAT STOOD OUT */}
            <section id="insights" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What Stood Out</h2>
              
              <div className="space-y-6">
                {[
                  "A few product categories accounted for a large share of sales.",
                  "The strongest sales channel depended on the product category.",
                  "Sales and profitability varied considerably between countries.",
                  "Discounts could help sales but also put pressure on profit margins.",
                  "Customer loyalty programs showed different combinations of sales, quantity, satisfaction, and profitability.",
                  "Actual sales and profit were below the defined targets."
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-background border-l-4 border-l-primary border-y border-r border-y-border border-r-border rounded-r-2xl shadow-sm">
                    <span className="font-mono text-sm font-bold text-primary/40 mt-0.5">0{i+1}</span>
                    <p className="text-base md:text-lg text-foreground font-medium">{insight}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* MY CONTRIBUTION */}
            <section id="contribution" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              
              <div className="p-8 bg-secondary/20 border border-border rounded-3xl space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-foreground text-center max-w-2xl mx-auto mb-8">
                  My part of the project focused mainly on the analysis and dashboard work in Power BI.
                </p>
                
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <ul className="space-y-4">
                    {[
                      "Preparing the data for analysis",
                      "Creating calculated columns",
                      "Writing DAX measures",
                      "Building and arranging dashboard visuals",
                      "Analyzing sales by category and channel",
                      "Exploring customer and loyalty segments",
                      "Looking at trends and targets",
                      "Interpreting the results and extracting insights"
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

            {/* CHALLENGES */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Challenges</h2>
              
              <div className="grid grid-cols-1 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border/50">Getting the DAX Measures Right</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        One thing I found difficult was turning business questions into the right DAX measures. Some comparisons needed more than a simple SUM, especially category percentages, sales per client, margins, and channel-level analysis.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">How I solved it:</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I broke each requirement into a smaller calculation and tested the measures against the dashboard results. Working through functions such as CALCULATE, DIVIDE, SUMX, DISTINCTCOUNT, AVERAGEX, ALL, and ALLEXCEPT helped me understand how filter context changed the result.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border/50">Keeping the Dashboard Easy to Read</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        There was a lot of information in the dataset, and putting everything onto one dashboard could make it difficult to understand.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">How I solved it:</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I grouped the analysis around a few clear areas — products, channels, regions, trends, customers, and targets — and used filters and different visuals to let the user move from the overall picture into specific details.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-base font-serif italic text-foreground leading-relaxed">
                        "This taught me that a dashboard can contain a lot of analysis without needing to show everything at once."
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* WHAT I TOOK AWAY */}
            <section id="lessons" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Took Away</h2>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {[
                  "Good metrics matter as much as good visuals.",
                  "DAX becomes much easier to understand when you build measures around real questions.",
                  "Sales volume alone does not tell you whether a product or customer is profitable.",
                  "Looking at the same data by product, channel, region, and customer can reveal very different patterns.",
                  "An interactive dashboard is more useful when the user can explore the reason behind a number, not just see the number."
                ].map((lesson, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-secondary/30 border border-border rounded-xl">
                    <span className="font-mono font-bold text-primary/40 mt-0.5">0{i+1}</span>
                    <p className="text-base text-foreground font-medium">{lesson}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* IF I TOOK IT FURTHER */}
            <section id="future" className="space-y-8 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">If I Took It Further</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "01 — Predictive Customer Analysis", desc: "Use historical customer behavior to explore future buying patterns." },
                  { title: "02 — Product Profitability", desc: "Go deeper into product-level profitability and pricing." },
                  { title: "03 — Automated Anomaly Detection", desc: "Flag unusual changes in sales, discounts, or profit." },
                  { title: "04 — Cross-Sell Analysis", desc: "Explore product combinations to identify possible cross-selling opportunities." }
                ].map((idea, i) => (
                  <div key={i} className="p-5 border border-border rounded-xl bg-background shadow-sm hover:border-primary/30 transition-colors">
                    <h4 className="font-mono text-sm font-bold text-foreground mb-2">{idea.title}</h4>
                    <p className="text-sm text-muted-foreground">{idea.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-12 border-t border-border/50 text-center space-y-4">
                <p className="text-lg md:text-xl font-sans text-foreground max-w-3xl mx-auto">
                  Working on this project gave me a much clearer understanding of how Power BI can be used beyond charts — from preparing the data and building DAX measures to finding patterns that are actually worth discussing.
                </p>
                <p className="text-sm font-mono uppercase tracking-widest text-primary font-bold pt-4">
                  Sales data <ArrowRight size={14} className="inline mx-1 -mt-0.5" /> DAX <ArrowRight size={14} className="inline mx-1 -mt-0.5" /> Dashboard <ArrowRight size={14} className="inline mx-1 -mt-0.5" /> Insights
                </p>
              </div>
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
    content = content[:start_idx] + sales_dashboard_component_v2 + "\n\n" + content[end_idx:]
else:
    print("Could not find SalesDashboardCaseStudy in page.tsx")
    sys.exit(1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with conversational tone rewrite!")
