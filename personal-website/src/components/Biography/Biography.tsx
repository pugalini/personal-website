import clsx from "clsx";

export interface Props {
  className?: string;
}

const Biography = ({ className }: Props) => {
  return (
    <div className={clsx(className, "bg-emerald-700", "flex justify-center")}>
      <div className={clsx(className, "p-4 ")}>
        <div className={clsx(className, "max-w-xl ")}>
          <div className={clsx(className, "border b-2 rounded p-4 ")}>
            <span>
              I am Pugalini Mohanaraj , studying in UKI coding school.I am
              Engineering student and also I am studying progrmming languages
              both frontend and backend here.I am instrested in CSE field. So I
              will apply for a best CS company to continue my career after
              finishing my heigher studies in university.You can contact me with
              pugalini.2002@gmail.com.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
