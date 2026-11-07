# Responsive implementation

- Phone layouts stack the two hero actions at equal full width; larger phones and tablets use equal columns.
- Touch/tablet composition continues through 1199px. Desktop uses the existing bounded content system from 1200px.
- Tablet grids use two columns for programmes, services and capability content, with three platform previews only when sufficient width is available.
- Course, testimonial and insight rails keep native horizontal scrolling, with visible previous/next controls and keyboard alternatives. Vertical swipes over rails continue to scroll the page.
- Header menus fit the dynamic viewport and close on Escape or navigation. Mobile header overlays the hero and gains a solid background below it.
- Inputs remain at least 16px; mobile controls have 44px minimum touch areas. Image loading below the opening section is deferred where practical.
- The short desktop hero may extend beyond a very short viewport rather than reduce its content to unreadable sizes.
- Reduced motion disables decorative continuous loops. Desktop sticky scroll scenes are disabled below 1200px.

## Validation

Chrome emulated viewports: 320, 375, 390, 430, 600, 768, 834, 1024, 1199, 1200, 1280, 1440, 1920 and 2560px wide, plus 844x390 landscape. Includes width, equal hero buttons, touch areas, navigation, platform tabs, assessment filtering, image and runtime-error checks. Touch gestures are synthesized through Chrome DevTools Protocol; these are not physical-device or Safari validations.

Reference inspection included 101gen, Shelf and Resonance at phone/tablet widths, plus existing source captures. Moniepoint blocked automated access; Ovata and Sleep Well timed out during this pass.
