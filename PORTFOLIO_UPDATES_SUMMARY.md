# Portfolio Updates Summary - Htet Myat Aung

## Overview
This document summarizes all the changes made to customize the portfolio website based on your resume and professional experience.

---

## Files Modified

### 1. Configuration Files

#### `_config.yml`
**Changes:**
- Updated personal information (name: Htet Myat Aung)
- Updated site description to reflect AI/ML/Robotics expertise
- Changed scholar info from Einstein to Aung
- Disabled blog pagination (`pagination.enabled: false`)
- Disabled related blog posts
- Disabled collections output for projects and teachings

#### `_data/cv.yml`
**Changes:**
- Completely replaced with your comprehensive CV data including:
  - Personal information and contact details
  - Education: KMUTT (2022-2025) and YTU background
  - Professional Experience: MTC researcher positions, HoneyHunt.AI internship
  - Research Experience: 3D-CNN gas leak detection, CODIA Lab, COSIN Lab
  - Leadership: FIRST GLOBAL CHALLENGE, L.O.R.A, ConceptX International School
  - Awards: Best Paper Award, Best Presentation Award, KMUTT Hall of Fame, etc.
  - Publications: IEEE ICoICT 2025 paper, ICA-SP Con 2025 paper
  - Skills: Programming, AI/ML frameworks, Robotics systems
  - Languages: English (Fluent), Burmese (Native)
  - Research interests

#### `_data/socials.yml`
**Changes:**
- Updated email: hmaung.ytu13698@gmail.com
- Updated GitHub username: AlexHongHMA
- Updated LinkedIn: htet-myat-aung-11101
- Updated CV PDF path to your resume

#### `_data/coauthors.yml`
**Changes:**
- Replaced example coauthors with your collaborators:
  - Dr. Sarawan Wongsa
  - Prof. Cherdpong Jomdecha

#### `_data/repositories.yml`
**Changes:**
- Set GitHub user to AlexHongHMA
- Removed example repositories

### 2. Page Files

#### `_pages/about.md`
**Changes:**
- Updated subtitle to reflect your professional identity
- Updated profile address to MTC, KMUTT, Bangkok
- Disabled latest_posts (set to false)
- Completely rewrote biography section with:
  - Professional summary highlighting AI/ML/Robotics expertise
  - Current position at MTC
  - Research interests
  - Recent achievements (Best Paper Award, Runner-Up, Hall of Fame)
  - Research focus areas

#### `_pages/blog.md`
**Changes:**
- Set `nav: false` to remove from navigation menu

#### `_pages/projects.md`
**Changes:**
- Set `nav: false` to remove from navigation menu

#### `_pages/repositories.md`
**Changes:**
- Set `nav: false` to remove from navigation menu

#### `_pages/teaching.md`
**Changes:**
- Set `nav: false` to remove from navigation menu

#### `_pages/profiles.md`
**Changes:**
- Set `nav: false` to remove from navigation menu (people page)

#### `_pages/dropdown.md`
**Changes:**
- Set `nav: false` to disable dropdown menu

#### `_pages/cv.md`
**Changes:**
- Updated nav_order to 3
- Updated cv_pdf path to your resume
- Updated description to reflect your CV content

### 3. Publications

#### `_bibliography/papers.bib`
**Changes:**
- Replaced all example papers with your actual publications:
  1. **ICoICT 2025 (IEEE Xplore)** - "Optimized 3D-CNN for Real-Time Infrared Natural Gas Leak Classification"
     - DOI: 10.1109/ICoICT66265.2025.11192973
     - Co-authored with Sarawan Wongsa
     - Best Paper Award winner
     - 99.75% accuracy
     - Set as selected publication
  
  2. **ICA-SP Con 2025** - "Natural Gas Methane Leak Detection Using an Infrared Camera"
     - Best Presentation Award winner
     - Set as selected publication

### 4. News/Announcements

#### Created/Updated News Items:
1. **announcement_1.md** - Started as Full Time ML Researcher at MTC (Sept 2025)
2. **announcement_2.md** - KMUTT Hall of Fame recognition (July 31, 2025)
3. **announcement_3.md** - Best Paper Award at ICoICT 2025 (July 30, 2025)
4. **announcement_4.md** - First Runner-Up Smart Infrastructure Competition (July 30, 2025)
5. **announcement_5.md** - Best Presentation Award at ICA-SP Con 2025 (April 2025)
6. **announcement_6.md** - Started 3D-CNN gas leak research (June 2024)

---

## Navigation Structure (After Changes)

**Visible Pages in Navigation:**
1. About (home page)
2. Publications
3. CV

**Hidden Pages (not in navigation):**
- Blog
- Projects
- Repositories
- Teaching
- People/Profiles
- Books
- Dropdown menu

---

## Action Items for You

### Required Actions:

1. **Add Your Resume PDF**
   - Place your resume PDF file at: `/home/ronin/AlexHongHMA.github.io/assets/pdf/HtetMyatAung_resume.pdf`
   - This is referenced in multiple places (CV page, socials)

2. **Update Profile Picture**
   - Replace `/home/ronin/AlexHongHMA.github.io/assets/img/prof_pic.jpg` with your professional photo
   - The file already exists but contains example content

3. **Verify Google Scholar ID (Optional)**
   - If you have a Google Scholar profile, add the ID to `_data/socials.yml`
   - Currently commented out: `scholar_userid:`

### Optional Enhancements:

1. **Add Research Project Images**
   - Add preview images for your publications in `assets/img/`
   - Reference them in `_bibliography/papers.bib` using `preview={filename.jpg}`

2. **Add Publication PDFs**
   - Store PDF copies of your papers in `assets/pdf/`
   - Reference them in `_bibliography/papers.bib` using `pdf={filename.pdf}`

3. **Update Favicon**
   - Currently set to ⚛️ emoji in `_config.yml`
   - You can change to a custom image or different emoji

4. **Additional Social Links**
   - Add more social profiles to `_data/socials.yml` if needed
   - Supported: Twitter, Facebook, Instagram, YouTube, etc.

---

## Key Information Highlighted

### Your Expertise Areas:
- Machine Learning & Deep Learning (99.75% accuracy in gas leak detection)
- Computer Vision & Image Processing (3D CNN, SLAM algorithms)
- Robotics (ROS2, autonomous systems, robot control)
- Industrial AI Applications (non-destructive testing, smart infrastructure)

### Major Achievements:
- Best Paper Award - ICoICT 2025 (IEEE)
- Best Presentation Award - ICA-SP Con 2025
- First Runner-Up - Smart Infrastructure Competition
- KMUTT Hall of Fame
- INC Department Outstanding Student Scholarships (2023, 2024)
- Judges Award - First Global Challenge 2019

### Current Position:
- Full Time Machine Learning Researcher at MTC, KMUTT
- Collaborating with Prof. Cherdpong Jomdecha
- Focus: Non-destructive detection technology

---

## Testing the Website

To test your website locally:

```bash
cd /home/ronin/AlexHongHMA.github.io
bundle install
bundle exec jekyll serve
```

Then open your browser to `http://localhost:4000`

---

## Git Deployment

When ready to deploy:

```bash
git add .
git commit -m "Update portfolio with personal information and achievements"
git push origin main
```

Your site will be live at: https://AlexHongHMA.github.io

---

## Files That Were NOT Modified

The following directories/files remain unchanged:
- `_layouts/` - Layout templates
- `_includes/` - Component templates  
- `_sass/` - Styling files
- `_plugins/` - Jekyll plugins
- `assets/js/` - JavaScript files
- Individual project files in `_projects/` (not deleted, just hidden from navigation)
- Individual teaching files in `_teachings/` (not deleted, just hidden from navigation)
- Blog posts in `_posts/` (not deleted, just hidden from navigation)

---

## Important Notes

1. **No files were deleted** - Only navigation visibility was changed
2. **All modifications preserve the theme structure** - Easy to revert if needed
3. **Publications are properly formatted** - Will display with proper IEEE styling
4. **CV is comprehensive** - Includes all experience, awards, and skills
5. **News announcements are chronologically ordered** - Most recent first

---

## Contact Information Displayed

- **Email:** htetmyataung.ctla@gmail.com
- **GitHub:** https://github.com/AlexHongHMA
- **LinkedIn:** https://www.linkedin.com/in/htet-myat-aung-11101/
- **ORCID:** https://orcid.org/0009-0004-7913-928X
- **Phone:** +959250170447 (in CV)
- **Location:** Bangkok, Thailand / Yangon, Myanmar

---

## Summary

Your portfolio now presents you as:
> "Highly motivated Automation Engineering graduate with extensive experience in artificial intelligence, machine learning, and robotics research. Award-winning researcher with publications in prestigious IEEE conferences and proven track record of academic excellence."

The website focuses on your:
- Research publications (IEEE papers)
- Professional achievements and awards
- Technical expertise in AI/ML/Robotics
- Academic excellence (3.66/4.00 GPAX)
- Leadership experience (L.O.R.A, FIRST GLOBAL CHALLENGE)

All unnecessary sections (blog, projects, repositories, teaching, people) have been hidden from navigation while preserving the files for potential future use.
