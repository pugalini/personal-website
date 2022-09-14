import clsx from "clsx";

export interface Props {
  className?: string;
}

const Biography = ({ className }: Props) => {
  return (
    <div className={clsx(className,  "flex justify-center ")}>
      <div className={clsx(className, "p-5 ")}>
        <div className={clsx(className, "max-w-md ")}>
          <div className={clsx(className, "border b-10 rounded p-5 ")}>
            <span >
              <p className="pb-8">
              I am Pugalini Mohanaraj , studying in UKI coding school.I am
              Engineering student and also I am studying progrmming languages
              both frontend and backend here.I am instrested in CSE field. So I
              will apply for a best CS company to continue my career after
              finishing my heigher studies in university.You can contact me with
              pugalini.2002@gmail.com.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
