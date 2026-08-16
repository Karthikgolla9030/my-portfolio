import re
import os

def clean_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        if isinstance(old, re.Pattern):
            content = old.sub(new, content)
        else:
            content = content.replace(old, new)
            
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

base_path = r"c:\Users\karth\Downloads\projects\p"

# 1. Update src/data/projects.ts
proj_path = os.path.join(base_path, "src/data/projects.ts")
with open(proj_path, 'r', encoding='utf-8') as f:
    proj_content = f.read()

# Regex to remove smartpg and amazon-predictor objects from the list
proj_content = re.sub(
    r'\s*{\s*id:\s*"smartpg"[\s\S]*?(?=\s*{\s*id:|\s*\];)', 
    '', 
    proj_content
)
proj_content = re.sub(
    r',\s*{\s*id:\s*"amazon-predictor"[\s\S]*?(?=\s*{\s*id:|\s*\];)', 
    '', 
    proj_content
)
# If amazon-predictor was the last one without a preceding comma matching perfectly
proj_content = re.sub(
    r'\s*{\s*id:\s*"amazon-predictor"[\s\S]*?(?=\s*{\s*id:|\s*\];)', 
    '', 
    proj_content
)

# Clean up trailing commas if any left before the end array bracket
proj_content = re.sub(r',\s*\];', '\n];', proj_content)

with open(proj_path, 'w', encoding='utf-8') as f:
    f.write(proj_content)


# 2. Update src/app/projects/[slug]/page.tsx
page_tsx_path = os.path.join(base_path, "src/app/projects/[slug]/page.tsx")
clean_file(page_tsx_path, [
    (re.compile(r'\s*smartpg:\s*\{[\s\S]*?(?=\s*[a-zA-Z0-9_-]+:\s*\{|\s*\};\s*)'), '')
])

# 3. Update src/app/learning/[slug]/page.tsx
learning_path = os.path.join(base_path, "src/app/learning/[slug]/page.tsx")
clean_file(learning_path, [
    ('"smartpg", ', ''),
    (', "smartpg"', ''),
    ('"smartpg"', ''),
    ('"amazon-predictor", ', ''),
    (', "amazon-predictor"', ''),
    ('"amazon-predictor"', '')
])

# 4. Update src/app/experience/[slug]/page.tsx
exp_path = os.path.join(base_path, "src/app/experience/[slug]/page.tsx")
clean_file(exp_path, [
    ('"Conducted EDA on Amazon and Zomato datasets mapping ratings metrics."', '"Conducted EDA on Zomato datasets mapping ratings metrics."'),
    (re.compile(r'\s*"Analyzed Amazon catalog pricing models achieving 89% price drop forecast accuracy.",?'), ''),
    ('"smartpg", ', ''),
    (', "smartpg"', ''),
    ('"smartpg"', ''),
    ('"amazon-predictor", ', ''),
    (', "amazon-predictor"', ''),
    ('"amazon-predictor"', '')
])

# 5. Update src/app/certifications/[slug]/page.tsx
cert_path = os.path.join(base_path, "src/app/certifications/[slug]/page.tsx")
clean_file(cert_path, [
    ('"smartpg", ', ''),
    (', "smartpg"', ''),
    ('"smartpg"', ''),
    ('"amazon-predictor", ', ''),
    (', "amazon-predictor"', ''),
    ('"amazon-predictor"', '')
])

print("Cleanup complete!")
