import timeCon from "./time.js";

// let milli=60000

test("Time convert",()=>{
    expect(timeCon(5200)).toBe("05 Seconds");
    expect(timeCon(60000)).toBe("01 Minutes 00 Seconds");
    expect(timeCon(180000)).toBe("03 Minutes 00 Seconds");
    expect(timeCon(200000)).toBe("03 Minutes 20 Seconds");
    expect(timeCon(5220000)).toBe("01 Hours 27 Minutes 00 Seconds");
})

