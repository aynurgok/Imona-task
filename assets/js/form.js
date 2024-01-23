const form_button = document.querySelector('#sendForm');
const name_input = document.querySelector('input[name="name"]');
const job_input = document.querySelector('input[name="job"]');
const resultDiv = document.querySelector('.result');

const sendForm = async () => {
    try {
        let obj = {
            name: name_input.value,
            job: job_input.value
        }
        if (!obj.name || !obj.job) {
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
            
            <div class="d-flex align-items-center justify-content-center flex-column gap-3 result-info mt-4">
                <p>Lütfen kullanıcı bilgilerini giriniz</p>
             </div> `;
            return; 
        }
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(obj)
        })
       
        const responseData = await response.json();
       
        if(responseData.id && responseData.createdAt) {
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
            <div class="d-flex align-items-center justify-content-center flex-column gap-3 result-info mt-4">
                <p>Congratulations user added</p>
                <p><span>id:</span> ${responseData.id} </p>
                <p><span>created_at:</span> ${responseData.createdAt} </p> 
             </div>   
            `
            name_input.value = '';
            job_input.value = '';
        } 
        
    } catch (error) {
        console.log(error)
    }
}
form_button.addEventListener('click', sendForm);