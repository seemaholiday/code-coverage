import { render, screen, fireEvent} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("text input element test case", ()=>{
  render(<App/>)
  const nameInputElement = screen.getByLabelText("nameInput")
  const emailInputElement = screen.getByLabelText("emailInput")
  const designationInputElement = screen.getByLabelText("designationInput")
  const phoneInputElement = screen.getByLabelText("phoneInput")

  fireEvent.change(nameInputElement, {target:{value:"abc"}})
  fireEvent.change(emailInputElement, {target:{value:"abc@gmail.com"}})
  fireEvent.change(designationInputElement, {target:{value:"banker"}})
  fireEvent.change(phoneInputElement, {target:{value:"0987654321"}})
})

test("hobbies dropdown element test case", ()=>{
    render(<App/>)
    const hobbiesDropdownElement = screen.getByLabelText("hobbiesInput")
    fireEvent.change(hobbiesDropdownElement, {target:{value:"cooking"}})
})
test("checkbox test case", ()=>{
  render(<App/>)
    const teaElement = screen.getByLabelText("teaEvent")
    const coffyElement = screen.getByLabelText("coffyEvent")
    const shakeElement = screen.getByLabelText("shakeEvent")

    fireEvent.click(teaElement)
    fireEvent.click(coffyElement)
    fireEvent.click(shakeElement)
})

test("radio button test case", ()=>{
  render(<App/>)
  const maleElement = screen.getByLabelText("maleEvent")
  const femaleElement = screen.getByLabelText("femaleEvent")

  fireEvent.click(maleElement)
  fireEvent.click(femaleElement)
})

test("handle submit event test case", async ()=>{
  render(<App/>)
  const button = screen.getByRole("button")
  const userEventBtn = userEvent.setup()
  button.preventDefault = jest.mock()
  await userEventBtn.click(button, button.preventDefault)
})

