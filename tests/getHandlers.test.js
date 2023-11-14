// eslint-disable-next-line no-undef
const config = require("../config");
/* GET Test 1 checks that getting a list of warehouses returns a 200 status code */
test("Should return successful 200 status code", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});
/* GET Test 2 checks that the number of couriers returned are greater than 0 */
test("Should return a number greater than 0", async () => {
  let response;
  try {
    response = await fetch(`${config.API_URL}/api/v1/couriers`);
  } catch (error) {
    console.error(error);
  }
  // Convert response to JavaScript object
  const data = await response.json();
  const countCouriers = data.length;
  expect(countCouriers).toBeGreaterThan(0);
});
