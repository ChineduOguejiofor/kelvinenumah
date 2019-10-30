const URL =
  'https://us-central1-my-firebase-functions-da20c.cloudfunctions.net/sendMail';
const formAction = async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  const newMessage = {
    name,
    email,
    phone,
    message
  };
  try {
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 200) {
      window.location.href = 'success.html';
    } else {
      window.location.href = 'failure.html';
    }
  } catch (error) {
    window.location.href = 'failure.html';
  }
};
