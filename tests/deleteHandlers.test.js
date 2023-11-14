// eslint-disable-next-line no-undef
const config = require("../config");

const expectedResponse = {
  ok: true,
};
/* DELETE Test 1 checks that deleting an existing order returns a 200 status code */
test("Should return a 200 status code", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/293`, {
      method: "DELETE",
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});
/* DELETE Test 2 checks that after deleting an existing kit the response returns ok: true */
test("Should return a response body containing 'OK true'", async () => {
  let responseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/293`, {
      method: "DELETE",
    });
    responseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(responseBody).toMatchObject(expectedResponse);
});
