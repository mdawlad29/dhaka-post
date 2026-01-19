export const CardHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold capitalize mb-2">{title}</h3>
      <div className="relative bg-gray-200 h-0.5 mb-4">
        <div className="absolute top-0 left-0 bg-black h-0.5 w-1/4" />
      </div>
    </div>
  );
};
