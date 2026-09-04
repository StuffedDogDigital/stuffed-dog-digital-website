STUFFED DOG DIGITAL: ELEMENTOR / BLUEHOST EXPORT

FILES
1. stuffed-dog-digital-homepage.html
   A responsive static homepage with embedded portfolio images and live motion.

2. stuffed-dog-digital-elementor.json
   Elementor page template using the current container schema (version 0.4).
   Each homepage chapter is a separate top-level Elementor container.

ELEMENTOR IMPORT
1. In WordPress, open Templates > Saved Templates.
2. Choose Import Templates.
3. Upload stuffed-dog-digital-elementor.json.
4. Create or open a page with Elementor.
5. Insert the imported "Stuffed Dog Digital Homepage" template.
6. Set the page layout to Elementor Canvas or Full Width.

SCROLL SEQUENCE SETUP
1. Open the ZIP package and locate the "frames" folder.
2. In Bluehost File Manager, open public_html/wp-content/uploads.
3. Upload the complete folder so this exact path exists:
   public_html/wp-content/uploads/sdd-frames/00000.webp
4. Keep all 135 WebP files together, from 00000.webp through 00134.webp.
5. Clear the Bluehost, WordPress, and browser caches after importing.

NOTES
- The export uses Elementor HTML widgets inside native container elements to preserve the custom layout.
- Scroll reveals and the frame sequence use vanilla JavaScript, not React.
- The frame sequence preloads a limited window of images to avoid requesting all 135 files at once.
- Archivo Black and Archivo load from Google Fonts.
- Portfolio images are embedded, so no separate media upload is required.
- Booking buttons open https://calendar.app.google/fJcK1qEHuecVNYf5A
- Contact email is connect@stuffeddogdigital.com
- The Elementor JSON expects the sequence frames at /wp-content/uploads/sdd-frames/.
- If an optimization plugin delays JavaScript, exclude the imported Elementor HTML widget script from delay or deferral.
