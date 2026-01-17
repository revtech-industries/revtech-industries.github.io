# WordPress Migration Guide - REVTECH INDUSTRIES Website

This guide will help you migrate your GitHub site (revtech-industries.github.io) to WordPress on Bluehost, creating an exact mirror of the original site.

## Prerequisites
- WordPress admin access (you have this ✅)
- FTP access or File Manager access through Bluehost cPanel (for uploading theme files)
- All media files ready (images, videos, PDFs)

## Step 1: Access WordPress Admin

1. Log into your WordPress admin panel at: `www.revtechindustries.com/wp-admin`
2. Navigate to **Appearance > Themes**

## Step 2: Upload the Custom Theme

### Option A: Via WordPress Admin (Easiest)
1. Download the entire `revtech-industries-wordpress-theme` folder
2. Zip it (make sure the zip file contains the theme folder, not the files directly)
3. In WordPress: **Appearance > Themes > Add New > Upload Theme**
4. Upload the zip file
5. Click **Activate**

### Option B: Via FTP/File Manager (Alternative)
1. Access your Bluehost File Manager or FTP
2. Navigate to: `/public_html/wp-content/themes/`
3. Upload the entire `revtech-industries-wordpress-theme` folder
4. In WordPress: **Appearance > Themes**
5. Find "REVTECH INDUSTRIES" theme and click **Activate**

## Step 3: Upload Media Files

1. Go to **Media > Add New** in WordPress
2. Upload all files from these folders:
   - `images/` folder (artemis_logo.jpg, all SVG files)
   - `videos/` folder (Artemis_Investor_Final.mp4, introduction-video.mp4)
   - `files/` folder (all PDFs: resumes, certificates, letters)
   - `downloads/` folder (APK and ZIP files if you want to host them)

**Important:** After uploading, note the URLs of key files:
- Artemis logo image URL
- Video file URLs
- Any other media you'll reference

## Step 4: Configure Theme Settings

1. Go to **Appearance > Customize** in WordPress
2. You'll see a "REVTECH Settings" section
3. Configure:
   - Company email: `revtech.industries@outlook.com`
   - LinkedIn URL: `https://www.linkedin.com/in/james-warnecke-17b062198/`
   - Video file URLs (uploaded in Step 3)
   - Logo image URL (uploaded in Step 3)

## Step 5: Set Homepage

1. Go to **Settings > Reading**
2. Set "Your homepage displays" to: **A static page**
3. Select the "Home" page (will be created by theme)
4. Save Changes

## Step 6: Create Required Pages

The theme will automatically create these pages, but verify they exist:
- Home (front page)
- About
- Projects
- Portfolio
- Downloads
- Contact

If they don't exist, create them manually with the exact slugs:
- `/home` or `/` (Homepage)
- `/about`
- `/projects`
- `/portfolio`
- `/downloads`
- `/contact`

## Step 7: Install Required Plugins

The theme requires these plugins (all free):
1. Go to **Plugins > Add New**
2. Search and install:
   - **Contact Form 7** (for contact form functionality)
   - **Advanced Custom Fields** (for custom content areas)
   - **Yoast SEO** (optional, for SEO optimization)

## Step 8: Configure Permalinks

1. Go to **Settings > Permalinks**
2. Select **Post name** (recommended: `/sample-post/`)
3. Save Changes

## Step 9: Test the Site

1. Visit your homepage: `www.revtechindustries.com`
2. Test all sections:
   - Navigation menu
   - Video playback
   - Download links
   - Contact form
   - Mobile responsiveness

## Step 10: Update Download Links

The download links currently point to GitHub. Update them to:
- WordPress media library URLs, OR
- Keep GitHub links if you prefer (they'll continue to work)

To update:
1. Go to **Appearance > Customize > REVTECH Settings**
2. Update download link URLs to your WordPress media URLs or keep GitHub URLs

## Troubleshooting

### Theme doesn't appear in Themes list
- Check folder name is exactly: `revtech-industries-wordpress-theme`
- Ensure `style.css` is in the root of the theme folder
- Check file permissions (should be 755 for folders, 644 for files)

### Images/Videos not displaying
- Verify media files are uploaded to WordPress Media Library
- Check file URLs in theme customizer settings
- Clear browser cache and WordPress cache (if using caching plugin)

### Contact form not working
- Install and activate Contact Form 7 plugin
- Create a contact form in **Contact > Contact Forms**
- Update the form shortcode in the contact page template

### Styles not loading
- Go to **Appearance > Customize > Additional CSS**
- Check for any CSS conflicts
- Clear all caches

## Need Help?

If you encounter issues:
1. Check WordPress error logs (via cPanel or hosting dashboard)
2. Enable WordPress debug mode (add to wp-config.php):
   ```php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   ```
3. Contact Bluehost support for server-level issues

## Maintenance

- Keep WordPress, theme, and plugins updated
- Regular backups via Bluehost backup tools or UpdraftPlus plugin
- Monitor site performance and optimize images as needed
