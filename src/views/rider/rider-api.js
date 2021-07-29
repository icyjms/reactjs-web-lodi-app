import ApiService from 'utils/ApiService';

const { post, get } = ApiService();
const url = {
  rider: '/rider-applications',
  vehicle_types: '/rider-applications/vehicle-types',
};

async function getVehicleTypes(params) {
  try {
    const res = await get(url.vehicle_types, { params });
    return res;
  } catch (err) {
    throw err;
  }
}

async function createRiderApplication(body) {
  try {
    const res = await post(url.rider, body);
    return res;
  } catch (err) {
    throw err;
  }
}

export { createRiderApplication, getVehicleTypes };
