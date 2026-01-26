# Deployment Checklist ✓

## Pre-Deployment Tasks

### Critical (Must Do)
- [ ] Add your resume PDF to `/assets/pdf/HtetMyatAung_resume.pdf`
- [ ] Replace profile picture at `/assets/img/prof_pic.jpg` with your photo
- [ ] Verify ORCID image is at `/assets/img/orcid-id.png`
- [ ] Review the About page content for accuracy
- [ ] Verify email address is correct (htetmyataung.ctla@gmail.com)
- [ ] Verify GitHub username (AlexHongHMA)
- [ ] Verify LinkedIn username (htet-myat-aung-11101)
- [ ] Verify ORCID ID (0009-0004-7913-928X)

### Recommended (Should Do)
- [ ] Test website locally using `bundle exec jekyll serve`
- [ ] Review CV content in browser
- [ ] Check all links work correctly
- [ ] Verify publications display properly
- [ ] Check news/announcements are in correct order

### Optional (Nice to Have)
- [ ] Add Google Scholar ID (if available)
- [ ] Add publication PDF files
- [ ] Add research project images/previews
- [ ] Customize favicon emoji (currently ⚛️)
- [ ] Add more news items if needed

---

## What Has Been Changed

### ✅ Configuration
- [x] Personal information updated
- [x] Site description customized
- [x] Scholar info changed to your name
- [x] Blog disabled
- [x] Projects collection disabled
- [x] Teachings collection disabled

### ✅ Content Pages
- [x] About page - Complete professional summary
- [x] CV page - Comprehensive curriculum vitae
- [x] Publications page - IEEE papers added
- [x] Blog - Hidden from navigation
- [x] Projects - Hidden from navigation
- [x] Repositories - Hidden from navigation
- [x] Teaching - Hidden from navigation
- [x] People/Profiles - Hidden from navigation

### ✅ Data Files
- [x] CV data - Complete work history, education, awards
- [x] Social links - GitHub, LinkedIn, email
- [x] Coauthors - Dr. Wongsa, Prof. Jomdecha
- [x] Publications - 2 papers with full details
- [x] News - 6 achievement announcements

### ✅ Navigation
- [x] About (home)
- [x] Publications
- [x] CV
- [x] Removed: Blog, Projects, Repositories, Teaching, People

---

## File Structure

```
AlexHongHMA.github.io/
├── _config.yml                     ✅ Updated
├── _data/
│   ├── cv.yml                      ✅ Updated (your complete CV)
│   ├── socials.yml                 ✅ Updated (your contacts)
│   ├── coauthors.yml               ✅ Updated (your collaborators)
│   └── repositories.yml            ✅ Updated (your GitHub)
├── _pages/
│   ├── about.md                    ✅ Updated (professional summary)
│   ├── cv.md                       ✅ Updated (CV settings)
│   ├── publications.md             ⚠️ Unchanged (uses _bibliography)
│   ├── blog.md                     ✅ Hidden (nav: false)
│   ├── projects.md                 ✅ Hidden (nav: false)
│   ├── repositories.md             ✅ Hidden (nav: false)
│   ├── teaching.md                 ✅ Hidden (nav: false)
│   ├── profiles.md                 ✅ Hidden (nav: false)
│   └── dropdown.md                 ✅ Hidden (nav: false)
├── _bibliography/
│   └── papers.bib                  ✅ Updated (your 2 papers)
├── _news/
│   ├── announcement_1.md           ✅ Updated (MTC position)
│   ├── announcement_2.md           ✅ Updated (Hall of Fame)
│   ├── announcement_3.md           ✅ Updated (Best Paper)
│   ├── announcement_4.md           ✅ Created (Runner-Up)
│   ├── announcement_5.md           ✅ Created (Best Presentation)
│   └── announcement_6.md           ✅ Created (Research start)
├── assets/
│   ├── pdf/
│   │   └── HtetMyatAung_resume... ⚠️ NEEDS TO BE ADDED
│   └── img/
│       └── prof_pic.jpg            ⚠️ NEEDS TO BE REPLACED
└── Documentation:
    ├── PORTFOLIO_UPDATES_SUMMARY.md    ✅ Created (detailed changes)
    ├── QUICK_START_GUIDE.md            ✅ Created (quick reference)
    └── DEPLOYMENT_CHECKLIST.md         ✅ This file
```

---

## Deployment Commands

### Step 1: Add Missing Files
```bash
# Navigate to project directory
cd /home/ronin/AlexHongHMA.github.io

# Copy your resume (adjust source path as needed)
cp ~/path/to/HtetMyatAung_resume.pdf assets/pdf/

# Copy your profile picture (adjust source path as needed)
cp ~/path/to/your-photo.jpg assets/img/prof_pic.jpg

# Verify ORCID image is in place
ls -la assets/img/orcid-id.png
```

### Step 2: Test Locally (Recommended)
```bash
# Install dependencies (first time only)
bundle install

# Start local server
bundle exec jekyll serve

# Open browser to: http://localhost:4000
# Check everything looks correct
```

### Step 3: Deploy to GitHub
```bash
# Stage all changes
git add .

# Commit with message
git commit -m "Update portfolio with professional information and achievements"

# Push to GitHub
git push origin main
```

### Step 4: Wait and Verify
- GitHub Pages builds in 1-5 minutes
- Visit: https://AlexHongHMA.github.io
- Verify all pages load correctly

---

## Testing Checklist

### Homepage (About)
- [ ] Your name appears correctly
- [ ] Profile picture displays
- [ ] Professional summary is visible
- [ ] Recent achievements section shows
- [ ] News announcements appear (latest 5)
- [ ] Social icons work at bottom

### Publications Page
- [ ] Both papers are listed
- [ ] Paper details are correct
- [ ] DOI link works for IEEE paper
- [ ] "Best Paper Award" badge shows
- [ ] Papers are marked as "selected"

### CV Page
- [ ] Full CV displays properly
- [ ] All sections are visible:
  - [ ] Education
  - [ ] Experience
  - [ ] Research
  - [ ] Leadership
  - [ ] Awards
  - [ ] Publications
  - [ ] Skills
  - [ ] Languages
  - [ ] Interests
- [ ] PDF download button works
- [ ] Timeline displays correctly

### Navigation
- [ ] "About" link works
- [ ] "Publications" link works
- [ ] "CV" link works
- [ ] No blog, projects, repositories in menu
- [ ] Social links in footer work

---

## Common Issues and Solutions

### Issue: Profile picture doesn't show
**Solution:** 
- Ensure file is named exactly `prof_pic.jpg` (lowercase)
- File should be in `/assets/img/` directory
- Try clearing browser cache

### Issue: Resume PDF link doesn't work
**Solution:**
- Check filename matches exactly: `HtetMyatAung_resume.pdf`
- Verify it's in `/assets/pdf/` directory
- Wait for GitHub Pages to rebuild (1-5 minutes)

### Issue: Publications don't appear
**Solution:**
- Check `_bibliography/papers.bib` has correct syntax
- Ensure frontmatter has `---` at top
- Run `bundle exec jekyll serve` locally to see errors

### Issue: Changes don't appear on live site
**Solution:**
- Wait 2-5 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for build status

---

## Post-Deployment Tasks

### Immediate
- [ ] Visit https://AlexHongHMA.github.io
- [ ] Test all navigation links
- [ ] Verify content accuracy
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### Within a Week
- [ ] Share portfolio link on LinkedIn
- [ ] Add portfolio link to GitHub profile
- [ ] Update resume with portfolio URL
- [ ] Add portfolio to email signature

### Ongoing Maintenance
- [ ] Add new publications as they're published
- [ ] Update news with new achievements
- [ ] Keep CV data current
- [ ] Add new projects/research as needed

---

## Your Portfolio Highlights

**🎓 Education:**
- B.Eng. in Automation Engineering (KMUTT) - 3.66/4.00 GPAX

**💼 Current Position:**
- Full Time ML Researcher at MTC, KMUTT

**🏆 Key Achievements:**
- Best Paper Award (IEEE ICoICT 2025)
- Best Presentation Award (ICA-SP Con 2025)
- First Runner-Up (Smart Infrastructure Competition)
- KMUTT Hall of Fame
- 99.75% accuracy in gas leak detection

**📝 Publications:**
1. Optimized 3D-CNN for Real-Time Infrared Natural Gas Leak Classification (IEEE, 2025)
2. Natural Gas Methane Leak Detection Using an Infrared Camera (ICA-SP, 2025)

**🔬 Research Focus:**
- Machine Learning & Deep Learning
- Computer Vision & Image Processing
- Robotics & Autonomous Systems
- Non-Destructive Testing Applications

---

## Support Resources

- **Detailed Changes:** See `PORTFOLIO_UPDATES_SUMMARY.md`
- **Quick Start:** See `QUICK_START_GUIDE.md`
- **Theme Docs:** See `README.md`
- **Jekyll Docs:** https://jekyllrb.com/docs/
- **al-folio Theme:** https://github.com/alshedivat/al-folio

---

## Final Notes

✅ **What's Working:**
- Complete professional portfolio structure
- Your publications properly formatted
- CV with all experience and achievements
- News/announcements with recent successes
- Clean navigation focused on research

⚠️ **What's Needed:**
- Add your resume PDF file
- Add your profile picture
- Optional: Add Google Scholar ID

🎯 **End Goal:**
A professional academic portfolio showcasing your AI/ML/Robotics expertise, research publications, and achievements to potential employers, collaborators, and academic institutions.

---

**Ready to deploy? Check off the critical items above and run the deployment commands!** 🚀
