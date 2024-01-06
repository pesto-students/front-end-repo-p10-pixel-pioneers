import axios from "axios";
import axiosInstance from "./axiosInstance";

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
    const response = await axiosInstance.get(
      `properties?populate=*`,
      {
        params: {
          filters: retunedParams.filters,
          sort: retunedParams.sort,
        },
      }
    );
    console.log("Property.js Response-->", response);

    let properties =
      response.data.length != 0
        ? response.data.data.map((property) => {
            return {
              id: property.id,
              ...property.attributes,
            };
          })
        : [];

    return {
      success: true,
      data: properties,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
}

export async function getProperty(id) {
  try {
    const response = await axiosInstance.get(`/properties/${id}?populate=*`);
    // console.log(`Get Property By ID:-`, response);

    let {data} = response.data
    return {
      success: true,
      data: {
        id: data.id,
        ...data.attributes
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}

export async function addProperty(property) {
  try {
    console.log(`Property:-`, property);
    const response = await axiosInstance.post(`/properties`, property, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  });
    console.log(`API RES`,response)
  } catch (error) {
    console.log(`ERR`)
    console.error(error)
    return {
      success: false,
      message: error.message
    }
  }
}

export async function getUserPropertyList(id) {
  try {
    let res = await axiosInstance.get(`/properties/owner/${id}`)
    let {data} = res.data;
    console.log(`Get USER Property:-`, data.results);
    return {
      success: res.data.success,
      data:data.results  
    }

  } catch (error) {
    console.log(`ERR`)
    console.error(error)
    return {
      success: false,
      message: error.message
    }
  }
}