import sys
import re

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

sales_dashboard_component = """
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
    { id: "problem", label: "Business Problem" },
    { id: "objectives", label: "Objectives" },
    { id: "data", label: "Data & Preparation" },
    { id: "dax", label: "DAX & Metrics" },
    { id: "dashboard", label: "Dashboard Analysis" },
    { id: "insights", label: "Key Insights" },
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
              PROJECT / BUSINESS INTELLIGENCE
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Sales Performance Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
              Turning sales data into interactive insights for understanding revenue, profitability, customers, products, and business performance.
            </p>
            <p className="text-base text-muted-foreground/80 font-sans italic border-l-2 border-primary/30 pl-4 py-1">
              An interactive Power BI analysis designed to help users monitor sales performance, identify trends, compare business segments, and support data-driven decisions.
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
            
            {/* 01 — OVERVIEW */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Business Intelligence helps organizations transform raw business data into information that can support faster and more informed decisions.</p>
                <p>This project focused on using Power BI to analyze sales performance across products, sales channels, regions, customers, profitability, discounts, returns, and customer loyalty.</p>
                <p>The objective was not simply to display numbers, but to organize business information into an interactive dashboard where users could explore performance, identify patterns, and understand where improvements may be needed.</p>
              </div>
            </section>

            {/* 02 — BUSINESS PROBLEM */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">From Sales Data to Business Decisions</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground mb-8">
                <p>Sales data can contain valuable information about revenue, profitability, customer behavior, product performance, and regional performance. Without a clear analytical view, these signals can be difficult to compare and interpret.</p>
                <p>The challenge was to organize this information into a Power BI dashboard that allowed users to monitor current performance and move from high-level KPIs to deeper business analysis.</p>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 md:gap-4 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-primary border border-border rounded-xl px-4 py-4 bg-secondary/30 shadow-sm overflow-x-auto max-w-full">
                  <span className="bg-background px-3 py-1.5 rounded-md border border-border">RAW SALES DATA</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span className="bg-background px-3 py-1.5 rounded-md border border-border">TRANSFORM</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span className="bg-background px-3 py-1.5 rounded-md border border-border">CALCULATE</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span className="bg-background px-3 py-1.5 rounded-md border border-border">VISUALIZE</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span className="bg-background px-3 py-1.5 rounded-md border border-border">ANALYZE</span>
                  <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  <span className="bg-background px-3 py-1.5 rounded-md border border-border">DECIDE</span>
                </div>
              </div>
            </section>

            {/* 03 — OBJECTIVES */}
            <section id="objectives" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Wanted to Understand</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Measure Performance", desc: "Evaluate sales, profit, units sold, discounts, and returns." },
                  { title: "Identify Trends", desc: "Understand how sales and profit change across time." },
                  { title: "Compare Segments", desc: "Analyze products, regions, channels, customers, and loyalty programs." },
                  { title: "Support Decisions", desc: "Identify areas where profitability, customer retention, or sales performance could be improved." }
                ].map((obj, i) => (
                  <div key={i} className="p-6 bg-secondary/20 border border-border rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl font-heading font-bold text-primary/40">0{i + 1}</span>
                    <h3 className="font-heading font-bold text-xl text-foreground">{obj.title}</h3>
                    <p className="text-base text-foreground font-medium leading-relaxed">{obj.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 04 — DATA & PREPARATION */}
            <section id="data" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Understanding the Sales Dataset</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
                The dataset brought together information from different parts of the sales process, allowing performance to be analyzed from both business and customer perspectives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">01 — ORDER INFORMATION</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Invoice Number</li>
                    <li>Shipping Type</li>
                    <li>Order Date</li>
                    <li>Delivery Date</li>
                    <li>Payment Method</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">02 — CUSTOMER INFORMATION</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Client Code</li>
                    <li>Client Name</li>
                    <li>Client Segment</li>
                    <li>Location, Country, Region</li>
                    <li>Zip Code</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">03 — PRODUCT & SALES INFORMATION</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Product Code & Category</li>
                    <li>Product Description & Warranty</li>
                    <li>Sale Amount & Quantity</li>
                    <li>Discount Rate & Profit Margin</li>
                    <li>Unit Price</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-border/50">04 — CUSTOMER & MARKETING INFORMATION</h3>
                  <ul className="text-sm font-sans text-foreground space-y-1.5 opacity-90">
                    <li>Customer Rating</li>
                    <li>Product Return Status</li>
                    <li>Customer Loyalty Program</li>
                    <li>Sales Channel</li>
                    <li>Marketing Campaign Code</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 05 — DATA TRANSFORMATION & DAX */}
            <section id="dax" className="space-y-8 scroll-mt-28 bg-secondary/10 p-8 rounded-3xl border border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">From Raw Fields to Business Metrics</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                To make the dataset useful for business analysis, I created calculated columns and DAX measures in Power BI. These calculations converted raw fields into metrics that could be used across dashboard visuals and filters.
              </p>
              
              <div className="space-y-8 pt-4">
                
                {/* Calculated Columns */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 border-b border-border/50 pb-2">Calculated Columns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Actual Cost</div>
                      <div className="text-foreground opacity-80">= Sale Amount − Profit Margin</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Discount</div>
                      <div className="text-foreground opacity-80">= Sale Amount × Discount Rate</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Unit Price</div>
                      <div className="text-foreground opacity-80">= Sale Amount ÷ Quantity</div>
                    </div>
                    <div className="bg-background border border-border rounded-xl p-4 shadow-sm font-mono text-sm">
                      <div className="text-primary font-bold mb-1">Customer Satisfaction</div>
                      <div className="text-foreground opacity-80">5 → Excellent, 4 → Good, Others → Average</div>
                    </div>
                  </div>
                </div>

                {/* DAX Measures */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 border-b border-border/50 pb-2">DAX Measures</h3>
                  <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {[
                        "Total Sales", "Total Units Sold", "Total Cost", "Gross Profit", 
                        "Gross Profit Margin", "Total Discount", "Client Count", 
                        "Sales Per Client", "Average Unit Price", "Average Sales Per Order", 
                        "Sales % by Category", "Sales by Channel", "Sales by Region", 
                        "Total Sales by Category", "Non-Return Count"
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

            {/* 06 — SALES PERFORMANCE METRICS */}
            <section id="metrics" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Numbers I Used to Measure Performance</h2>
              
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

            {/* 07 — DASHBOARD ANALYSIS */}
            <section id="dashboard" className="space-y-12 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Exploring Performance Through the Dashboard</h2>
              
              <div className="space-y-10">
                
                {/* 01 Product Performance */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">01 — PRODUCT PERFORMANCE</h3>
                  <p className="text-base md:text-lg text-foreground">Product-level analysis helped identify which categories were contributing strongly to sales volume and profitability.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Automotive Parts contributed 25.92% of sales.</li>
                    <li>Wearable Tech contributed 22.04%.</li>
                    <li>Automotive Parts had the highest quantity sold.</li>
                    <li>Discount levels influenced profitability across categories.</li>
                  </ul>
                </div>
                
                {/* 02 Sales Channel */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">02 — SALES CHANNEL PERFORMANCE</h3>
                  <p className="text-base md:text-lg text-foreground">Comparing sales channels helped reveal how different channels contributed to revenue, product performance, and profitability.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Online channel contributed 40.99% of sales.</li>
                    <li>In-store performed strongly for Automotive Parts.</li>
                    <li>Online performed strongly for Wearable Tech and Fitness Gear.</li>
                    <li>Wholesale performed strongly for Garden Tools.</li>
                  </ul>
                </div>
                
                {/* 03 Geographical */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">03 — GEOGRAPHICAL ANALYSIS</h3>
                  <p className="text-base md:text-lg text-foreground">Regional analysis was used to compare sales, profit, average sales per order, and returns across countries.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Italy and France were among the strongest countries for profit.</li>
                    <li>Italy and Netherlands were among the strongest for sales.</li>
                    <li>Italy and Germany showed high average sales per order.</li>
                    <li>France showed relatively high returns.</li>
                    <li>Germany showed margin issues in several categories.</li>
                  </ul>
                </div>
                
                {/* 04 Trend Analysis */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">04 — TREND ANALYSIS</h3>
                  <p className="text-base md:text-lg text-foreground">Time-based analysis helped identify periods where sales and profit increased or declined.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Q3 showed the strongest sales and profit performance.</li>
                    <li>Q4 showed a decline.</li>
                    <li>September showed a notable sales-unit spike.</li>
                    <li>Profit declined by November.</li>
                    <li>Higher discounts were associated with lower profit.</li>
                  </ul>
                </div>

                {/* 05 Customer Segmentation */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">05 — CUSTOMER SEGMENTATION</h3>
                  <p className="text-base md:text-lg text-foreground">Customer segmentation provided another layer of analysis by comparing satisfaction, profitability, sales channels, and customer segments.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Average satisfaction contributed strongly to profit margin.</li>
                    <li>Online channels showed stronger profit margins than some other channels.</li>
                    <li>Automotive and Fitness categories performed strongly across client segments.</li>
                    <li>Retail Partner customers had higher discounts affecting margins.</li>
                  </ul>
                </div>

                {/* 06 Customer Loyalty */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">06 — CUSTOMER LOYALTY</h3>
                  <p className="text-base md:text-lg text-foreground">The loyalty analysis compared customer programs using sales, profit margin, quantity, unit price, average sales per order, and satisfaction.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Bronze showed strong profit margin and high quantity sold.</li>
                    <li>Gold and Diamond showed strong average sales per order.</li>
                    <li>Diamond generated the highest sales amount but experienced lower profit margin due to discounts.</li>
                    <li>Platinum showed weaker sales performance.</li>
                  </ul>
                </div>

                {/* 07 Payment Method */}
                <div className="space-y-4">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase border-b border-border/50 pb-2">07 — PAYMENT METHOD</h3>
                  <p className="text-base md:text-lg text-foreground">Payment-method analysis showed how different payment options were associated with sales, discounts, and profitability.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Bank Transfer generated the highest sales amount but also involved higher discounts.</li>
                    <li>Cash showed comparatively strong profitability with fewer discounts.</li>
                    <li>Credit Card showed a more balanced sales and profit profile.</li>
                  </ul>
                </div>

                {/* 08 Actual vs Target */}
                <div className="space-y-6 pt-4">
                  <h3 className="font-heading font-bold text-2xl text-foreground">Actual Performance vs Target</h3>
                  <p className="text-base md:text-lg text-foreground mb-4">The dashboard compared achieved sales and profit against defined targets, making it easier to see the gap between current performance and expected performance.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                      <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">Sales Performance</span>
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="block text-sm text-foreground mb-1">Sales achieved</span>
                          <span className="text-3xl font-heading font-bold text-primary">1.17M</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm text-foreground mb-1">Sales target</span>
                          <span className="text-xl font-heading font-bold text-muted-foreground">1.41M</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary mt-4 rounded-full h-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                      <span className="block text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">Profit Performance</span>
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="block text-sm text-foreground mb-1">Profit achieved</span>
                          <span className="text-3xl font-heading font-bold text-primary">205.73K</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-sm text-foreground mb-1">Profit target</span>
                          <span className="text-xl font-heading font-bold text-muted-foreground">246.87K</span>
                        </div>
                      </div>
                      <div className="w-full bg-secondary mt-4 rounded-full h-2 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "83%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 09 Key Influencers */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-heading font-bold text-2xl text-foreground">What Influenced Sales Performance?</h3>
                  <p className="text-base md:text-lg text-foreground">Power BI's Key Influencers analysis was used to explore which factors were associated with changes in sales amount.</p>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                    <ul className="list-disc pl-6 space-y-2 text-base text-foreground font-medium">
                      <li>Sales were more likely to increase when profit margin was at or below the identified threshold.</li>
                      <li>Quantity between 3 and 4 units was associated with higher sales.</li>
                      <li>Higher discount levels were also associated with higher sales.</li>
                    </ul>
                  </div>
                </div>

                {/* 10 Customer Profitability */}
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <h3 className="font-heading font-bold text-2xl text-foreground">Understanding Customer Profitability</h3>
                  <p className="text-base md:text-lg text-foreground">Customer profitability analysis connected loyalty programs, unit prices, sales, discounts, and profit margins to understand which customer groups created stronger business value.</p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-muted-foreground">
                    <li>Bronze showed strong profit margin.</li>
                    <li>Diamond and Gold showed strong sales per client and higher unit prices.</li>
                    <li>Platinum and Silver presented opportunities for stronger engagement strategies.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* 08 — KEY INSIGHTS */}
            <section id="insights" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Key Insights</h2>
              
              <div className="space-y-6 mb-10">
                {[
                  "Sales performance was concentrated around a few strong product categories.",
                  "Different sales channels performed differently depending on the product category.",
                  "Geographical performance varied considerably across countries.",
                  "Higher discount levels were associated with weaker profit performance.",
                  "Customer loyalty programs showed different combinations of sales volume, satisfaction, and profitability.",
                  "Sales and profit were below the defined targets, highlighting opportunities for performance improvement."
                ].map((insight, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-background border-l-4 border-l-primary border-y border-r border-y-border border-r-border rounded-r-2xl shadow-sm">
                    <span className="font-mono text-sm font-bold text-primary/40 mt-0.5">0{i+1}</span>
                    <p className="text-base md:text-lg text-foreground font-medium">{insight}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-secondary/30 rounded-2xl border border-border">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Business Implications</h3>
                <ul className="space-y-3">
                  {[
                    "Optimize discount strategies to protect profit margins.",
                    "Investigate underperforming regions and product categories.",
                    "Strengthen strategies for weaker customer-loyalty segments.",
                    "Maintain strong-performing channels while improving weaker ones.",
                    "Use target tracking to identify performance gaps earlier."
                  ].map((rec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                      <span className="text-base text-foreground font-medium">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 09 — MY CONTRIBUTION */}
            <section id="contribution" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              
              <div className="p-8 bg-secondary/20 border border-border rounded-3xl space-y-6">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground text-center mb-2">Power BI Analysis & Dashboard Development</h3>
                <p className="text-base md:text-lg leading-relaxed text-foreground text-center max-w-2xl mx-auto mb-8">
                  My contribution focused on transforming the sales dataset into an interactive Power BI analysis. I worked with data preparation, calculated columns, DAX measures, dashboard visualizations, filtering, and interpretation of business performance.
                </p>
                
                <div className="bg-background border border-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <ul className="space-y-4">
                    {[
                      "Prepared and explored the sales dataset",
                      "Created calculated columns in Power BI",
                      "Developed DAX measures",
                      "Built KPI-based sales performance views",
                      "Analyzed products and sales channels",
                      "Performed geographical analysis",
                      "Explored customer segmentation and loyalty",
                      "Analyzed trends and targets",
                      "Used Power BI Key Influencers",
                      "Extracted business insights and recommendations"
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

            {/* 10 — CHALLENGES */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Challenges</h2>
              
              <div className="grid grid-cols-1 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border/50">Turning business questions into meaningful DAX measures</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        One of the more difficult parts was moving from raw sales fields to metrics that could actually answer business questions. A simple SUM was not enough for comparisons such as category contribution, sales per client, gross profit margin, and channel-level performance.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">How I approached it:</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I broke each business question into the metric it required, then created calculated columns and DAX measures step by step. I used functions such as CALCULATE, DIVIDE, SUMX, DISTINCTCOUNT, AVERAGEX, ALL, and ALLEXCEPT to build reusable measures for the dashboard.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">What I learned:</span>
                      <p className="text-base font-serif italic text-foreground leading-relaxed">
                        "I learned that a good dashboard depends heavily on defining the right measures before designing the visuals."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-6 pb-4 border-b border-border/50">Making a large dataset understandable through one dashboard</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Challenge:</span>
                      <p className="text-base text-foreground font-medium leading-relaxed">
                        The dataset contained product, customer, geographical, sales-channel, payment, loyalty, discount, return, and time-related information. Showing everything at once could easily make the dashboard difficult to understand.
                      </p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">How I approached it:</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        I grouped the analysis into business questions and used filters, KPI cards, trend visuals, category comparisons, segmentation views, target analysis, and Key Influencers to let users move from a high-level overview to deeper analysis.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <span className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">What I learned:</span>
                      <p className="text-base font-serif italic text-foreground leading-relaxed">
                        "I learned that effective BI is not about displaying the maximum amount of information. It is about organizing information so that users can find the answer they need."
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 11 — LESSONS LEARNED */}
            <section id="lessons" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What This Project Taught Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "A dashboard is only as useful as the metrics behind it.",
                  "DAX allows raw business data to become reusable analytical measures.",
                  "Different business dimensions can reveal completely different performance patterns.",
                  "Visualization is not just presentation — it helps users compare, filter, and investigate.",
                  "Profitability needs to be considered alongside sales volume.",
                  "A good BI solution should help move from 'What happened?' to 'Why might it be happening?' and 'What should we investigate next?'"
                ].map((lesson, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-secondary/30 border border-border rounded-2xl">
                    <span className="font-mono font-bold text-primary/40 mt-1">0{i+1}</span>
                    <p className="text-base text-foreground font-medium">{lesson}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-serif italic text-foreground text-center max-w-2xl mx-auto px-6 border-l-2 border-r-2 border-primary/20 py-4">
                "This project strengthened my understanding of how Power BI can connect data preparation, analytical calculations, visualization, and business reasoning into one workflow."
              </p>
            </section>

            {/* 12 — FUTURE SCOPE */}
            <section id="future" className="space-y-8 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Where This Could Go Next</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "01 — Predictive Customer Analysis", desc: "Use historical customer behavior and satisfaction data to explore future buying behavior and customer lifetime value." },
                  { title: "02 — Sentiment Analysis", desc: "If textual customer feedback becomes available, analyze customer sentiment beyond numerical ratings." },
                  { title: "03 — Product Profitability Optimization", desc: "Analyze product-level profitability to support pricing and inventory decisions." },
                  { title: "04 — Dynamic Sales Targets", desc: "Explore targets that adapt to seasonality, historical performance, and market conditions." },
                  { title: "05 — Anomaly Detection", desc: "Use automated analytics to flag unusual sales, discount, or profit movements." },
                  { title: "06 — Cross-Sell & Upsell Analysis", desc: "Explore product combinations and purchasing patterns to identify potential cross-selling opportunities." }
                ].map((idea, i) => (
                  <div key={i} className="p-5 border border-border rounded-xl bg-background shadow-sm hover:border-primary/30 transition-colors">
                    <h4 className="font-mono text-sm font-bold text-foreground mb-2">{idea.title}</h4>
                    <p className="text-sm text-muted-foreground">{idea.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-12 border-t border-border/50 text-center space-y-4">
                <p className="text-xl md:text-2xl font-heading font-bold text-foreground max-w-3xl mx-auto">
                  "This project showed me that Business Intelligence is not simply about building dashboards. The real value comes from connecting the right data, the right metrics, and the right questions to make performance easier to understand."
                </p>
                <p className="text-sm font-mono uppercase tracking-widest text-primary font-bold pt-4">
                  From raw sales data <ArrowRight size={14} className="inline mx-1 -mt-0.5" /> to DAX measures <ArrowRight size={14} className="inline mx-1 -mt-0.5" /> to interactive analysis <ArrowRight size={14} className="inline mx-1 -mt-0.5" /> to business insight.
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

# Extract everything from `export default function ProjectCaseStudyPage` upwards to insert the component
# I will use string manipulation.

end_str = "export default function ProjectCaseStudyPage"

end_idx = content.find(end_str)

if end_idx != -1:
    content = content[:end_idx] + sales_dashboard_component + "\n\n" + content[end_idx:]
else:
    print("Could not find ProjectCaseStudyPage in page.tsx")
    sys.exit(1)

# Now inject the return condition at the top of ProjectCaseStudyPage
injection_code = """  // If this is the Sales Dashboard project, use its bespoke layout
  if (slug === "sales-dashboard") {
    return <SalesDashboardCaseStudy project={project} related={related} />;
  }
"""

if 'if (slug === "sales-dashboard")' not in content:
    content = content.replace(
        "const related = projects.filter((p) => p.slug !== slug).slice(0, 2);",
        "const related = projects.filter((p) => p.slug !== slug).slice(0, 2);\n\n" + injection_code
    )

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with Sales Dashboard redesign!")
