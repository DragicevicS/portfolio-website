import { MrMiyagi } from "@uiball/loaders";

type LoadProps = {
  theme: string;
};

const Loading = ({ theme }: LoadProps) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <MrMiyagi
        size={35}
        lineWeight={3.5}
        speed={1}
        color={theme === "dark" ? "#009CF0" : "#0073AD"}
      />
    </div>
  );
};

export default Loading;
