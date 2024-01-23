const userListElement = document.querySelector('#userList');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentPage = 1;

const getData = async (page) => {
  try {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await res.json();

    userListElement.innerHTML = "";

    data.data.forEach(user => {
      userListElement.innerHTML += `
        <div class="user-item d-flex p-4 col-sm-6 col-md-4 col-lg-3 gap-4 flex-column w-100 ">
          <div class="product-header d-flex align-items-center justify-content-between flex-wrap  gap-2 flex-wrap ">
            <img src="${user.avatar}" class="user-avatar" alt="avatar">
            <div class="product-detail d-flex flex-column align-items-center justify-content-center ">
              <p class='bold-title'>${user.first_name} ${user.last_name}</p>
              <p class='small-title'>${user.email}</p>
            </div>
          </div>
          <a href="details.html?id=${user.id}" class='detail-link' ">Show details</a>
        </div>
      `;
    });

    updatePaginationButtons();
  } catch (err) {
    console.log('error', err);
  }
}

//ilk 6 veri 
getData(currentPage);


prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    getData(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  currentPage++;
  getData(currentPage);
});

function updatePaginationButtons() {
  prevBtn.disabled = currentPage === 1;
}
