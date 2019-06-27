// Floating Logos
const SCROLL_SPEED = .8;
const NOISE_SPEED = 0.006;
const NOISE_AMOUNT = 8;
const CANVAS_WIDTH = 2800;

const bubblesEl = document.querySelector('.floating-logos');
const bubbleSpecs = [
  { s: .8, x: 1134, y: 45, n: 'Ol Skorfy Tombs' },
  { s: .8, x: 1620, y: 271, n: 'Name02' },
  { s: .8, x: 1761, y: 372, n: 'Name03' },
  { s: .8, x: 2499, y: 79, n: 'Name04'  },
  { s: .8, x: 2704, y: 334, n: 'Name05' },
  { s: .8, x: 2271, y: 356, n: 'Name06' },
  { s: .8, x: 795,  y: 226, n: 'Name07' },
  { s: .8, x: 276,  y: 256, n: 'Name08' },
  { s: .8, x: 1210, y: 365, n: 'Name09' },
  { s: .8, x: 444,  y: 193, n: 'Name10' },
  { s: .8, x: 2545, y: 387, n: 'Name11' },
  { s: .6, x: 1303, y: 193, n: 'Name12' },
  { s: .6, x: 907,  y: 88, n: 'Name13' },
  { s: .6, x: 633,  y: 320, n: 'Name14' },
  { s: .6, x: 323,  y: 60, n: 'Name15' },
  { s: 1, x: 129,  y: 357, n: 'Name16' },
  { s: 1, x: 1440, y: 342, n: 'Name17' },
  { s: .6, x: 1929, y: 293, n: 'Name18' },
  { s: .8, x: 2135, y: 198, n: 'Name19' },
  { s: 1, x: 2276, y: 82, n: 'Name20' },
  { s: 1, x: 2654, y: 182, n: 'Name21' },
  { s: 1, x: 2783, y: 60, n: 'Name22' },
  { s: 1, x: 1519, y: 118, n: 'Name23' },
  { s: 1, x: 1071, y: 233, n: 'Name24' },
  { s: 1, x: 1773, y: 148, n: 'Name25' },
  { s: 1, x: 2098, y: 385, n: 'Name26' },
  { s: 1, x: 2423, y: 244, n: 'Name27' },
  { s: 1, x: 901,  y: 385, n: 'mozburt tombs' },
  { s: 1, x: 624,  y: 111, n: 'Molly Whitebooty' },
  { s: 1, x: 75,   y: 103, n: 'Name30' },
  { s: 1, x: 413,  y: 367, n: 'Name31' },
  { s: .6, x: 2895, y: 271, n: 'Name32' },
  { s: 1, x: 1990, y: 75, n: 'Name33'  }
];

class Bubbles {
  constructor(specs) {
    this.bubbles = [];

    specs.forEach((spec, index) => {
      this.bubbles.push(new Bubble(index, spec));
    })

    requestAnimationFrame(this.update.bind(this));
  }

  update() {
    this.bubbles.forEach(bubble => bubble.update());
    this.raf = requestAnimationFrame(this.update.bind(this))
  }
}


class Bubble {
  constructor(index, {x, y, s = 1, n}) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.scale = s;
    this.name = n;

    this.noiseSeedX = Math.floor(Math.random() * 64000);
    this.noiseSeedY = Math.floor(Math.random() * 64000);

    this.el = document.createElement("div");
    this.el.className = `bubble logo${this.index + 1}`;
    var titleSpan = document.createElement("span");
    var spanText = document.createTextNode(this.name);
    titleSpan.appendChild(spanText);
    bubblesEl.appendChild(this.el).appendChild(titleSpan);
  }

  update() {
    this.noiseSeedX += NOISE_SPEED;
    this.noiseSeedY += NOISE_SPEED;
    let randomX = noise.simplex2(this.noiseSeedX, 0);
    let randomY = noise.simplex2(this.noiseSeedY, 0);

    this.x -= SCROLL_SPEED;
    this.xWithNoise = this.x + (randomX * NOISE_AMOUNT);
    this.yWithNoise = this.y + (randomY * NOISE_AMOUNT)

    if (this.x <  -200) {
      this.x = CANVAS_WIDTH;
    }

    this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
  }
}

// For perlin noise
noise.seed(Math.floor(Math.random() * 64000));

const bubbles = new Bubbles(bubbleSpecs);
