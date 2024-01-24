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
        <div class="user-item p-4 col-sm-6 col-md-4 col-lg-3 gap-4 ">
          <div class="w-100 d-flex align-items-center justify-content-between gap-2 flex-wrap flex-column">
            <div class='image'>
              <img src="${user.avatar}" class="user-avatar" alt="avatar">
            </div>
            <div class="product-detail d-flex flex-column align-items-center justify-content-end gap-1">
              <p class='bold-title'>${user.first_name} ${user.last_name}</p>
              <p class='small-title'>${user.email}</p>
              <a href="details.html?id=${user.id}" class='detail-link' ">Show details</a>
            </div>
          </div>
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


prevBtn.addEventListener('click', (e) => {
  getData(e.target.textContent);
  currentPage = e.target.textContent;
});

nextBtn.addEventListener('click', (e) => {
  getData(e.target.textContent);
  currentPage = e.target.textContent;
});

function updatePaginationButtons() {
  prevBtn.disabled = currentPage == 1;
}
