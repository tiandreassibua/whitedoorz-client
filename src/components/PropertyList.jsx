import PropertyItem from "./PropertyItem";

const PropertyList = ({ properties, category }) => {
  const filteredProperties = properties.filter(
    (property) => property.category === category
  );

  return (
    <div className="grid grid-cols-1  md:grid-cols-4 gap-5 justify-between">
      {filteredProperties.map((property) => {
        return <PropertyItem property={property} key={property.id} />;
      })}
    </div>
  );
};

export default PropertyList;
