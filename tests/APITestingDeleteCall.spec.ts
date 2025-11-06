import { test, expect } from "@playwright/test";

test("API Testing - Delete Call 1", async ({ request }) => {
    const respDelete = await request.delete("/booking/2");
    expect(respDelete.status()).toBe(201);

    // const respDelText = await respDelete.text();
    // console.log(respDelText);
    // expect(respDelText).toBe("Created");

    const respGet = await request.get("/booking/2")
    console.log(respGet.status());
    expect(respGet.status()).toBe(404);
});