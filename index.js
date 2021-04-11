const form = document.getElementById("myForm");
const country = document.getElementById("country");
const start = document.getElementById("startDate");
const end = document.getElementById("endDate");
const show = document.getElementById("show");

async function handleSubmit(event) {
  event.preventDefault();

  

  if (!country.value || !start.value || !end.value) {
    alert("Enter the details");
    return false;
  }
  console.log(inp1.value)

  const res = await fetch(
    `https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`
  );
  const response = await res.json();

  

  let children = "";
  response.forEach((country) => {
    children += `
    <table class="table">
      <tr>
        <th>Confirmed cases</th>
        <td>${country.Confirmed}</td>
      </tr>
      <tr>
        <th>Active cases</th>
        <td>${country.Active}</td>
      </tr>
      <tr>
        <th>Deaths</th><br>
        <td>${country.Deaths}</td>
      </tr>
    </table>
    `;
  });

  show.innerHTML = children;
}