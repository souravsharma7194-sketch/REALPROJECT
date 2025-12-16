import { PropertyData } from "@/types/property";

interface Props {
  property: PropertyData;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition duration-200">
      
      {/* Image */}
      <div className="relative h-40 w-full">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold leading-tight">
          {property.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {property.location}
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="font-semibold text-green-600">
            {property.price}
          </p>

          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              property.status === "sale"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {property.status.toUpperCase()}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {property.description}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
