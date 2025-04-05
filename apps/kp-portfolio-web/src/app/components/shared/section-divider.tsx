import { KPSeparator, Reveal } from '@kp-react-lib/kp-react-common';

export function SectionDivider() {
  // const [size, setSize] = useState(3);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) { // 768px corresponds to the 'md' breakpoint in Tailwind
  //       setSize(45); // New size for md and larger
  //     }
  //     else if(window.innerWidth <= 305){
  //       setSize(10)
  //     }
  //     else {
  //       setSize(20); // Default size for smaller screens
  //     }
  //   };
  //
  //   // Set initial size based on the current screen width
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //
  //   // Clean up event listener
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  return (
    <Reveal hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }}><KPSeparator gradient={true} className='mx-auto w-[90%]'/></Reveal>
    // <KPArtDivider code={5} size={size} className={"text-xs lg:text-lg 2xl:text-xl font-bold text-center mb-4 mt-4 select-none text-foreground"}/>
  );
}

export default SectionDivider;
