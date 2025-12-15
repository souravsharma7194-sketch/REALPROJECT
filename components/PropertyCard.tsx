import { PropertyData } from "@/app/explore/page";

interface Props {
  property: PropertyData;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="font-semibold mt-1">{property.price}</p>
      <p className="mt-1">
        <span className="font-medium">Status:</span>{" "}
        <span className={property.status === "sale" ? "text-green-600" : "text-blue-600"}>
          {property.status.toUpperCase()}
        </span>
      </p>
      <p className="mt-2 text-gray-700 text-sm">{property.description}</p>
    </div>
  );
};

export default PropertyCard;
