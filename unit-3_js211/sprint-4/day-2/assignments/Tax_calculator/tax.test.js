import calulator from "./tax.js";


// let income=document.querySelector("#income").value;

test("Tax calculator",()=>{
    expect(calulator(300000)).toBe(30000);
    expect(calulator(600000)).toBe(120000);
    expect(calulator(596400)).toBe(119280);
    expect(calulator(2300000)).toBe(690000);
})