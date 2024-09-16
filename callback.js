// function success() {
//   console.log("Success");
// }
// function fail() {
//   console.log("Fail");
// }
// function error() {
//   console.log("Error");
// }
// function exec(data, callback) {
//   if (data) {
//     console.log(`balance:${data}`);
//   }
//   callback();
// }
// function trigger(data) {
//   if (data > 0) {
//     exec(data, success);
//   } else if (data <= 0) {
//     exec(data, fail);
//   } else {
//     exec("error", error);
//   }
// }
// trigger(-1);

async function API() {
  try {
    const response = await fetch(
      "https://66e526e25cc7f9b6273c6b80.mockapi.io/register"
    );
    const data = await response.json();
    //console.table(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  //   const response = fetch("https://66e526e25cc7f9b6273c6b80.mockapi.io/users");
  //   const data = response.json();
  //   console.log(data);
  //   return data;
}
//API()

async function APIDATA() {
  const apidata = await API();
  //console.log(apidata);
  /*
  const mockdata={
  "name":"hello"
  }
  */
  //const structureddatamapx=mockdata.map(data)=>{console.log(data)}
  const structureddatamap = apidata.map((data) => {
    console.log(data);
  });
  const activeUsers = apidata.filter((user) => user.isActive);
  const activeUsers1 = apidata.filter((user) => user.isActive === false);
  console.log(activeUsers);
  const structureddatamap1 = activeUsers.map((data) => {
    console.log(data);
  });
}
APIDATA();
