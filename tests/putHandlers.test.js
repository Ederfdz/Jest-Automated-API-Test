// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  price: 150,
};

const expectedResponse = {
  ok: true,
};
/* PUT Test 1 checks that changing a price returns a 200 status code */
test("Should return a 200 status code", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
      method: "PUT",
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
/* PUT Test 2 checks that after changing a price the response body returns ok: true */
test("Should return response body containing 'OK true'", async () => {
  let responseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    responseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(responseBody).toMatchObject(expectedResponse);
});
