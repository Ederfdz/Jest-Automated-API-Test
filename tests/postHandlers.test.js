// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  // put your body here
  ids: [1],
};
/* POST Test 1 checks that searching an existing product returns a 200 status code */
test("Should return 200 status code", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/kits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});
/* POST Test 2 checks that searching ID 1, the first kit name in the response body will be "For picnic"  */
test("Should return response body containing 'For picnic'", async () => {
  let responseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/kits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    responseBody = await response.json();
  } catch (error) {
    console.error(error);
  }

  expect(responseBody[0].name).toBe("For picnic");
});
