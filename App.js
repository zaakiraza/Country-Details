async function searchForCountry() {
    try {
        let input = document.querySelector('input');
        let data = await fetch(`https://restcountries.com/v3.1/name/${input.value}`);
        let response = await data.json();
        if(!data){
            document.getElementById('data').innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYyyJhXmFkKJMcgoPiJUTfLtr-zQtHK_shA&s" alt="">F`
        }
        let [obj] = response;
        console.log(obj)
        const { name, flags, capital, region, languages, borders, maps, population } = obj;
        document.getElementById('data').innerHTML = `
        <table>
            <tr>
                <th>Country Name</th>
                <td>${(name?.common) || "No Data Avaliable"}</td>
            </tr>
            <tr>
                <th>Country Name (Mother Toung)</th>
                <td>${name?.nativeName?.urd?.common || "No Data Avaliable"}</td>
            </tr>
            <tr>
                <th>Borders</th>
                <td>${borders || "No Data Avaliable"}</td>
            </tr>
            <tr>
                <th>Capital</th>
                <td>${capital || "No Data Avaliable"}</td>
            </tr>
            <tr>
                <th>Flag</th>
                <td><img src="${flags?.png || "No Data Avaliable"}" alt="Flag"></td>
            </tr>
            <tr>
                <th>Languages Spoken</th>
                <td>${Object.values(languages) || "No Data Avaliable"}</td>
            </tr>
            <tr>
                <th>Map</th>
                <td><a href="${maps?.googleMaps || "No Data Avaliable"}" target="_blank">View Map</a></td>
            </tr>
            <tr>
                <th>Region</th>
                <td>${region || "No Data Avaliable"}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${population || "No Data Avaliable"}</td>
            </tr>
        </table>`
    }
    catch(error){
        document.getElementById('data').innerHTML = `<h1 style="color:red;">Worng Country Name Or Wrong spelling</h1>`
    }
}