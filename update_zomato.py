import sys
import re

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update anchors
content = content.replace(
    'const anchors = [',
    'const anchors = slug === "zomato-analysis" ? ["overview", "problem", "objectives", "dataset", "eda", "analysis", "visualizations", "insights", "challenges", "contribution", "tools", "lessons", "future", "related"] : ['
)

# Update tocItems
content = content.replace(
    'const tocItems = [',
    'const tocItems = slug === "zomato-analysis" ? [ { id: "overview", label: "Overview" }, { id: "problem", label: "Problem Statement" }, { id: "objectives", label: "Objectives" }, { id: "dataset", label: "Dataset & Preparation" }, { id: "eda", label: "Exploratory Data Analysis" }, { id: "analysis", label: "Key Analysis" }, { id: "visualizations", label: "Visualizations" }, { id: "insights", label: "Key Insights" }, { id: "challenges", label: "Challenges & Solutions" }, { id: "contribution", label: "My Contribution" }, { id: "tools", label: "Tools & Libraries" }, { id: "lessons", label: "Lessons Learned" }, { id: "future", label: "Future Scope" }, { id: "related", label: "Related Projects" } ] : ['
)

# Render logic
zomato_content = """
            {slug === "zomato-analysis" ? (
              <>
                {/* Section 1: Overview */}
                <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Overview</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>Zomato Bengaluru Data Analysis is an exploratory data analysis project based on restaurant data from Bengaluru.</p>
                    <p>The project uses Python and popular data-analysis and visualization libraries to understand restaurant ratings, cuisines, pricing, locations, online ordering, table booking, votes, and other characteristics of the Bengaluru restaurant ecosystem.</p>
                    <p>The analysis was performed in Jupyter Notebook, with visualizations used to identify patterns and communicate insights from the dataset.</p>
                  </div>
                </section>
                
                {/* Section 2: Problem Statement */}
                <section id="problem" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Problem Statement</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>Bengaluru has a large and diverse restaurant ecosystem, making it difficult to understand restaurant trends from raw data alone.</p>
                    <p>The objective of this analysis was to transform a raw restaurant dataset into meaningful information about ratings, pricing, cuisines, locations, restaurant types, online ordering, table booking, and customer engagement.</p>
                    <p>The focus was not simply to create charts, but to use the data to answer practical questions about the restaurant landscape in Bengaluru.</p>
                  </div>
                </section>
                
                {/* Section 3: Objectives */}
                <section id="objectives" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Objectives</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">01 — Understand restaurant ratings</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Analyze rating distributions and identify patterns in restaurant ratings.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">02 — Explore restaurant categories</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Understand different restaurant types, cuisines, and restaurant chains.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">03 — Analyze pricing</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Study approximate cost for two people and identify affordable and expensive restaurants.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">04 — Study customer behavior</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Analyze votes and their relationship with restaurant characteristics.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">05 — Compare services</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Analyze online ordering and table-booking availability.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">06 — Explore locations</span>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Identify restaurant concentration, affordable areas, and popular food locations across Bengaluru.</p>
                    </div>
                  </div>
                </section>
                
                {/* Section 4: Dataset & Preparation */}
                <section id="dataset" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Dataset & Preparation</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p><strong>Source:</strong> Kaggle</p>
                    <p><strong>Dataset:</strong> Bengaluru / Bangalore Zomato restaurant dataset</p>
                    <p>The dataset contained restaurant-level information such as: Restaurant name, Location, Restaurant type, Cuisine, Rating, Votes, Approximate cost for two people, Online ordering availability, Table booking availability, and other attributes.</p>
                    <p>Before analysis, the dataset was examined and prepared for meaningful analysis. Preparation included:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Inspecting the dataset structure</li>
                      <li>Understanding columns and data types</li>
                      <li>Identifying missing values</li>
                      <li>Cleaning inconsistent values</li>
                      <li>Converting relevant columns into usable formats</li>
                      <li>Preparing categorical and numerical data for analysis</li>
                    </ul>
                  </div>
                </section>
                
                {/* Section 5: Exploratory Data Analysis */}
                <section id="eda" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Exploratory Data Analysis</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>The project used exploratory analysis to understand patterns before drawing conclusions.</p>
                    <div className="p-4 bg-secondary/30 rounded-xl border border-border text-center font-mono text-sm overflow-x-auto whitespace-nowrap text-primary">
                      Dataset → Cleaning → Exploration → Analysis → Visualization → Insights
                    </div>
                    <p>Pandas and NumPy were used for data manipulation and numerical analysis. Matplotlib, Seaborn, and Plotly were used to visualize patterns and relationships.</p>
                  </div>
                </section>

                {/* Section 6: Key Analysis */}
                <section id="analysis" className="space-y-8 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Key Analysis</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Restaurant Ratings</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Calculated the average rating of restaurants.</li>
                        <li>Studied the distribution of restaurant ratings.</li>
                        <li>Identified highly rated restaurants.</li>
                        <li>Examined the relationship between ratings and other restaurant characteristics.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Restaurant Types & Cuisines</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Analyzed different types of restaurants in Bengaluru.</li>
                        <li>Identified popular restaurant categories.</li>
                        <li>Examined cuisine varieties such as North Indian, South Indian, and other cuisine categories.</li>
                        <li>Explored restaurant chains and their presence across Bengaluru.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Location Analysis</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Analyzed the number of restaurants across different Bengaluru locations.</li>
                        <li>Identified locations with higher restaurant concentration.</li>
                        <li>Explored food-oriented areas across Bengaluru.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Online Ordering & Table Booking</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Compared restaurants that provide online ordering with those that do not.</li>
                        <li>Analyzed the availability of table booking.</li>
                        <li>Studied how online ordering relates to votes, ratings, and pricing.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Pricing Analysis</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Analyzed the approximate cost for two people.</li>
                        <li>Studied the distribution of restaurant prices.</li>
                        <li>Identified budget-friendly and expensive restaurants.</li>
                        <li>Found restaurants under ₹500.</li>
                        <li>Identified highly rated restaurants that were also relatively affordable.</li>
                        <li>Compared pricing across different locations.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Customer Engagement</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Identified the highest-voted restaurant.</li>
                        <li>Analyzed how votes varied based on restaurant characteristics.</li>
                        <li>Studied the relationship between votes, ratings, online ordering, and price.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 text-primary">Detailed Restaurant Analysis</h3>
                      <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                        <li>Identified the most expensive and cheapest restaurants.</li>
                        <li>Examined the most expensive restaurant and its associated dish information where available.</li>
                        <li>Identified affordable restaurants across different locations.</li>
                        <li>Explored suitable budget restaurants by location.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                {/* Section 7: Visualizations */}
                <section id="visualizations" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Visualizations</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>The analysis was supported by visualizations created using: <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>Plotly</strong>.</p>
                    <p>Visualizations were used for:</p>
                    <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                      <li>Rating distributions and price distributions</li>
                      <li>Restaurant counts, cuisine distributions, and restaurant types</li>
                      <li>Location comparisons</li>
                      <li>Online ordering and table booking comparisons</li>
                      <li>Rating vs. cost relationships</li>
                      <li>Votes and restaurant characteristics</li>
                      <li>Budget restaurant analysis</li>
                    </ul>
                    <p>The purpose of the visualizations was to make patterns easier to identify and turn raw analysis into understandable insights.</p>
                  </div>
                </section>
                
                {/* Section 8: Key Insights */}
                <section id="insights" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Key Insights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Ratings</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Restaurant ratings showed noticeable variation across Bengaluru, making rating distribution useful for understanding overall restaurant performance.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Pricing</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Restaurant pricing varied significantly, with both budget-friendly options and premium restaurants present across different locations.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Location</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Restaurant availability was concentrated in certain Bengaluru areas, revealing clear differences in restaurant density between locations.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Cuisine</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Bengaluru's restaurant ecosystem contained a wide variety of cuisines, with some cuisine categories appearing much more frequently than others.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Online Ordering</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Online ordering availability varied across restaurants, allowing comparisons between restaurants that accepted online orders and those that did not.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm">
                      <h3 className="font-heading font-bold text-lg text-foreground">Customer Engagement</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Votes provided another perspective beyond ratings and helped identify restaurants with stronger customer engagement.</p>
                    </div>
                    <div className="p-5 bg-background border border-border rounded-xl space-y-3 shadow-sm md:col-span-2">
                      <h3 className="font-heading font-bold text-lg text-foreground">Affordability</h3>
                      <p className="text-sm text-foreground font-sans leading-relaxed">Combining price and rating made it possible to identify restaurants that offered relatively good ratings while remaining within a lower budget.</p>
                    </div>
                  </div>
                </section>
                
                {/* Section 9: Challenges & Solutions */}
                <section id="challenges" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">01</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Understanding a real-world dataset</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> The dataset contained many columns and different types of information, which initially made it difficult to understand which fields were useful for each analysis.</p>
                        <p><strong className="text-primary">Solution:</strong> I first explored the dataset structure, examined individual columns, checked data types and missing values, and then grouped the analysis around meaningful questions.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">02</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Working with inconsistent data</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> Real-world datasets are rarely perfectly clean. Some values required inspection and preparation before they could be used reliably in analysis.</p>
                        <p><strong className="text-primary">Solution:</strong> I inspected problematic columns, cleaned inconsistent values, handled missing or unsuitable entries where necessary, and prepared the data before performing calculations.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">03</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Choosing the right visualization</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> Not every question can be explained effectively using the same type of chart.</p>
                        <p><strong className="text-primary">Solution:</strong> I experimented with different visualizations using Matplotlib, Seaborn, and Plotly and selected charts based on the type of comparison or relationship I wanted to communicate.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">04</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Moving from charts to insights</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> Creating a chart was not enough; I needed to understand what the visualization was actually showing.</p>
                        <p><strong className="text-primary">Solution:</strong> For each analysis, I focused on identifying patterns, comparisons, distributions, and relationships rather than simply generating visualizations.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-background border border-border rounded-2xl space-y-5 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center justify-center text-sm font-bold font-mono">05</span>
                        <h3 className="font-heading font-bold text-xl text-foreground">Handling a large number of analytical questions</h3>
                      </div>
                      <div className="pl-11 space-y-3 text-sm md:text-base font-sans text-foreground leading-relaxed">
                        <p><strong className="text-foreground">Challenge:</strong> The project involved many different questions around pricing, ratings, locations, cuisines, votes, and restaurant services.</p>
                        <p><strong className="text-primary">Solution:</strong> I organized the analysis into categories such as ratings, pricing, locations, cuisines, customer engagement, and services. This made the notebook easier to follow and the conclusions easier to communicate.</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Section 10: My Contribution */}
                <section id="contribution" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">My Contribution</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                    <p>As this was my first data-analysis project, my primary contribution was exploratory analysis and visualization.</p>
                    <p>I worked on:</p>
                    <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground">
                      <li>Exploring and understanding the dataset</li>
                      <li>Preparing data for analysis</li>
                      <li>Performing analysis using Python</li>
                      <li>Creating charts and visualizations</li>
                      <li>Comparing restaurant characteristics</li>
                      <li>Extracting meaningful insights from the data</li>
                      <li>Presenting findings clearly through the Jupyter Notebook</li>
                    </ul>
                  </div>
                </section>
                
                {/* Section 11: Tools & Libraries */}
                <section id="tools" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Tools & Libraries</h2>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Kaggle Dataset"].map((tool) => (
                      <span key={tool} className="text-sm font-semibold bg-secondary text-foreground border border-border px-4 py-2 rounded-lg">{tool}</span>
                    ))}
                  </div>
                </section>
                
                {/* Section 12: Lessons Learned */}
                <section id="lessons" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Lessons Learned</h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-foreground">This project gave me my first practical experience working with a real-world dataset.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Data analysis starts with understanding the problem, not immediately writing code.",
                        "Data cleaning is an important part of reliable analysis.",
                        "Visualization can reveal patterns that are difficult to notice from raw data.",
                        "Different questions require different analytical approaches.",
                        "Good analysis should lead to understandable insights, not just charts.",
                        "Working with a real dataset taught me how messy practical data can be compared with clean tutorial examples."
                      ].map((lesson, i) => (
                        <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm md:text-base text-foreground font-sans">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                
                {/* Section 13: Future Scope */}
                <section id="future" className="space-y-6 scroll-mt-28">
                  <h2 className="font-heading font-bold text-3xl text-foreground border-b border-border pb-4">Future Scope</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Building an interactive Power BI dashboard from the cleaned dataset.",
                      "Adding more advanced statistical analysis.",
                      "Exploring geographic patterns using maps.",
                      "Comparing restaurant trends across multiple cities.",
                      "Applying machine learning techniques to explore rating or price prediction as a separate future project."
                    ].map((imp, i) => (
                      <li key={i} className="p-5 bg-secondary/30 border border-border rounded-xl flex items-start gap-4">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm md:text-base text-foreground font-sans">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <>
"""

# Replace the beginning of the rendered content block
# We find: {/* Section 1: Overview */}
content = content.replace(
    '{/* Section 1: Overview */}',
    zomato_content + '\n{/* Section 1: Overview */}'
)

# And close the condition before Related Projects
# Wait, let's close it right before Related Projects because Zomato should show related projects as well.
# We find: {/* Section 14: Related Projects */}
content = content.replace(
    '{/* Section 14: Related Projects */}',
    '</>\n            )}\n\n            {/* Section 14: Related Projects */}'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx")
