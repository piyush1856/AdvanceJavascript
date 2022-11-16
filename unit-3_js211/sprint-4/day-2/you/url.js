let searchParams = (url,param) => {
    let u = new URL(url);
    let p = new URLSearchParams(url.search);

    console.log(p)
}
searchParams("https://example.com?foo=1&bar=2", "foo")




