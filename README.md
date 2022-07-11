# Floating Logos
This is a custom component to showcase up to 33 logos in a floating/lazy river.

### Adding Logo Images
To add new logo images you will need to update the `css/floating-logos.css` file with the image file url. These imges work best as square dimensions (308px x 308px).

### Adding Titles to Logo Bubbles
To add/update titles to each logo bubble you will need to update the `bubbleSpecs[]` array in the `js/floating-logos.js` javascript file.

### Perlin Noise
This component uses Perlin Noise by Stefan Gustavson (`stegu@itn.liu.se`) to generate the floating/organic feel.