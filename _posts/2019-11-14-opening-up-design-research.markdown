---
layout: post
title: "Opening Up Government Design Research"
description: "How Talent Cloud is making an effort to increase transparency around our design decision making and providing public access to our design methodologies."
date: 2019-11-14
time: "6"
socialImage: "/img/posts/social_open_gov_research.jpg"
type: "post"
---
One of [Talent Cloud](https://talent.canada.ca/)'s key tenets is transparency.

Our project is considered “open by default” and this is primarily showcased through our use of a public code repository on the Github platform. All of our bugs, issues, and concerns about the platform and its development are centralized there. Recently however, with the expansion of our design team, we’ve sought out a way to translate this open source mindset to our design practice.

## Organizing Chaos

Design work is a bit of an unruly beast. Designers have preferred tools, methods, documentation, etc. and what they have access to will impact both the volume and quality of their work. We didn’t want to limit our team to a strict set of tools, which might result in a subpar experience for both them and our end users, but documenting data, discussion, prototypes, updates, and the like isn’t an easy task when you have multiple designers working on multiple features using different software or methods. What we needed was a simple way of documenting the outcomes of our design work without dictating the use of particular design tools. Beyond that, we had to meet a few other general requirements: we needed the documentation to be consistent between features/design work, we needed it to be easily translated to the development team come time to build, and we needed it to be publicly available so that we’re being as transparent as possible about how the platform evolves over time.

## Moving Towards Open Source Design Research

After some discussion, we decided to start by integrating our documentation into Github’s issue tracker. Using Github’s suite of tools, it was easy  to create a historical record of a feature’s evolution over time, which we were doing manually up to that point. We leveraged the issue template (explained below), discussion threads, linking related features, assigning issues to team members, etc. to curate a public facing record of our work.

In order to maintain consistency, our initial issue template followed a particular structure:

**Status**<br>
The status section allows us to highlight where the feature is in the design process. We add content to this section once a feature is ready for development to highlight certain elements or interactions that shouldn’t be forgotten in checklist format.

**Design Goal**<br>
The design goal section is where we describe the initial goal of the feature or request. This allows us to have a record of where the product started so that we can observe its evolution over time, as well as refer back to this primary goal when clarity is required.

**Research**<br>
In the research section, we record notes from any discussion, research, and testing we perform, as well as any potential impacts to the feature. The design team is expected to keep this section up-to-date as they progress through their work.

**Important Notes**<br>
The important notes section is useful for providing extra context, particularly for copywriters or developers.

**Wireframes/Prototypes**<br>
The wireframe/prototype section allows us to track screenshots or links to prototype versions, as well as document changes that have been made and why they were made per version. An individual version should contain the number of the version, a list of changes that were made (and why!), and a screenshot or link to the new prototype.

**Data Story**<br>
The data story section is completed when the feature has been approved and is ready for development. This section provides an opportunity to summarize the journey to date, and explain why we’ve reached the current iteration and why we feel it’s the best way forward.

You can find a real example of this template in action here: [Issue #1533](https://github.com/GCTC-NTGC/TalentCloud/issues/1533)

We used this template for a period of time to test its effects on tracking our work. It turned out to be effective, however it was also cumbersome and felt intimidating to open a new design feature issue because the initial input is a pretty heavy lift. This meant that the quality of issues degraded over time and sometimes sections were omitted altogether. We also received feedback from the developers that these issues were often chaotic and hard to follow. Context wasn’t translating the way we hoped it would and it was hard to link research to particular decisions. As a result, we made some changes.

## Streamlining Information

With our original goals of transparency and documentation in mind, we set out to reconstruct our template to be more efficient, while also providing a clearer path from the start of the design process to the current iteration. We began by removing the “status” and “data story” sections because they lacked practical use. While the status was a useful feature in theory, it wasn’t updated frequently enough in practice to be useful while the data story was simply an extra step that required the designer to summarize the issue. We iterated, and our new template includes the following:

**Design Goal & User Groups**<br>
This section maintained its goal of summarizing the primary objective of the design work, but now includes a list of user groups (and links to their personas) to help add extra context for both the design and development team.

**Initial Research & Notes**<br>
This section now prioritizes research and notes taken prior to the issue being created. The intent here is to ensure that all previous context is captured when the issue is created.

**Design Versions**<br>
The rest of the context has been consolidated per design version in this section. This is handled by each version containing the following content:
- a version number
- a link to a prototype if one exists
- a list of changes and why they were made
- a screenshot to document the state of the design
- an area to document research, testing, and outcomes from this version that should be reflected in the next version

By keeping this information packaged together, we’re now providing a step-by-step flow of how each version has evolved into the next. Developers can skip to the bottom to find the most recent version, but also have the opportunity to read through the evolution of the feature or interface to get a better understanding of why design decisions were made.

An example of this new template can be found here: [Issue #2120](https://github.com/GCTC-NTGC/TalentCloud/issues/2120)

## The Benefits of Open Data

Moving our research documentation to Github was helpful for our internal process, but it also plays a larger role in how Talent Cloud is making an effort to be more transparent with citizens. Design work on any project can sometimes feel overwhelming or obfuscated. Our aim here to to be as honest and clear about the research we have and have not done, to ensure that our platform can be effectively challenged and discussed based on real user feedback. No design process is perfect, and by opening ours up, we hope that we’re held more accountable for our decisions.

As a result, anyone can now learn more about how our features are being developed. You can follow along by starring our project on Github, or bookmarking issues you feel particularly passionate about. If you’d like to join the discussion or volunteer for design research testing, feel free to leave a comment on the issue you’d like to chat about.

<hr>

It’s important to note that this process isn’t set in stone. As a team, we’re always looking for new methods or tools that might help us organize ourselves better or work more efficiently. Moving our design documentation to Github was a first step in our effort to make this work transparent on a public level, while providing our entire team with a centralized location where they can find information and prototypes on upcoming features.