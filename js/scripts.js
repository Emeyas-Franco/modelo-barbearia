document.getElementById(`booking-form`).addEventListener(`submit`, function(event){
    event.preventDefault();

    const name = document.getElementById(`name`).value;
    const email = document.getElementById(`email`).value;
    const cel = document.getElementById(`cel`).value;
    const service = document.getElementById(`service`).value;
    const date = document.getElementById(`date`).value;
    const time = document.getElementById(`time`).value;

    if (name && email && cel && service && date && time) {
        const bookingData = {
            name: name,
            email: email,
            cel: cel,
            service: service,
            date: date,
            time: time,
        };
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        alert('Agendamento realizado com sucesso!');
    } else {
        alert(`Por favor, preencha todos os campos.`);
    }
});
    
document.getElementById('btnSubmit').addEventListener('click', function() {
const bookingData = JSON.parse(localStorage.getItem('bookingData'));

if (bookingData) {
    const whatsappMessage = `Olá, eu gostaria de agendar um horário na Barbearia Premium.\n` +
                            `Nome: ${bookingData.name}\n` +
                            `Email: ${bookingData.email}\n` +
                            `Serviço: ${bookingData.service}\n` +
                            `Data: ${bookingData.date}\n` +
                            `Hora: ${bookingData.time}`;
    
    const whatsappUrl = `https://wa.me/5562986052988?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
} else {
    alert('Por favor, realize um agendamento primeiro.');
}
});