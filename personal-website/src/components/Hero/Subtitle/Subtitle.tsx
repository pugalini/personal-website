import clsx from "clsx";
import Typed from "react-typed";

export interface Props {
  className?: string;
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className,'px-2')}>
      <Typed
      className="flex justify-center text-2xl font-system"
        strings={["Web developer", "Chess player", "Engineering student","Music Lover","Creative writer"]}
        loop
     typeSpeed={50}

      />
    </div>
  );
};

export default Subtitle;
