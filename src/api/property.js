import axiosInstance from "./axiosInstance";

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
} 

let getFilters = (filters) => {
  let filterObject = {};
  let sortObject = {};

  if (filters.city != "All") {
    filterObject.city = { $eqi: filters.city.toLowerCase() };
  }

  if (filters.sort !== "none") {
    sortObject.cost = (filters.sort === "Low to High")? "asc": "desc";
  } 
  

  return {
    filters: filterObject,
    sort: sortObject,
  };
};

export async function propertyList(filters) {
  
  let paramsObj = getFilters(filters);
  
  try {
    const response = await axiosInstance.get(
      `properties?populate=*`,
      {
        params: {
          filters: paramsObj.filters,
          sort: paramsObj.sort,
        },
      }
    );
    
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
    return {
      success: false,
      message: error.message,
    };
  }
}

export async function getProperty(id) {

  try {
    const response = await axiosInstance.get(`/properties/${id}?populate=*`);
    
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
    
    const formData = new FormData();
    
    // Creating formdata
    Object.keys(property).forEach(key => {
      if (key !== "images") formData.append(key, property[key]);
    });
    
    // Upload Image
    Object.keys(property.images).forEach(key => {
      formData.append("images", property.images[key]);
    });

    const response = await axiosInstance.post(`/properties`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  });
    
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
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
    return {
      success: res.data.success,
      data:data.results  
    }

  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}