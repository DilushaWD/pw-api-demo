import { expect, test } from "@playwright/test";

test("API Testing - Post Call 1", async ({ request }) => {
    const resp1 = await request.post("/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })

    const jsonResp1 = await resp1.json()
    console.log(jsonResp1);
    //assertions
    //expect(resp1.status()).toBe(200);
    //expect(resp1.statusText()).toBe("OK");
    //expect(resp1.ok()).toBeTruthy();
    // expect(jsonResp1.booking).toMatchObject({
    //     "firstname" : "Jim",
    //     "lastname" : "Brown",
    //     "totalprice" : 111,
    //     "depositpaid" : true,
    //     "bookingdates" : {
    //     "checkin" : "2018-01-01",
    //     "checkout" : "2019-01-01"
    //     },
    //     "additionalneeds" : "Breakfast"
    // })

    expect(jsonResp1.booking.additionalneeds).toEqual("Breakfast");
})

test("API with UI verification", async ({ request }) => {
    const resp2 = await request.post("https://api.demoblaze.com/addtocart", {
        data: { "id": "aee0bbe9-a653-6a60-fd3a-d04f3c797823", "cookie": "user=f83cbf70-c92d-119c-b097-9df479c01779", "prod_id": 3, "flag": false }
    })
    expect(resp2.status()).toBe(200);
})