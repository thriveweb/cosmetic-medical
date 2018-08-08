import React, { Component } from 'react'
import { stringify } from 'qs'
const fetch = window.fetch

export default class Form extends Component {
  static defaultProps = {
    name: 'Controlled Form',
    siteTitle: ''
  }

  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: `New Submission from ${this.props.siteTitle || this.props.name}!`,
    _gotcha: '',
    disabled: false,
    alert: '',
    action: '/contact/',
    'form-name': this.props.name
  }

  form = null

  componentDidMount () {
    Array.from(document.querySelectorAll('.Form .Input')).forEach(input => {
      input.addEventListener('invalid', () => {
        console.log(input)
        input.dataset.touched = true
      })
      input.addEventListener('blur', () => {
        if (input.value !== '') input.dataset.touched = true
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      subject: this.state.subject,
      _gotcha: this.state._gotcha,
      'form-name': this.state['form-name']
    }
    this.setState({ disabled: true })
    fetch(this.state.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(res => {
        this.setState({
          disabled: false,
          alert: 'Thanks for your enquiry, we will get back to you soon.',
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: `New Submission from ${this.props.siteTitle}!`,
          _gotcha: ''
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          disabled: false,
          alert:
            '❗️ There is a problem, your message has not been sent, please try contacting us via email'
        })
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <StyledForm
        name={this.state['form-name']}
        ref={form => {
          this.form = form
        }}
        className='Form'
        action={this.state.action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && <Alert>{this.state.alert}</Alert>}
        <Label className='Label'>
          <Input
            value={this.state.name}
            onChange={this.handleChange}
            className='Input'
            type='text'
            placeholder='Name'
            name='name'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </Label>
        <Label className='Label'>
          <Input
            value={this.state.phone}
            onChange={this.handleChange}
            className='Input'
            type='text'
            placeholder='Phone'
            name='phone'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </Label>
        <Label className='Label'>
          <Input
            value={this.state.email}
            onChange={this.handleChange}
            className='Input'
            type='email'
            placeholder='Email'
            name='email'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </Label>
        <Label className='Label'>
          <Textarea
            value={this.state.message}
            onChange={this.handleChange}
            className='Input'
            placeholder='Message'
            name='message'
            rows='10'
            required
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <LineGroup />
        </Label>
        <Input
          type='text'
          name='_gotcha'
          style={{ display: 'none' }}
          value={this.state._gotcha}
          onChange={this.handleChange}
        />
        <Input type='hidden' name='subject' value={this.state.subject} />
        <Input type='hidden' name='form-name' value={this.state['form-name']} />
        <SubmitButton
          tertiary
          className='button'
          type='submit'
          value='Enquire'
          disabled={this.state.disabled ? 'disabled' : ''}
        />
      </StyledForm>
    )
  }
}

const LineGroup = () => (
  <Line className='Line' viewBox='0 0 40 2' preserveAspectRatio='none'>
    <path d='M0 1 L40 1' />
    <path d='M0 1 L40 1' className='focus' />
    <path d='M0 1 L40 1' className='invalid' />
    <path d='M0 1 L40 1' className='valid' />
  </Line>
)

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 500px;

  & > * + * {
    margin-top: 1.5rem;
  }
`
const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const Line = styled.svg`
  width: 100%;
  height: 1px;
  stroke: ${color.lightGrey};
  stroke-width: 2px;

  & .focus,
  & .valid,
  & .invalid {
    transition: all 0.2s;
    stroke-dasharray: 0, 20;
    stroke-dashoffset: -20;
  }

  & .focus {
    stroke: ${color.tertiary};
  }

  & .valid {
    stroke: hsl(166, 72%, 40%);
  }

  & .invalid {
    stroke: #ff3d3d;
  }
`
const Input = styled.input`
  font-family: inherit;
  font-weight: 400;
  flex-grow: 1;
  box-sizing: border-box;
  display: block;
  margin: 0;
  border: none;
  padding: 1em;
  line-height: 1;
  transition: border-color 0.2s;
  resize: none;
  background: ${color.lightGrey};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${color.lightGrey} inset !important;
  }
}

  &:focus {
    outline: none;
  }

  &:focus ~ ${Line} .focus,
  &:valid ~ ${Line} .valid,
  &[data-touched]:invalid ~ ${Line} .invalid {
    stroke-dasharray: 40, 0;
    stroke-dashoffset: 0;
  }

  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
    cursor: progress;
  }

  &::placeholder {
    text-transform: uppercase;
  }
`
const Textarea = Input.withComponent('textarea')
const Alert = styled.p`
  background: whitesmoke;
  width: 100%;
  padding: 2rem;
`
const SubmitButton = styled(ButtonInput)`
  width: 90%;
  margin: 2rem auto 0;
`
