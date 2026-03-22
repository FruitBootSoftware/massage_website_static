document.addEventListener('DOMContentLoaded', () => formInit());
function formInit() {
    document.getElementById('form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        document.getElementById('sending-screen').classList.remove('hidden');
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data
        });

        const json = await res.json();

        if (json.success) {
            document.getElementById('success-screen').classList.remove('hidden');
            document.getElementById('sending-screen').classList.add('hidden');
            document.getElementById('form').reset();
        } else {
            document.getElementById('sending-screen').classList.add('hidden');
            alert('Something went wrong. Please try again.');
        }
    });
}