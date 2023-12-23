import axios from "axios";
//import qs from "qs";

let getFilters = (filters) => {
  let filterObject = {};
  let sortObject = {};

  if (filters.city != "") {
    filterObject.city = { $eqi: filters.city };
  }
  sortObject.cost = filters.sort;
  filterObject.cost = { $lte: filters.price.max, $gte: filters.price.min };

  return {
    filters: filterObject,
    sort: sortObject,
  };
};

export async function propertyList(filters) {
  console.log("Filters:---", filters);
  let retunedParams = getFilters(filters);
  console.log(retunedParams);

  try {
    const response = await axios.get(
      `http://localhost:1337/api/properties?populate=*`,
      {
        params: {
          filters: retunedParams.filters,
          sort: retunedParams.sort,
        },
      }
    );
    console.log("Property.js Response-->", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
