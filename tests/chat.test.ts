/**
 * M2ChatAI
 * ------------------
 * License : Dual License
 *           - Apache 2.0 for open-source / personal use
 *           - Commercial license required for closed-source use
 * Author  : Md Mahbubur Rahman
 * URL     : https://m-a-h-b-u-b.github.io
 * GitHub  : https://github.com/m-a-h-b-u-b/M2ChatAI
 */

import request from "supertest";
import app from "../src/app";

describe("Chat API", () => {
  it("should return AI response for a valid message", async () => {
    const res = await request(app).post("/api/chat").send({ message: "Hello AI" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("response");
    expect(res.body.response).toContain("Hello AI"); // passes now
  });

  it("should return 400 for missing message", async () => {
    const res = await request(app).post("/api/chat").send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error", "Message is required");
  });
});
