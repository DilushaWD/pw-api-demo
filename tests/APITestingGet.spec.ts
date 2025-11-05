import { test, request, APIRequestContext} from '@playwright/test';

let reqcontext2: APIRequestContext
test.beforeAll("Before all the Tests", async () => {
    reqcontext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: 'application/json'
        }
    })
})

test("API Testing Get Prctice 1", async ({ request }) => {
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers: {
            Accept: 'application/json'
        },
    });
    console.log(await resp1.json());
});

test("API Testing Get Prctice 2", async () => {
    const reqcontext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: 'application/json'
        }
    });
    const resp1 = await reqcontext.get("/booking");
    console.log(await resp1.json());
});

test("API Testing Get Prctice 3", async () => {
    const resp1 = await reqcontext2.get("/booking");
    console.log(await resp1.json());
});

test("API Testing Get Prctice 4", async ({request}) => {
    const resp1 = await reqcontext2.get("/booking");
    console.log(await resp1.json());
});