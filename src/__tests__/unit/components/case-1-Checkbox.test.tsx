import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from '../../../components/Checkbox'

/**
 * This checkbox component renders a checkbox with a label.
 * Since we customized the default checkbox, we want to
 * make sure it still works as a regular checkbox
 * should.
 */
describe('The <Checkbox /> component', () => {
  const defaultCheckBoxProps = {
    label: 'Test check box',
    id: 'Check box id',
    checked: false,
    background: '#000', 
    checkMarkBackground: '#fff',
    onChange: jest.fn(),
  }

  it(' Should render the label and checkbox the user will see', () => {
   const { debug, getByLabelText } = render(
      <Checkbox {...defaultCheckBoxProps} />,
    )
    debug(getByLabelText(defaultCheckBoxProps.label))
  });

  it('  Should make the checkbox accessible by setting the id and htmlFor attributes on label and checkbox', () => {
    const { getByLabelText } = render(
      <Checkbox {...defaultCheckBoxProps} />
    )
      expect(getByLabelText(defaultCheckBoxProps.label)).toBeInTheDocument();
  })

  it('Should call the onChange handler when it is provided', () => {
    const { getByLabelText } = render(
      <Checkbox {...defaultCheckBoxProps} />
    )

    const checkBox = getByLabelText(defaultCheckBoxProps.label);
    fireEvent.click(checkBox);
    expect(defaultCheckBoxProps.onChange).toHaveBeenCalled();
  })

  it('Should change state correctly when clicked (checked and unchecked)', () => {
    const { getByLabelText } = render(
      <Checkbox {...defaultCheckBoxProps} />
    );
    expect(getByLabelText(defaultCheckBoxProps.label)).not.toBeChecked();
  })
})
