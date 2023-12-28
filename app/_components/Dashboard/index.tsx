export const Dashboard = () => {
  return (
    <div
      style={{
        perspective: "500px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      className="z-20 absolute bottom-6"
    >
      <div
        className="bg-green-900/20 text-green-100 border border-green-100 w-[520px] h-[210px]"
        style={{ transform: "rotateX(26deg)" }}
      >
        Dashboard
      </div>
    </div>
  );
};
