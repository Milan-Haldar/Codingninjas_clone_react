function DropdownItem({ title, description, icon }) {
  return (
    <div className="flex items-start gap-4 px-5 py-4 hover:bg-orange-50 cursor-pointer transition-all duration-300">
      
      <div className="text-2xl">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>
      </div>

    </div>
  );
}

export default DropdownItem;