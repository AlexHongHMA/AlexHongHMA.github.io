# Quick Start Guide - Portfolio Setup

## Immediate Next Steps

### 1. Add Your Resume PDF
```bash
# Copy your resume to the correct location
cp HtetMyatAung_resume.pdf /home/ronin/AlexHongHMA.github.io/assets/pdf/
```

### 2. Update Your Profile Picture
```bash
# Replace the example profile picture with your photo
# Make sure it's named prof_pic.jpg
cp your-photo.jpg /home/ronin/AlexHongHMA.github.io/assets/img/prof_pic.jpg
```

### 3. Test Locally (Optional but Recommended)
```bash
cd /home/ronin/AlexHongHMA.github.io
bundle install
bundle exec jekyll serve --watch
# Open browser to http://localhost:4000
```

### 4. Deploy to GitHub Pages
```bash
cd /home/ronin/AlexHongHMA.github.io
git add .
git commit -m "Update portfolio with my professional information"
git push origin main
```

Your site will be live at: **https://AlexHongHMA.github.io**

---

## What Has Been Updated

✅ Personal information (name, contact, location)  
✅ Professional summary and biography  
✅ CV with all your experience and achievements  
✅ Publications (2 papers from IEEE and ICA-SP)  
✅ News/announcements (6 recent achievements)  
✅ Social links (GitHub, LinkedIn, email)  
✅ Navigation (removed blog, projects, repositories, teaching, people)  

---

## Navigation Structure

**Your website now has these main pages:**
- **About** (Home) - Professional summary and recent achievements
- **Publications** - Your IEEE papers and research
- **CV** - Comprehensive curriculum vitae

**Hidden pages** (can be re-enabled anytime):
- Blog, Projects, Repositories, Teaching, People

---

## Key Files Modified

1. `_config.yml` - Site configuration
2. `_pages/about.md` - Home page content
3. `_data/cv.yml` - Your complete CV
4. `_bibliography/papers.bib` - Your publications
5. `_data/socials.yml` - Contact information
6. `_news/*.md` - Achievement announcements

---

## Troubleshooting

### If images don't show:
- Check that `prof_pic.jpg` exists in `/assets/img/`
- Make sure the filename exactly matches (case-sensitive)

### If CV PDF link doesn't work:
- Ensure `HtetMyatAung_resume_New_Final.pdf` is in `/assets/pdf/`
- Check the filename matches exactly in `_data/socials.yml`

### If publications don't appear:
- The site needs to rebuild (takes 1-2 minutes on GitHub)
- Test locally first with `bundle exec jekyll serve`

---

## Optional Enhancements

### Add Google Scholar ID
Edit `_data/socials.yml` and uncomment:
```yaml
scholar_userid: your_google_scholar_id
```

### Add Publication PDFs
1. Add PDF files to `/assets/pdf/`
2. In `_bibliography/papers.bib`, add to each entry:
```bibtex
pdf={your_paper.pdf},
```

### Add Research Images
1. Add images to `/assets/img/`
2. In `_bibliography/papers.bib`, add to each entry:
```bibtex
preview={image.jpg},
```

---

## Support

For detailed information, see: `PORTFOLIO_UPDATES_SUMMARY.md`

For theme documentation: `README.md`

---

## Your Professional Profile Summary

**Name:** Htet Myat Aung (Alexander E. Hong)  
**Role:** Machine Learning Researcher & Automation Engineer  
**Institution:** Maintenance Technology Center (MTC), KMUTT  
**Specialization:** AI, Machine Learning, Computer Vision, Robotics  

**Key Achievements:**
- 🏆 Best Paper Award - IEEE ICoICT 2025
- 🏆 Best Presentation Award - ICA-SP Con 2025  
- 🥈 First Runner-Up - Smart Infrastructure Competition
- ⭐ KMUTT Hall of Fame Recognition
- 📊 99.75% accuracy in gas leak detection research

**Contact:**
- 📧 htetmyataung.ctla@gmail.com
- 🔗 https://github.com/AlexHongHMA
- 💼 https://linkedin.com/in/htet-myat-aung-11101
- 🆔 https://orcid.org/0009-0004-7913-928X

---

Good luck with your portfolio! 🚀
