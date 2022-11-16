let searchParams = (url,param) => {
    let u = new URL(url);
    let params = new URLSearchParams(u.search);

    let f = params.get(param)
    console.log(f)
    return f;
}
searchParams("https://example.com/posts/1/comments?_sort=votes&_order=asc", "_order")


// test("test url", () => {
//     searchParams(
//         "https://example.com/posts/1/comments?_sort=votes&_order=asc", 
//         "_order"
//     ).toBe("asc")

// })

