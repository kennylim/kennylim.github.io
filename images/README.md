# Photo Organization

This directory contains photos organized by category for the photojournal section.

## Directory Structure

```
images/
├── conferences/    # Conference photos, speaking engagements, networking events
├── travel/         # Work travel, remote work locations, office photos
├── community/      # Volunteer work, mentorship, community events
├── projects/       # Project work, team collaboration, technical achievements
└── README.md       # This file
```

## Adding Photos

1. **Choose the appropriate category folder** based on the photo content
2. **Upload your image** to the corresponding directory (JPG, PNG formats recommended)
3. **Update the photojournal section** in `index.html` with the new photo:

```html
<div class="photo-item">
    <img src="images/category/your-photo.jpg" alt="Photo description" class="photo-img">
    <p>Your photo caption here...</p>
</div>
```

## Photo Guidelines

- **Recommended size**: 800x600 pixels or similar aspect ratio
- **File format**: JPG or PNG
- **File naming**: Use descriptive names (e.g., `data-conference-2025.jpg`)
- **Quality**: Optimize for web (aim for files under 500KB)

## Categories Explained

- **Conferences**: Professional events, speaking engagements, networking
- **Travel**: Work-related travel, remote work setups, office environments  
- **Community**: Volunteering, mentorship, community service activities
- **Projects**: Technical work, team collaborations, project milestones
