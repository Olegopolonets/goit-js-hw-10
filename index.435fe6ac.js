function e(e){const o=document.querySelector(".breed-select");e.map((e=>{o.insertAdjacentHTML("beforeend",`<option value=${e.id}> ${e.name} </option>`)}))}console.log("live_Yy7eiFiKcvfhRTQ6mGY9ukQ7zQoyZgLCFw1Mfdp7iMlSKUQcZmv6LiNFLAu15R1n"),fetch("https://api.thecatapi.com/v1/breeds?live_Yy7eiFiKcvfhRTQ6mGY9ukQ7zQoyZgLCFw1Mfdp7iMlSKUQcZmv6LiNFLAu15R1n").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((o=>{e(o)})).catch(console.log);
//# sourceMappingURL=index.435fe6ac.js.map