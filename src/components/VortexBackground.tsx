import { Vortex } from "./Vortex";

export const VortexBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <Vortex
        backgroundColor="black"
        className="w-full h-full"
        particleCount={800}
        baseHue={0}
        rangeHue={60}       
        baseSpeed={0.25}
        rangeSpeed={1.3}
        baseRadius={1.5}
        rangeRadius={1.7}
        containerClassName="opacity-50"

      />
    </div>
  );
}; 