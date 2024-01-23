const container = document.querySelector(".container")
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const userID = urlParams.get('id')
console.log(userID)

const getData = async () =>  {
    try {
        if(userID > 0) {
            const res = await fetch(`https://reqres.in/api/users/${userID}`)
            const data =  await res.json();
            let user = data;
            console.log(user.data.first_name)
            container.innerHTML = `
            <div class="row g-0 mx-0  user_detail mt-5 d-flex align-items-center justify-content-center">
            <div class="user_detail-image col-lg-3 col-lg-3 col-sm-3 p-4 d-flex flex-column gap-4">
                <img src="${user.data.avatar}" alt="product">
            </div>
            <div class="user_detail-info col-lg-9 col-lg-9 col-sm-9 p-4 row">
                <h4 class="d-flex">İnformation</h4>
                <div class=" d-flex flex-column py-4  col-sm-5  ">
                    <span>User name</span>
                    <p class="user-title">${user.data.first_name} ${user.data.last_name}</p>
                </div>
                <div class=" d-flex  flex-column py-4  col-sm-5 ">
                    <span>Email</span>
                    <p class="user-title">${user.data.email}</p>
                </div>
            </div>
           </div>
            `
        } else {
            container.innerHTML = '<p>Sayfa bulunmamakta!</p>'
        }

    } catch(err) {
        console.log('error ss', err)
    }
}

getData();