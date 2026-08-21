---
layout: post
title: "Seeing methane: notes on the 3D-CNN behind the ICoICT paper"
date: 2026-08-21 10:00:00+0800
description: How an optimised 3D-CNN reached 99.75 percent accuracy on infrared gas-leak video, and what had to be thrown away to get there.
tags: computer-vision deep-learning
categories: research
giscus_comments: false
related_posts: false
---

**Draft.** This is a placeholder outline, not a finished piece. Full version coming soon.

Methane is invisible. In the right infrared band it is not quite invisible, and
that gap is the whole problem.

Outline to fill in:

- **The setup.** Thermal camera, gas released under varying conditions, video rather than stills. Why the temporal dimension matters and why a plain 2D CNN was not enough.
- **The preprocessing that did the heavy lifting.** Gaussian Mixture Models, running average, adaptive background subtraction, and why classical methods still earned their place in front of the network.
- **Getting it small.** Input-resolution scaling and quantization cut inference time by about 60 percent while accuracy stayed above 99 percent. Worth being honest about what that number does and does not mean.
- **What I would do differently.** Mostly around the dataset.

The paper is [on IEEE Xplore](https://ieeexplore.ieee.org/document/11192973) if you want the formal version.
