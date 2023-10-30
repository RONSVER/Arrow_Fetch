let pName = document.querySelector(".pName");
let pEmail = document.querySelector(".pEmail");
let pWebsite = document.querySelector(".pWebsite");
let num = 1;
let responseData = await fetchSends();
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let btn1 = document.querySelector(".editBtn1");
let btn2 = document.querySelector(".editBtn2");
let btn3 = document.querySelector(".editBtn3");

async function fetchSends() {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${num}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}

function reloadP(data) {
  pName.innerHTML = data.name;
  pEmail.innerHTML = data.email;
  pWebsite.innerHTML = data.website;
}

reloadP(responseData);

left.addEventListener("click", async () => {
  if (num) {
    num--;
    let responseData = await fetchSends(); // Ждем завершения запроса к API
    reloadP(responseData); // Затем обновляем пораграфы
  } else {
    reloadP(responseData);
  }
});

right.addEventListener("click", async () => {
  if (num !== 10) {
    num++;
    let responseData = await fetchSends(); // Ждем завершения запроса к API
    reloadP(responseData); // Затем обновляем пораграфы
  } else {
    reloadP(responseData);
  }
});

function btnsEditLogic(btns1, btns2, btns3) {
  btns1.addEventListener("click", () => {
    pName.setAttribute("contentEditable", "true");
    pName.focus();
  });

  btns2.addEventListener("click", () => {
    pEmail.setAttribute("contentEditable", "true");
    pEmail.focus();
  });

  btns3.addEventListener("click", () => {
    pWebsite.setAttribute("contentEditable", "true");
    pWebsite.focus();
  });

  // ---------------------------

  pName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      pName.setAttribute("contentEditable", "false");
    }
  });

  pEmail.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      pEmail.setAttribute("contentEditable", "false");
    }
  });

  pWebsite.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      pWebsite.setAttribute("contentEditable", "false");
    }
  });
}

btnsEditLogic(btn1, btn2, btn3);
