const form = document.getElementById('form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const passwordConfirmInput = document.getElementById(
  'passwordConfirm',
) as HTMLInputElement;
const dobInput = document.getElementById('dob') as HTMLInputElement;
const countryInput = document.getElementById('country') as HTMLSelectElement;

type AllowedCountries = 'Egypt' | 'Tunisia' | 'Algeria' | 'Morocco' | 'Sudan';

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  dob?: string;
  country?: AllowedCountries;
}

function formSubmission(e: SubmitEvent) {
  console.log('A?A');
  e.preventDefault();

  const data: FormValues = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value,
    passwordConfirm: passwordConfirmInput.value,
    dob: dobInput.value,
    country: countryInput.value as AllowedCountries,
  };

  if (data.password !== data.passwordConfirm) {
    alert('Password must be the same as password confirmation');
    return;
  }

  alert(`Data Submitted successfully ${JSON.stringify(data)}`);
}

form.addEventListener('submit', formSubmission);

