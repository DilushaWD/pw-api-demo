import { test, expect } from "@playwright/test";

test("API Testing - Put Call 1", async ({ request }) => {
    const resPut = await request.put("/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
            "Content-Type": "application/json",
        },
        data: {
            "firstname": "Vishmi",
            "lastname": "Wickramarachchi",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Pan Cakes"
        }
    });

    const jsonresp = await resPut.json();
    console.log(jsonresp);
    //assertions
    expect(resPut.status()).toBe(200);
    expect(resPut.statusText()).toBe("OK");
    expect(resPut.ok()).toBeTruthy();
    expect(jsonresp).toMatchObject({
        "firstname": "Vishmi",
        "lastname": "Wickramarachchi",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Pan Cakes"
    })

    expect(jsonresp.additionalneeds).toEqual("Pan Cakes");

    //Get Call to just check updated details.
    const resGet = await request.get("https://restful-booker.herokuapp.com/booking/1");
    console.log(await resGet.json());
    expect(await resGet.json()).toMatchObject({
        "firstname": "Vishmi",
        "lastname": "Wickramarachchi",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Pan Cakes"
    });
})