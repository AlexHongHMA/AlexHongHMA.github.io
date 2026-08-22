---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 3
description: My curriculum vitae, viewable here and available to download.
---

{% assign cv_file = "/assets/pdf/HtetMyatAung_resume_update.pdf" | relative_url %}

<p class="cv-intro">
  A downloadable PDF of my full curriculum vitae is available below, covering my
  research, publications, experience and education.
</p>

<p class="cv-actions">
  <a class="btn btn-sm z-depth-0" href="{{ cv_file }}" download>Download PDF</a>
  <a class="btn btn-sm z-depth-0" href="{{ cv_file }}" target="_blank" rel="noopener noreferrer">Open in new tab</a>
</p>

<object class="cv-viewer" data="{{ cv_file }}" type="application/pdf" title="Curriculum vitae of Htet Myat Aung" aria-label="Curriculum vitae of Htet Myat Aung, embedded PDF viewer">
  <div class="cv-fallback">
    <p>Your browser cannot display the PDF inline.</p>
    <p>
      <a class="btn btn-sm z-depth-0" href="{{ cv_file }}" download>Download PDF</a>
      <a class="btn btn-sm z-depth-0" href="{{ cv_file }}" target="_blank" rel="noopener noreferrer">Open in new tab</a>
    </p>
  </div>
</object>

<div class="cv-fallback cv-fallback-mobile">
  <p>The embedded viewer is not available on small screens.</p>
  <p>
    <a class="btn btn-sm z-depth-0" href="{{ cv_file }}" download>Download PDF</a>
    <a class="btn btn-sm z-depth-0" href="{{ cv_file }}" target="_blank" rel="noopener noreferrer">Open in new tab</a>
  </p>
</div>
