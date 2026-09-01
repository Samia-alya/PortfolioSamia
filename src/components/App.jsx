/*import ScrollAnimation from "./components/ScrollAnimation";*/

var splitText = new SplitText('h1', { type: 'chars' });

var tl = gsap.timeline();

tl.from(splitText.chars, { duration: 0.5, opacity: 0, stagger: 0.125, ease: 'power1. In' }).to(
  splitText.chars,
  { duration: 0.25, opacity: 0, stagger: 0.125, ease: 'power3. inOut' },
  '+=3',
);

export default App;
